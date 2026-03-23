// 备考词书管理模块

const WORDBOOK_STORAGE_KEY = 'xz_wordbooks';
const WORDBOOK_PROGRESS_KEY = 'xz_wordbook_progress';

// 肖战角色数据库（用于生成主题例句）
const xzCharacters = [
    { name: 'Wei Wuxian', drama: 'The Untamed', zh: '魏无羡', info: '陈情令' },
    { name: 'Xiao Chun', drama: 'Ace Troops', zh: '顾一野', info: '王牌部队' },
    { name: 'Shi Ying', drama: 'The Oath of Love', zh: '顾魏', info: '余生请多指教' },
    { name: 'Xiao Zhan', drama: 'Reality', zh: '肖战', info: '真实的他' }
];

// 获取所有词书
function getWordbooks() {
    const stored = localStorage.getItem(WORDBOOK_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
}

// 保存词书
function saveWordbook(wordbook) {
    const wordbooks = getWordbooks();
    wordbook.id = Date.now().toString();
    wordbook.createTime = new Date().toISOString();
    wordbook.wordCount = wordbook.words.length;
    
    // 如果没有设置封面，使用默认封面
    if (!wordbook.cover) {
        wordbook.cover = '📚';
    }
    
    wordbooks.unshift(wordbook);
    localStorage.setItem(WORDBOOK_STORAGE_KEY, JSON.stringify(wordbooks));
    return wordbook.id;
}

// 删除词书
function deleteWordbook(id) {
    let wordbooks = getWordbooks();
    wordbooks = wordbooks.filter(wb => wb.id !== id);
    localStorage.setItem(WORDBOOK_STORAGE_KEY, JSON.stringify(wordbooks));
    
    // 同时删除进度数据
    const progress = getWordbookProgress();
    delete progress[id];
    localStorage.setItem(WORDBOOK_PROGRESS_KEY, JSON.stringify(progress));
}

// 获取词书学习进度
function getWordbookProgress() {
    const stored = localStorage.getItem(WORDBOOK_PROGRESS_KEY);
    return stored ? JSON.parse(stored) : {};
}

// 标记单词为已学习
function markWordLearned(wordbookId, wordIndex) {
    const progress = getWordbookProgress();
    if (!progress[wordbookId]) {
        progress[wordbookId] = { learned: [] };
    }
    if (!progress[wordbookId].learned.includes(wordIndex)) {
        progress[wordbookId].learned.push(wordIndex);
        localStorage.setItem(WORDBOOK_PROGRESS_KEY, JSON.stringify(progress));
    }
}

// 检查单词是否已学习
function isWordLearned(wordbookId, wordIndex) {
    const progress = getWordbookProgress();
    return progress[wordbookId]?.learned?.includes(wordIndex) || false;
}

// 解析Excel/CSV文件
async function parseWordbookFile(file) {
    const fileName = file.name;
    const fileExt = fileName.split('.').pop().toLowerCase();
    
    if (fileExt === 'csv') {
        return await parseCSV(file);
    } else if (fileExt === 'xlsx' || fileExt === 'xls') {
        return await parseExcel(file);
    } else {
        throw new Error('不支持的文件格式，请上传 .xlsx、.xls 或 .csv 文件');
    }
}

// 解析CSV文件
async function parseCSV(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const text = e.target.result;
                const lines = text.split('\n').filter(line => line.trim());
                
                if (lines.length < 2) {
                    reject(new Error('CSV 文件内容不足，至少需要表头和一行数据'));
                    return;
                }
                
                const headers = lines[0].split(',').map(h => h.trim());
                const words = [];
                
                for (let i = 1; i < lines.length; i++) {
                    const values = lines[i].split(',').map(v => v.trim());
                    if (values.length >= 3) {
                        const baseData = {
                            word: values[0] || '',
                            partOfSpeech: values[1] || '',
                            meaning: values[2] || '',
                            note: '',
                            extraCols: []
                        };
                        
                        // 检查是否有额外的词性-释义对（从第4列开始）
                        const extraCols = [];
                        for (let j = 3; j < values.length; j++) {
                            if (values[j]) {
                                extraCols.push(values[j]);
                            }
                        }
                        
                        // 多列格式处理（同Excel）
                        if (extraCols.length >= 2) {
                            let potentialNote = extraCols[extraCols.length - 1];
                            let remainingCols = extraCols.slice(0, -1);
                            
                            if (remainingCols.length % 2 === 0 && remainingCols.length > 0) {
                                baseData.extraCols = remainingCols;
                                baseData.note = potentialNote;
                            } else if (extraCols.length % 2 === 0) {
                                baseData.extraCols = extraCols;
                            } else {
                                baseData.note = potentialNote;
                                if (remainingCols.length > 0 && remainingCols.length % 2 === 0) {
                                    baseData.extraCols = remainingCols;
                                }
                            }
                        } else if (extraCols.length === 1) {
                            baseData.note = extraCols[0];
                        }
                        
                        words.push(parseWordEntry(baseData));
                    }
                }
                
                if (words.length === 0) {
                    reject(new Error('未找到有效的单词数据'));
                    return;
                }
                
                resolve({
                    name: file.name.replace('.csv', ''),
                    words: words
                });
            } catch (error) {
                reject(new Error('CSV 解析失败: ' + error.message));
            }
        };
        reader.onerror = () => reject(new Error('文件读取失败'));
        reader.readAsText(file, 'UTF-8');
    });
}

// 解析单个词条，支持多词性
// 新格式：每个词性和释义独立占一列
// 格式：[单词, 词性1, 释义1, 词性2, 释义2, 词性3, 释义3, ..., 备注]
function parseWordEntry(rawData) {
    const word = rawData.word;
    const partOfSpeech = rawData.partOfSpeech;
    const meaning = rawData.meaning;
    const note = rawData.note;
    
    // 新增：检测多列词性格式（词性和释义成对出现）
    // 如果 rawData 有额外的列数据，说明是多列格式
    if (rawData.extraCols && rawData.extraCols.length > 0) {
        // 多列格式：[词性1, 释义1, 词性2, 释义2, ...]
        const meanings = [];
        
        // 第一组词性和释义
        if (partOfSpeech && meaning) {
            meanings.push({
                pos: partOfSpeech,
                def: meaning
            });
        }
        
        // 处理额外的词性-释义对
        for (let i = 0; i < rawData.extraCols.length; i += 2) {
            const pos = rawData.extraCols[i];
            const def = rawData.extraCols[i + 1];
            
            if (pos && def) {
                meanings.push({
                    pos: pos,
                    def: def
                });
            }
        }
        
        if (meanings.length > 1) {
            return {
                word: word,
                partOfSpeech: meanings.map(m => m.pos).join('/'),
                meaning: meanings.map(m => m.def).join('；'),
                meanings: meanings,
                note: note,
                isMultiPos: true
            };
        }
    }
    
    // 原有逻辑：检测是否包含多词性（用 "/" 或 ";" 分隔）
    const posSeparators = /[\/;；]/;
    const meaningSeparators = /[；;]/;
    
    if (posSeparators.test(partOfSpeech) || meaningSeparators.test(meaning)) {
        // 多词性情况
        const posArray = partOfSpeech.split(posSeparators).map(p => p.trim()).filter(p => p);
        const meaningArray = meaning.split(meaningSeparators).map(m => m.trim()).filter(m => m);
        
        // 构建多词性数据结构
        const meanings = [];
        
        if (posArray.length === meaningArray.length) {
            // 词性和释义一一对应
            for (let i = 0; i < posArray.length; i++) {
                meanings.push({
                    pos: posArray[i],
                    def: meaningArray[i]
                });
            }
        } else if (posArray.length === 1 && meaningArray.length > 1) {
            // 单一词性，多个释义
            meaningArray.forEach(m => {
                meanings.push({
                    pos: posArray[0],
                    def: m
                });
            });
        } else if (posArray.length > 1 && meaningArray.length === 1) {
            // 多个词性，单一释义
            posArray.forEach(p => {
                meanings.push({
                    pos: p,
                    def: meaningArray[0]
                });
            });
        } else {
            // 不匹配，按第一个词性处理全部释义
            meaningArray.forEach(m => {
                meanings.push({
                    pos: posArray[0] || '',
                    def: m
                });
            });
        }
        
        return {
            word: word,
            partOfSpeech: posArray.join('/'), // 保留原始格式用于显示
            meaning: meaning, // 保留原始格式
            meanings: meanings, // 新增：结构化的多词性数据
            note: note,
            isMultiPos: true // 标记为多词性
        };
    } else {
        // 单一词性情况
        return {
            word: word,
            partOfSpeech: partOfSpeech,
            meaning: meaning,
            meanings: [{
                pos: partOfSpeech,
                def: meaning
            }],
            note: note,
            isMultiPos: false
        };
    }
}

// 解析Excel文件（使用SheetJS库）
async function parseExcel(file) {
    return new Promise((resolve, reject) => {
        // 检查是否加载了SheetJS库
        if (typeof XLSX === 'undefined') {
            reject(new Error('Excel解析库未加载，请刷新页面重试'));
            return;
        }
        
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                
                // 读取第一个工作表
                const firstSheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[firstSheetName];
                
                // 转换为JSON
                const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
                
                if (jsonData.length < 2) {
                    reject(new Error('Excel 文件内容不足，至少需要表头和一行数据'));
                    return;
                }
                
                const words = [];
                
                // 从第二行开始读取数据（跳过表头）
                for (let i = 1; i < jsonData.length; i++) {
                    const row = jsonData[i];
                    if (row.length >= 3 && row[0]) {
                        const baseData = {
                            word: String(row[0] || '').trim(),
                            partOfSpeech: String(row[1] || '').trim(),
                            meaning: String(row[2] || '').trim(),
                            note: '',
                            extraCols: []
                        };
                        
                        // 检测格式：
                        // 格式1（多列）：[单词, 词性1, 释义1, 词性2, 释义2, ..., 备注]
                        // 格式2（单列）：[单词, 词性, 释义, 备注]
                        
                        // 检查是否是多列格式（有多个词性-释义对）
                        let isMultiColumn = false;
                        const extraCols = [];
                        
                        // 从第4列开始检查是否有额外的词性-释义对
                        for (let j = 3; j < row.length; j++) {
                            const cellValue = String(row[j] || '').trim();
                            if (cellValue) {
                                extraCols.push(cellValue);
                            }
                        }
                        
                        // 如果有多个非空列，且数量是偶数，可能是多列格式
                        if (extraCols.length >= 2) {
                            // 检查是否是词性-释义对格式
                            // 最后一列可能是备注，先尝试作为备注处理
                            let potentialNote = extraCols[extraCols.length - 1];
                            let remainingCols = extraCols.slice(0, -1);
                            
                            if (remainingCols.length % 2 === 0 && remainingCols.length > 0) {
                                // 偶数列，可能是词性-释义对
                                isMultiColumn = true;
                                baseData.extraCols = remainingCols;
                                baseData.note = potentialNote;
                            } else if (extraCols.length % 2 === 0) {
                                // 全部都是词性-释义对
                                isMultiColumn = true;
                                baseData.extraCols = extraCols;
                            } else {
                                // 奇数列，最后一列作为备注
                                baseData.note = potentialNote;
                                if (remainingCols.length > 0 && remainingCols.length % 2 === 0) {
                                    isMultiColumn = true;
                                    baseData.extraCols = remainingCols;
                                }
                            }
                        } else if (extraCols.length === 1) {
                            // 只有一个额外列，作为备注
                            baseData.note = extraCols[0];
                        }
                        
                        words.push(parseWordEntry(baseData));
                    }
                }
                
                if (words.length === 0) {
                    reject(new Error('未找到有效的单词数据'));
                    return;
                }
                
                resolve({
                    name: file.name.replace(/\.(xlsx|xls)$/, ''),
                    words: words
                });
            } catch (error) {
                reject(new Error('Excel 解析失败: ' + error.message));
            }
        };
        reader.onerror = () => reject(new Error('文件读取失败'));
        reader.readAsArrayBuffer(file);
    });
}

// 生成肖战主题例句
function generateXZExample(word, meaning, partOfSpeech) {
    // 如果已经有预定义的例句，直接使用
    if (xzExamples[word.toLowerCase()]) {
        return xzExamples[word.toLowerCase()];
    }
    
    // 随机选择一个角色或使用肖战本人
    const character = xzCharacters[Math.floor(Math.random() * xzCharacters.length)];
    const pos = (partOfSpeech || '').toLowerCase();
    
    // 根据词性生成合适的例句
    let templates = [];
    
    // 判断词性类型
    if (pos.includes('adj')) {
        // 形容词
        templates = [
            {
                en: `Xiao Zhan looks ${word} in this photo.`,
                zh: `肖战在这张照片中看起来很${meaning}。`
            },
            {
                en: `The character ${character.name} is ${word} and charming.`,
                zh: `角色${character.zh}${meaning}且迷人。`
            },
            {
                en: `Fans love how ${word} Xiao Zhan is in real life.`,
                zh: `粉丝们喜欢现实生活中肖战是如此${meaning}。`
            }
        ];
    } else if (pos.includes('v')) {
        // 动词
        templates = [
            {
                en: `Xiao Zhan can ${word} many different roles.`,
                zh: `肖战可以${meaning}许多不同的角色。`
            },
            {
                en: `${character.name} needs to ${word} for the mission.`,
                zh: `${character.zh}需要为任务${meaning}。`
            },
            {
                en: `Fans ${word} Xiao Zhan's dedication to his work.`,
                zh: `粉丝们${meaning}肖战对工作的投入。`
            }
        ];
    } else if (pos.includes('n')) {
        // 名词
        templates = [
            {
                en: `Xiao Zhan has a deep ${word} for acting.`,
                zh: `肖战对表演有深深的${meaning}。`
            },
            {
                en: `The ${word} of ${character.name} is unforgettable.`,
                zh: `${character.zh}的${meaning}令人难忘。`
            },
            {
                en: `This drama shows Xiao Zhan's ${word} perfectly.`,
                zh: `这部剧完美地展现了肖战的${meaning}。`
            }
        ];
    } else if (pos.includes('adv')) {
        // 副词
        templates = [
            {
                en: `Xiao Zhan performs ${word} in every scene.`,
                zh: `肖战在每个场景中都表演得${meaning}。`
            },
            {
                en: `${character.name} works ${word} to achieve the goal.`,
                zh: `${character.zh}${meaning}地工作以实现目标。`
            },
            {
                en: `Xiao Zhan ${word} dedicates himself to his craft.`,
                zh: `肖战${meaning}地投入到他的事业中。`
            }
        ];
    } else {
        // 通用模板（适用于不确定词性）
        templates = [
            {
                en: `Xiao Zhan and ${word} - a perfect combination.`,
                zh: `肖战与${meaning}——完美的组合。`
            },
            {
                en: `${character.name} represents ${word} in the story.`,
                zh: `${character.zh}在故事中代表着${meaning}。`
            },
            {
                en: `The word "${word}" reminds me of Xiao Zhan.`,
                zh: `单词"${word}"让我想起肖战。`
            }
        ];
    }
    
    // 随机选择一个模板
    return templates[Math.floor(Math.random() * templates.length)];
}

// 显示词书列表
function displayWordbookList() {
    const wordbooks = getWordbooks();
    const container = document.getElementById('wordbookList');
    const progress = getWordbookProgress();
    
    if (wordbooks.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="emoji">📚</div>
                <h3 style="color: var(--primary-red); margin: 20px 0 10px 0;">还没有上传词书</h3>
                <p style="margin-bottom: 20px;">点击"📥 下载Excel模板"获取标准格式，或直接上传您的词书文件</p>
                
                <div style="max-width: 700px; margin: 0 auto; text-align: left;">
                    <div style="background: linear-gradient(135deg, var(--light-red) 0%, var(--white) 100%); padding: 20px; border-radius: 12px; border-left: 4px solid var(--primary-red); margin-bottom: 15px;">
                        <strong style="color: var(--primary-red); font-size: 1.1rem;">📋 支持的文件格式：</strong>
                        <ul style="margin: 10px 0; line-height: 2;">
                            <li>Excel 文件：.xlsx / .xls</li>
                            <li>CSV 文件：.csv（UTF-8编码）</li>
                        </ul>
                    </div>
                    
                    <div style="background: var(--white); padding: 20px; border-radius: 12px; border: 2px solid var(--border); margin-bottom: 15px;">
                        <strong style="color: var(--primary-red); font-size: 1.1rem; display: block; margin-bottom: 15px;">📊 方式1：多列格式（推荐）⭐</strong>
                        <p style="margin: 10px 0; color: var(--text-dark);">每个词性和释义独立占一列，清晰直观</p>
                        <div style="overflow-x: auto;">
                            <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem; margin-top: 10px;">
                                <thead>
                                    <tr style="background: var(--primary-red); color: white;">
                                        <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">单词 ✅</th>
                                        <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">词性1 ✅</th>
                                        <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">释义1 ✅</th>
                                        <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">词性2</th>
                                        <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">释义2</th>
                                        <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">备注</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style="background: #f9f9f9;">
                                        <td style="padding: 8px; border: 1px solid #ddd;"><code>love</code></td>
                                        <td style="padding: 8px; border: 1px solid #ddd;"><code>v.</code></td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">爱；喜爱</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;"><code>n.</code></td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">爱情</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">多词性</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;"><code>support</code></td>
                                        <td style="padding: 8px; border: 1px solid #ddd;"><code>v.</code></td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">支持；拥护</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;"><code>n.</code></td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">支撑物</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p style="margin-top: 12px; color: var(--text-light); font-size: 0.85rem;">
                            💡 格式：[单词, 词性1, 释义1, 词性2, 释义2, 词性3, 释义3, ..., 备注]
                        </p>
                    </div>
                    
                    <div style="background: var(--white); padding: 20px; border-radius: 12px; border: 2px solid var(--border); margin-bottom: 15px;">
                        <strong style="color: var(--primary-red); font-size: 1.1rem; display: block; margin-bottom: 15px;">📝 方式2：单列格式（兼容）</strong>
                        <p style="margin: 10px 0; color: var(--text-dark);">使用分隔符，传统格式</p>
                        <div style="overflow-x: auto;">
                            <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem; margin-top: 10px;">
                                <thead>
                                    <tr style="background: var(--primary-red); color: white;">
                                        <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">单词 ✅</th>
                                        <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">词性 ✅</th>
                                        <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">释义 ✅</th>
                                        <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">备注</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style="background: #f9f9f9;">
                                        <td style="padding: 8px; border: 1px solid #ddd;"><code>love</code></td>
                                        <td style="padding: 8px; border: 1px solid #ddd;"><code>v./n.</code></td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">爱；喜爱；爱情</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">分隔符</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;"><code>handsome</code></td>
                                        <td style="padding: 8px; border: 1px solid #ddd;"><code>adj.</code></td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">英俊的；帅气的</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">高频词</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p style="margin-top: 12px; color: var(--text-light); font-size: 0.85rem;">
                            💡 词性用 <code>/</code> 或 <code>;</code> 分隔，释义用 <code>;</code> 或 <code>；</code> 分隔
                        </p>
                    </div>
                    
                    <div style="background: linear-gradient(135deg, #FFE5E8 0%, #FFF 100%); padding: 15px; border-radius: 12px; border-left: 4px solid var(--gold);">
                        <strong style="color: var(--primary-red);">🆕 两种格式都支持！</strong>
                        <p style="margin: 8px 0 0 0; color: var(--text-dark); line-height: 1.8;">
                            • <strong>推荐方式1</strong>：更清晰，每个词性和释义一一对应<br>
                            • <strong>兼容方式2</strong>：简洁，适合单词本较少的情况<br>
                            • 第一行可以是表头（会自动跳过）
                        </p>
                    </div>
                </div>
            </div>
        `;
        return;
    }
    
    container.innerHTML = wordbooks.map(wb => {
        const learnedCount = progress[wb.id]?.learned?.length || 0;
        const progressPercent = ((learnedCount / wb.wordCount) * 100).toFixed(0);
        const cover = wb.cover || '📚';
        
        return `
            <div class="wordbook-card" onclick="openWordbook('${wb.id}')">
                <div class="wordbook-card-header">
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <span style="font-size: 2rem; line-height: 1;">${cover}</span>
                        <h3 style="margin: 0; flex: 1;">${wb.name}</h3>
                    </div>
                    <button class="btn-icon" onclick="deleteWordbookConfirm(event, '${wb.id}')" title="删除">
                        🗑️
                    </button>
                </div>
                <div class="wordbook-card-info">
                    <span>📝 ${wb.wordCount} 个单词</span>
                    <span>📅 ${new Date(wb.createTime).toLocaleDateString()}</span>
                </div>
                <div class="wordbook-card-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${progressPercent}%"></div>
                    </div>
                    <span class="progress-text">${learnedCount} / ${wb.wordCount} (${progressPercent}%)</span>
                </div>
            </div>
        `;
    }).join('');
}

// 下载Excel模板
function downloadExcelTemplate() {
    // 创建示例数据
    const templateData = [
        // 方式1：多列格式（推荐）- 词性和释义成对分列
        ['━━━━ 方式1：多列格式（推荐） ━━━━', '', '', '', '', '', ''],
        ['单词', '词性1', '释义1', '词性2', '释义2', '词性3', '释义3', '备注'],
        ['love', 'v.', '爱；喜爱', 'n.', '爱情', '', '', '多词性示例'],
        ['support', 'v.', '支持；拥护', 'n.', '支撑物', '', '', '多词性示例'],
        ['practice', 'v.', '练习；实践', 'n.', '业务；惯例', '', '', '多词性示例'],
        ['act', 'v.', '表演', 'n.', '行为；法案', '', '', '多词性示例'],
        ['', '', '', '', '', '', ''],
        // 方式2：单列格式（兼容）- 词性和释义用分隔符
        ['━━━━ 方式2：单列格式（兼容） ━━━━', '', '', '', '', '', ''],
        ['单词', '词性', '释义', '备注', '', '', ''],
        ['handsome', 'adj.', '英俊的；帅气的', '高频词', '', '', ''],
        ['beautiful', 'adj.', '美丽的；美好的', '高频词', '', '', ''],
        ['smile', 'v./n.', '微笑；笑容', '分隔符格式', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['💡 填写说明', '', '', '', '', '', ''],
        ['━━━━━━━━━━━━━━━━━━━━━', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['方式1：多列格式（推荐）', '', '', '', '', '', ''],
        ['• 每个词性和释义独立占一列', '', '', '', '', '', ''],
        ['• 格式：[单词, 词性1, 释义1, 词性2, 释义2, ...]', '', '', '', '', '', ''],
        ['• 示例：love, v., 爱；喜爱, n., 爱情', '', '', '', '', '', ''],
        ['• 最后一列为备注（可选）', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['方式2：单列格式（兼容）', '', '', '', '', '', ''],
        ['• 词性用 / 或 ; 分隔', '', '', '', '', '', ''],
        ['• 释义用 ; 或 ； 分隔', '', '', '', '', '', ''],
        ['• 示例：v./n. 对应 爱；喜爱；爱情', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['🆕 两种格式都支持！', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['🦐 XZ Dictionary - 小飞侠专属词典 ✨', '', '', '', '', '', '']
    ];
    
    // 检查是否有SheetJS库
    if (typeof XLSX !== 'undefined') {
        // 使用SheetJS创建Excel
        const ws = XLSX.utils.aoa_to_sheet(templateData);
        
        // 设置列宽
        ws['!cols'] = [
            { wch: 20 },  // 单词列
            { wch: 12 },  // 词性1
            { wch: 20 },  // 释义1
            { wch: 12 },  // 词性2
            { wch: 20 },  // 释义2
            { wch: 12 },  // 词性3
            { wch: 20 }   // 释义3/备注
        ];
        
        // 创建工作簿
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, '词书模板');
        
        // 下载文件
        XLSX.writeFile(wb, 'XZ词书模板_多列格式.xlsx');
    } else {
        // 降级方案：下载CSV
        const csvContent = templateData.map(row => row.join(',')).join('\n');
        const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'XZ词书模板_多列格式.csv';
        link.click();
    }
    
    // 显示提示
    setTimeout(() => {
        alert('📥 模板已下载！\n\n支持两种格式：\n\n✅ 方式1（推荐）：多列格式\n   每个词性和释义独立占一列\n   love, v., 爱；喜爱, n., 爱情\n\n✅ 方式2（兼容）：单列格式\n   词性和释义用分隔符\n   v./n. 对应 爱；喜爱；爱情\n\n两种格式都可以正常解析！');
    }, 300);
}
function deleteWordbookConfirm(event, id) {
    event.stopPropagation();
    
    const wordbooks = getWordbooks();
    const wordbook = wordbooks.find(wb => wb.id === id);
    
    if (confirm(`确定要删除词书 "${wordbook.name}" 吗？\n\n这将删除词书及其学习进度，此操作不可恢复。`)) {
        deleteWordbook(id);
        displayWordbookList();
        alert('词书已删除');
    }
}

// 打开词书详情
function openWordbook(id) {
    const wordbooks = getWordbooks();
    const wordbook = wordbooks.find(wb => wb.id === id);
    
    if (!wordbook) {
        alert('词书不存在');
        return;
    }
    
    const cover = wordbook.cover || '📚';
    
    // 隐藏列表，显示详情
    document.querySelector('.wordbook-list-section').style.display = 'none';
    document.getElementById('wordbookDetail').style.display = 'block';
    
    // 显示词书标题（包含封面）
    document.getElementById('wordbookTitle').innerHTML = `<span style="margin-right: 8px;">${cover}</span>${wordbook.name}`;
    
    // 显示进度
    const progress = getWordbookProgress();
    const learnedCount = progress[id]?.learned?.length || 0;
    document.getElementById('learnedCount').textContent = learnedCount;
    document.getElementById('totalCount').textContent = wordbook.wordCount;
    
    // 显示单词列表
    displayWordbookWords(id, wordbook.words);
}

// 显示词书中的单词列表
function displayWordbookWords(wordbookId, words) {
    const container = document.getElementById('wordbookWords');
    
    container.innerHTML = words.map((word, index) => {
        const learned = isWordLearned(wordbookId, index);
        
        return `
            <div class="wordbook-word-item ${learned ? 'learned' : ''}" onclick="showWordbookWord('${wordbookId}', ${index})">
                <div class="wordbook-word-header">
                    <div>
                        <strong class="word-text">${word.word}</strong>
                        ${word.partOfSpeech ? `<span class="pos-tag">${word.partOfSpeech}</span>` : ''}
                        ${learned ? '<span class="learned-badge">✓ 已学</span>' : ''}
                    </div>
                    <button class="btn-icon ${learned ? 'learned' : ''}" 
                            onclick="toggleWordLearned(event, '${wordbookId}', ${index})" 
                            title="${learned ? '取消标记' : '标记已学'}">
                        ${learned ? '✓' : '○'}
                    </button>
                </div>
                <div class="wordbook-word-meaning">${word.meaning}</div>
                ${word.note ? `<div class="wordbook-word-note">💡 ${word.note}</div>` : ''}
            </div>
        `;
    }).join('');
}

// 切换单词学习状态
function toggleWordLearned(event, wordbookId, wordIndex) {
    event.stopPropagation();
    
    const progress = getWordbookProgress();
    if (!progress[wordbookId]) {
        progress[wordbookId] = { learned: [] };
    }
    
    const learnedList = progress[wordbookId].learned;
    const index = learnedList.indexOf(wordIndex);
    
    if (index > -1) {
        learnedList.splice(index, 1);
    } else {
        learnedList.push(wordIndex);
    }
    
    localStorage.setItem(WORDBOOK_PROGRESS_KEY, JSON.stringify(progress));
    
    // 刷新显示
    const wordbooks = getWordbooks();
    const wordbook = wordbooks.find(wb => wb.id === wordbookId);
    displayWordbookWords(wordbookId, wordbook.words);
    
    // 更新进度显示
    const learnedCount = learnedList.length;
    document.getElementById('learnedCount').textContent = learnedCount;
}

// 显示单词详情（类似查词结果）
function showWordbookWord(wordbookId, wordIndex) {
    const wordbooks = getWordbooks();
    const wordbook = wordbooks.find(wb => wb.id === wordbookId);
    
    if (!wordbook) return;
    
    const wordData = wordbook.words[wordIndex];
    const word = wordData.word.toLowerCase();
    
    // 切换到查词页面
    switchTab('search');
    
    // 生成肖战主题例句（使用第一个释义和词性）
    const firstMeaning = wordData.meanings && wordData.meanings.length > 0 
        ? wordData.meanings[0].def 
        : wordData.meaning;
    const firstPos = wordData.meanings && wordData.meanings.length > 0
        ? wordData.meanings[0].pos
        : wordData.partOfSpeech;
    const example = generateXZExample(word, firstMeaning, firstPos);
    
    // 获取配图
    getWordImage(word).then(wordImage => {
        const resultArea = document.getElementById('resultArea');
        
        // 构建多词性释义HTML
        let meaningsHtml = '';
        
        if (wordData.isMultiPos && wordData.meanings && wordData.meanings.length > 1) {
            // 多词性显示
            const posMap = {};
            wordData.meanings.forEach(m => {
                if (!posMap[m.pos]) {
                    posMap[m.pos] = [];
                }
                posMap[m.pos].push(m.def);
            });
            
            meaningsHtml = Object.entries(posMap).map(([pos, defs]) => `
                <div class="meaning-item">
                    ${pos ? `<div class="part-of-speech">${pos}</div>` : ''}
                    ${defs.map(def => `<div class="definition">• ${def}</div>`).join('')}
                </div>
            `).join('');
        } else {
            // 单一词性显示
            meaningsHtml = `
                <div class="meaning-item">
                    ${wordData.partOfSpeech ? `<div class="part-of-speech">${wordData.partOfSpeech}</div>` : ''}
                    <div class="definition">• ${wordData.meaning}</div>
                </div>
            `;
        }
        
        resultArea.innerHTML = `
            <div class="word-card">
                <div class="word-content-wrapper">
                    <div class="word-main-content">
                        <div class="word-header">
                            <div class="word-title">
                                <h2>${wordData.word}</h2>
                                <span class="wordbook-source-badge">📚 来自: ${wordbook.name}</span>
                            </div>
                            <div class="word-actions">
                                <button class="btn-icon" onclick="speakWord('${word}')" title="发音">
                                    🔊
                                </button>
                                <button class="btn-icon ${isInVocabulary(word) ? 'saved' : ''}" 
                                        onclick="toggleVocabularyFromWordbook('${word}', '${wordbookId}', ${wordIndex})" 
                                        id="saveBtn-${word}"
                                        title="收藏到生词本">
                                    ${isInVocabulary(word) ? '⭐' : '☆'}
                                </button>
                            </div>
                        </div>

                        <div class="meanings">
                            ${meaningsHtml}
                        </div>

                        ${wordData.note ? `
                            <div class="word-note">
                                <strong>💡 备注：</strong>${wordData.note}
                            </div>
                        ` : ''}

                        <div class="examples">
                            <h3>📝 例句 <span class="xz-tag">肖战主题</span></h3>
                            <div class="example-item">
                                <div class="example-en">
                                    <span class="example-text">${example.en}</span>
                                    <button class="btn-speak-example" onclick="speakText('${example.en.replace(/'/g, "\\'")}')" title="朗读例句">
                                        🔊
                                    </button>
                                </div>
                                <div class="example-zh">${example.zh}</div>
                            </div>
                        </div>
                    </div>
                    
                    ${wordImage ? `
                        <div class="word-image-sidebar">
                            <div class="word-image-section">
                                ${wordImage.type === 'emoji' ? `
                                    <div class="word-emoji">${wordImage.content}</div>
                                ` : wordImage.type === 'images' && wordImage.content && wordImage.content.length > 0 && wordImage.content[0].data ? `
                                    <div class="word-images-gallery" id="imageGallery-${word}">
                                        <div class="gallery-item active">
                                            <img src="${wordImage.content[0].data}" alt="${word}" />
                                            <button class="btn-delete-image" onclick="deleteWordImage('${word}', 0)" title="删除图片">
                                                ❌
                                            </button>
                                        </div>
                                    </div>
                                ` : wordImage.content && typeof wordImage.content === 'string' ? `
                                    <img src="${wordImage.content}" alt="${word}" class="word-custom-image" />
                                ` : `
                                    <div class="word-emoji">📖</div>
                                `}
                            </div>
                            <button class="btn-upload" onclick="uploadWordImage('${word}')" title="上传图片">
                                📷 ${wordImage.type === 'images' && wordImage.content && wordImage.content.length > 0 ? '更换图片' : '自定义图片'}
                            </button>
                        </div>
                    ` : `
                        <div class="word-image-sidebar">
                            <div class="word-image-section">
                                <div class="word-emoji">📖</div>
                            </div>
                            <button class="btn-upload" onclick="uploadWordImage('${word}')" title="上传图片">
                                📷 自定义图片
                            </button>
                        </div>
                    `}
                </div>
            </div>
        `;
        
        // 标记为已学习
        markWordLearned(wordbookId, wordIndex);
    });
}

// 从词书添加到生词本
function toggleVocabularyFromWordbook(word, wordbookId, wordIndex) {
    const wordbooks = getWordbooks();
    const wordbook = wordbooks.find(wb => wb.id === wordbookId);
    const wordData = wordbook.words[wordIndex];
    
    const btn = document.getElementById(`saveBtn-${word}`);
    
    if (isInVocabulary(word)) {
        removeFromVocabulary(word);
        btn.classList.remove('saved');
        btn.innerHTML = '☆';
        alert('已从生词本移除');
    } else {
        const vocabData = {
            word: wordData.word,
            meaning: wordData.meaning,
            partOfSpeech: wordData.partOfSpeech,
            note: wordData.note,
            source: wordbook.name
        };
        
        if (saveToVocabulary(vocabData)) {
            btn.classList.add('saved');
            btn.innerHTML = '⭐';
            alert('已添加到生词本！');
            updateVocabCount();
        }
    }
}

// 返回词书列表
function backToWordbookList() {
    document.querySelector('.wordbook-list-section').style.display = 'block';
    document.getElementById('wordbookDetail').style.display = 'none';
}

// 上传词书
function uploadWordbook() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.xlsx,.xls,.csv';
    
    input.onchange = async function(e) {
        const file = e.target.files[0];
        if (!file) return;
        
        try {
            // 显示加载状态
            const loadingMsg = document.createElement('div');
            loadingMsg.className = 'loading-overlay';
            loadingMsg.innerHTML = '<div class="loading">正在解析文件...</div>';
            document.body.appendChild(loadingMsg);
            
            // 解析文件
            const wordbook = await parseWordbookFile(file);
            
            // 移除加载状态
            document.body.removeChild(loadingMsg);
            
            if (!wordbook.words || wordbook.words.length === 0) {
                alert('❌ 文件中没有找到有效的单词数据');
                return;
            }
            
            // 显示自定义对话框
            showWordbookCustomizeDialog(wordbook);
            
        } catch (error) {
            // 移除加载状态
            const loadingOverlay = document.querySelector('.loading-overlay');
            if (loadingOverlay) {
                document.body.removeChild(loadingOverlay);
            }
            
            alert(`❌ ${error.message}\n\n请检查文件格式是否正确。`);
            console.error('词书上传失败:', error);
        }
    };
    
    input.click();
}

// 显示词书自定义对话框
function showWordbookCustomizeDialog(wordbook) {
    // 创建对话框
    const dialog = document.createElement('div');
    dialog.className = 'modal-overlay';
    dialog.innerHTML = `
        <div class="modal-content" style="max-width: 550px;">
            <h3 style="color: var(--primary-red); margin-bottom: 20px;">✨ 自定义词书</h3>
            
            <div style="margin-bottom: 20px;">
                <label style="display: block; margin-bottom: 8px; font-weight: bold; color: var(--text-dark);">📖 词书名称：</label>
                <input type="text" id="wordbookNameInput" value="${wordbook.name || ''}" 
                       style="width: 100%; padding: 12px; border: 2px solid var(--border); border-radius: 8px; font-size: 1rem; box-sizing: border-box;"
                       placeholder="给你的词书起个名字" maxlength="50">
                <p style="margin-top: 5px; font-size: 0.85rem; color: var(--text-light);">💡 建议：考研词汇、托福核心、四级必背...</p>
            </div>
            
            <div style="margin-bottom: 20px;">
                <label style="display: block; margin-bottom: 8px; font-weight: bold; color: var(--text-dark);">🎨 封面图标：</label>
                <div id="coverSelector" style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 8px; max-height: 200px; overflow-y: auto; padding: 10px; background: var(--bg-light); border-radius: 8px;">
                    ${['📚', '📖', '📕', '📗', '📘', '📙', '📔', '📓', '📒', '📝', '✏️', '✍️',
                       '🎓', '🎯', '💯', '⭐', '🌟', '✨', '🔥', '💪', '🚀', '🎉', '🏆', '👑',
                       '💼', '🌈', '🎪', '🎨', '🎭', '🎬'].map(emoji => `
                        <div class="cover-option" data-cover="${emoji}" 
                             style="font-size: 2rem; text-align: center; padding: 8px; border: 2px solid var(--border); 
                                    border-radius: 8px; cursor: pointer; transition: all 0.2s; background: white;"
                             onclick="selectCover('${emoji}')">
                            ${emoji}
                        </div>
                    `).join('')}
                </div>
                <p style="margin-top: 8px; font-size: 0.85rem; color: var(--text-light);">
                    💡 点击选择一个图标作为词书封面（默认：📚）
                </p>
            </div>
            
            <div style="margin-bottom: 20px; padding: 15px; background: linear-gradient(135deg, var(--light-red) 0%, #FFF5F5 100%); border-radius: 10px; border-left: 4px solid var(--primary-red);">
                <p style="margin: 0; color: var(--text-dark); font-size: 1rem;">
                    📊 已解析：<strong style="color: var(--primary-red); font-size: 1.2rem;">${wordbook.words.length}</strong> 个单词
                </p>
            </div>
            
            <div style="display: flex; gap: 12px;">
                <button class="btn btn-secondary" onclick="closeWordbookCustomizeDialog()" style="flex: 1;">
                    ✕ 取消
                </button>
                <button class="btn btn-primary" onclick="confirmWordbookUpload()" style="flex: 2;">
                    ✅ 确定上传
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(dialog);
    
    // 存储临时数据
    window._tempWordbookData = wordbook;
    
    // 默认选中第一个封面
    selectCover('📚');
    
    // 聚焦输入框并选中文本
    setTimeout(() => {
        const input = document.getElementById('wordbookNameInput');
        input.focus();
        input.select();
    }, 100);
}

// 选择封面
function selectCover(emoji) {
    // 移除所有选中状态
    document.querySelectorAll('.cover-option').forEach(el => {
        el.style.borderColor = 'var(--border)';
        el.style.background = 'white';
        el.style.transform = 'scale(1)';
        el.style.boxShadow = 'none';
    });
    
    // 选中当前封面
    const selected = document.querySelector(`.cover-option[data-cover="${emoji}"]`);
    if (selected) {
        selected.style.borderColor = 'var(--primary-red)';
        selected.style.background = 'var(--light-red)';
        selected.style.transform = 'scale(1.15)';
        selected.style.boxShadow = '0 4px 12px rgba(230, 57, 70, 0.3)';
    }
    
    // 保存选择
    window._selectedCover = emoji;
}

// 确认上传
function confirmWordbookUpload() {
    const nameInput = document.getElementById('wordbookNameInput');
    const name = nameInput.value.trim();
    
    if (!name) {
        alert('❌ 请输入词书名称');
        nameInput.focus();
        return;
    }
    
    const cover = window._selectedCover || '📚';
    const wordbook = window._tempWordbookData;
    
    // 更新词书信息
    wordbook.name = name;
    wordbook.cover = cover;
    
    // 保存词书
    saveWordbook(wordbook);
    
    // 关闭对话框
    closeWordbookCustomizeDialog();
    
    // 刷新列表
    displayWordbookList();
    
    // 显示成功提示
    alert(`✅ 词书上传成功！\n\n${cover} ${name}\n📊 ${wordbook.words.length} 个单词\n\n已自动生成肖战主题例句 ✨`);
}

// 关闭对话框
function closeWordbookCustomizeDialog() {
    const dialog = document.querySelector('.modal-overlay');
    if (dialog) {
        document.body.removeChild(dialog);
    }
    
    // 清理临时数据
    delete window._tempWordbookData;
    delete window._selectedCover;
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', function() {
    // 下载模板按钮
    const downloadTemplateBtn = document.getElementById('downloadTemplateBtn');
    if (downloadTemplateBtn) {
        downloadTemplateBtn.addEventListener('click', downloadExcelTemplate);
    }
    
    // 上传词书按钮
    const uploadBtn = document.getElementById('uploadWordbookBtn');
    if (uploadBtn) {
        uploadBtn.addEventListener('click', uploadWordbook);
    }
    
    // 返回按钮
    const backBtn = document.getElementById('backToListBtn');
    if (backBtn) {
        backBtn.addEventListener('click', backToWordbookList);
    }
    
    // 显示词书列表
    displayWordbookList();
    
    // 动态加载SheetJS库
    if (typeof XLSX === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js';
        script.onload = () => console.log('✅ SheetJS 库加载成功');
        script.onerror = () => console.warn('⚠️ SheetJS 库加载失败，Excel功能将不可用');
        document.head.appendChild(script);
    }
});
