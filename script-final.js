// XZ Dictionary - 查词逻辑优化（最终版 v3）
// 方案C：预定义例句 + 词书例句 + 中文释义 + API兜底，不生成AI例句
// v3 新增：从已安装词书（localStorage）中查找例句和释义

// ==================== 新增：词书例句查找 ====================

/**
 * 从已安装的词书（localStorage）中查找单词的例句和释义
 * @param {string} word - 要查找的单词（小写）
 * @returns {object|null} - { en, zh, meaning, wordbookName } 或 null
 */
function findWordInWordbooks(word) {
    try {
        const stored = localStorage.getItem('xz_wordbooks');
        if (!stored) return null;

        const wordbooks = JSON.parse(stored);
        // wordbooks 可能是对象（key=id）或数组
        const bookList = Array.isArray(wordbooks) ? wordbooks : Object.values(wordbooks);

        for (const book of bookList) {
            if (!book || !book.words) continue;

            const found = book.words.find(w => w && w.word && w.word.toLowerCase() === word);
            if (found && found.meanings && found.meanings.length > 0) {
                const m = found.meanings[0];
                const example = m.example;
                const meaning = m.def || found.meaning || '';

                if (example && example.en && example.zh) {
                    return {
                        en: example.en,
                        zh: example.zh,
                        meaning: meaning,
                        wordbookName: book.name || '词书'
                    };
                }
                // 有释义但没有例句的情况
                if (meaning) {
                    return {
                        en: null,
                        zh: null,
                        meaning: meaning,
                        wordbookName: book.name || '词书'
                    };
                }
            }
        }

        return null;
    } catch (e) {
        console.warn('词书查找出错:', e);
        return null;
    }
}

// ==================== 覆盖 searchEnglish ====================

async function searchEnglish(word) {
    // 步骤1：检查预定义肖战例句库（最高优先级，data.js 中的原始数据）
    if (xzExamples[word]) {
        console.log('✅ 找到预定义例句（data.js）');
        await displayWordWithPredefinedExample(word);
        return;
    }

    // 步骤1.5（新增）：从已安装词书中查找例句
    const wordbookResult = findWordInWordbooks(word);
    if (wordbookResult && wordbookResult.en) {
        console.log(`✅ 找到词书例句（${wordbookResult.wordbookName}）`);
        await displayWordWithWordbookExample(word, wordbookResult);
        return;
    }

    // 步骤2：检查中文释义词库（data.js 中的 chineseMeanings）
    // 同时检查词书中是否有释义（无例句）
    const meaning = chineseMeanings[word] || (wordbookResult && wordbookResult.meaning) || null;
    if (meaning) {
        console.log('✅ 找到中文释义（无预定义例句）');
        await displayWordWithoutExample(word, meaning);
        return;
    }

    // 步骤3：检查自定义单词
    const customWords = typeof getCustomWords === 'function' ? getCustomWords() : [];
    const customWord = customWords.find(w => w.word.toLowerCase() === word);
    if (customWord) {
        console.log('✅ 找到自定义单词');
        displayCustomWord(customWord);
        return;
    }

    // 步骤4：调用在线词典API
    try {
        const response = await fetch(`${DICT_API}${word}`);

        if (!response.ok) {
            throw new Error('API failed');
        }

        const data = await response.json();
        console.log('✅ API返回数据');
        await displayWordFromAPI(word, data[0]);

    } catch (error) {
        console.log('❌ 完全找不到');
        displayErrorNotFound(word);
    }
}

// ==================== 新增：显示词书例句的单词 ====================

async function displayWordWithWordbookExample(word, wordbookData) {
    const wordImage = await getWordImage(word);
    const phonetic = getSimplePhonetic(word);
    const meaning = wordbookData.meaning || chineseMeanings[word] || '';

    // 设置 currentWordData 供其他功能使用
    window.currentWordData = { word, meaning, example: { en: wordbookData.en, zh: wordbookData.zh } };

    resultArea.innerHTML = `
        <div class="word-card">
            <div class="word-content-wrapper">
                <div class="word-main-content">
                    <div class="word-header">
                        <div class="word-title">
                            <h2>${word}</h2>
                            ${phonetic ? `<span class="phonetic">${phonetic}</span>` : ''}
                        </div>
                        <div class="word-actions">
                            <button class="btn-icon" onclick="speakWord('${word}')" title="发音">🔊</button>
                            <button class="btn-icon ${isInVocabulary(word) ? 'saved' : ''}" 
                                onclick="toggleVocabulary('${word}')" id="saveBtn-${word}" title="收藏到生词本">
                                ${isInVocabulary(word) ? '⭐' : '☆'}
                            </button>
                        </div>
                    </div>
                    
                    <div class="meanings">
                        <div class="meaning-item">
                            <div class="definition">📖 ${meaning}</div>
                        </div>
                    </div>
                    
                    <div class="examples">
                        <h3>📝 例句 <span class="xz-tag">专属例句</span></h3>
                        <div class="example-item">
                            <div class="example-en">
                                <span class="example-text">${wordbookData.en}</span>
                                <button class="btn-speak-example" onclick="speakText('${wordbookData.en.replace(/'/g, "\\\\'")}')" >🔊</button>
                            </div>
                            <div class="example-zh">${wordbookData.zh}</div>
                        </div>
                    </div>
                </div>
                
                ${renderWordImageSidebar(wordImage, word)}
            </div>
        </div>
    `;
}

// ==================== 原有函数（保留，加入 currentWordData 修复） ====================

// 1. 显示有预定义例句的单词
async function displayWordWithPredefinedExample(word) {
    const wordImage = await getWordImage(word);
    const phonetic = getSimplePhonetic(word);
    const wordData = xzExamples[word];
    const meaning = chineseMeanings[word] || '';

    // 设置 currentWordData
    window.currentWordData = { word, meaning, example: wordData };

    resultArea.innerHTML = `
        <div class="word-card">
            <div class="word-content-wrapper">
                <div class="word-main-content">
                    <div class="word-header">
                        <div class="word-title">
                            <h2>${word}</h2>
                            ${phonetic ? `<span class="phonetic">${phonetic}</span>` : ''}
                        </div>
                        <div class="word-actions">
                            <button class="btn-icon" onclick="speakWord('${word}')" title="发音">🔊</button>
                            <button class="btn-icon ${isInVocabulary(word) ? 'saved' : ''}" 
                                onclick="toggleVocabulary('${word}')" id="saveBtn-${word}" title="收藏到生词本">
                                ${isInVocabulary(word) ? '⭐' : '☆'}
                            </button>
                        </div>
                    </div>
                    
                    <div class="meanings">
                        <div class="meaning-item">
                            <div class="definition">📖 ${meaning}</div>
                        </div>
                    </div>
                    
                    <div class="examples">
                        <h3>📝 例句 <span class="xz-tag">专属例句</span></h3>
                        <div class="example-item">
                            <div class="example-en">
                                <span class="example-text">${wordData.en}</span>
                                <button class="btn-speak-example" onclick="speakText('${wordData.en.replace(/'/g, "\\\\'")}')" >🔊</button>
                            </div>
                            <div class="example-zh">${wordData.zh}</div>
                        </div>
                    </div>
                </div>
                
                ${renderWordImageSidebar(wordImage, word)}
            </div>
        </div>
    `;
}

// 2. 显示仅有释义的词（无例句）
async function displayWordWithoutExample(word, meaning) {
    const wordImage = await getWordImage(word);
    const phonetic = getSimplePhonetic(word);

    // 设置 currentWordData
    window.currentWordData = { word, meaning, example: null };

    resultArea.innerHTML = `
        <div class="word-card">
            <div class="word-content-wrapper">
                <div class="word-main-content">
                    <div class="word-header">
                        <div class="word-title">
                            <h2>${word}</h2>
                            ${phonetic ? `<span class="phonetic">${phonetic}</span>` : ''}
                        </div>
                        <div class="word-actions">
                            <button class="btn-icon" onclick="speakWord('${word}')" title="发音">🔊</button>
                            <button class="btn-icon ${isInVocabulary(word) ? 'saved' : ''}" 
                                onclick="toggleVocabulary('${word}')" id="saveBtn-${word}" title="收藏到生词本">
                                ${isInVocabulary(word) ? '⭐' : '☆'}
                            </button>
                        </div>
                    </div>
                    
                    <div class="meanings">
                        <div class="meaning-item">
                            <div class="definition">📖 ${meaning}</div>
                        </div>
                    </div>
                    
                    <div class="examples">
                        <h3>📝 例句</h3>
                        <div class="no-example-notice" style="background: #f8f9fa; padding: 20px; border-radius: 8px; text-align: center;">
                            <p style="color: var(--text-light); margin-bottom: 15px;">这个词的专属例句在路上了～</p>
                            <ul style="list-style: none; padding: 0; margin: 10px 0; color: var(--text-light); text-align: left; max-width: 400px; margin-left: auto; margin-right: auto;">
                                <li style="margin: 8px 0;">• 如果你有好的例句想法，欢迎点击 <button onclick="switchTab('custom')" class="btn-secondary" style="display: inline-block; padding: 4px 12px; font-size: 14px;">➕ 自定义例句</button> 添加你的专属例句</li>
                                <li style="margin: 8px 0;">• 或反馈给 <strong>🍠虾爬炒米炒面</strong> 补充词库</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                ${renderWordImageSidebar(wordImage, word)}
            </div>
        </div>
    `;
}

// 3. 显示API返回的词（英文释义兜底）
async function displayWordFromAPI(word, data) {
    const wordImage = await getWordImage(word);
    const phonetic = data.phonetic || (data.phonetics && data.phonetics[0]?.text) || '';
    const meanings = data.meanings || [];

    let firstMeaning = '';
    let pos = '';

    if (meanings.length > 0) {
        pos = meanings[0].partOfSpeech;
        if (meanings[0].definitions && meanings[0].definitions.length > 0) {
            firstMeaning = meanings[0].definitions[0].definition;
        }
    }

    // 设置 currentWordData
    window.currentWordData = { word, meaning: firstMeaning, example: null };

    resultArea.innerHTML = `
        <div class="word-card">
            <div class="word-content-wrapper">
                <div class="word-main-content">
                    <div class="word-header">
                        <div class="word-title">
                            <h2>${word}</h2>
                            ${phonetic ? `<span class="phonetic">${phonetic}</span>` : ''}
                        </div>
                        <div class="word-actions">
                            <button class="btn-icon" onclick="speakWord('${word}')" title="发音">🔊</button>
                            <button class="btn-icon ${isInVocabulary(word) ? 'saved' : ''}" 
                                onclick="toggleVocabulary('${word}')" id="saveBtn-${word}" title="收藏到生词本">
                                ${isInVocabulary(word) ? '⭐' : '☆'}
                            </button>
                        </div>
                    </div>
                    
                    <div class="meanings">
                        <div class="meaning-item">
                            ${pos ? `<div class="part-of-speech">${pos}</div>` : ''}
                            <div class="definition">📖 ${firstMeaning} 
                                <span style="color: var(--warning); font-size: 0.9rem;">(仅英文释义)</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="no-chinese-meaning-notice" style="background: #fff3cd; padding: 15px; border-radius: 8px; margin: 15px 0;">
                        <p style="margin: 0; color: #856404;">😢 抱歉这个词目前只有英文释义<br>
                        可以反馈给 <strong>🍠虾爬炒米炒面</strong> 扩充词库<br>
                        或者去 <a href="#" onclick="switchTab('custom'); return false;" style="color: var(--primary-color);">自定义添加</a> 哦~</p>
                    </div>
                    
                    <div class="examples">
                        <h3>📝 例句</h3>
                        <div class="no-example-notice" style="background: #f8f9fa; padding: 20px; border-radius: 8px; text-align: center;">
                            <p style="color: var(--text-light); margin-bottom: 15px;">这个词的专属例句在路上了～</p>
                            <ul style="list-style: none; padding: 0; margin: 10px 0; color: var(--text-light); text-align: left; max-width: 400px; margin-left: auto; margin-right: auto;">
                                <li style="margin: 8px 0;">• 如果你有好的例句想法，欢迎点击 <button onclick="switchTab('custom')" class="btn-secondary" style="display: inline-block; padding: 4px 12px; font-size: 14px;">➕ 自定义例句</button> 添加你的专属例句</li>
                                <li style="margin: 8px 0;">• 或反馈给 <strong>🍠虾爬炒米炒面</strong> 补充词库</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                ${renderWordImageSidebar(wordImage, word)}
            </div>
        </div>
    `;
}

// 4. 完全找不到
function displayErrorNotFound(word) {
    resultArea.innerHTML = `
        <div class="word-card">
            <div class="error-message" style="text-align: center; padding: 40px;">
                <div style="font-size: 48px; margin-bottom: 20px;">😢</div>
                <h3>抱歉暂未找到该单词</h3>
                <p style="color: var(--text-light); margin: 20px 0;">
                    可反馈给 <strong>🍠虾爬炒米炒面</strong> 加入词库<br>
                    或查询其他词典
                </p>
                <div style="margin-top: 30px;">
                    <button onclick="switchTab('custom')" class="btn-primary">➕ 前往自定义页面添加</button>
                </div>
            </div>
        </div>
    `;
}

// 辅助函数：渲染图片侧边栏（右侧）
function renderWordImageSidebar(wordImage, word) {
    if (wordImage) {
        if (wordImage.type === 'emoji') {
            return `
                <div class="word-image-sidebar">
                    <div class="word-image-section">
                        <div class="word-emoji">${wordImage.content}</div>
                    </div>
                    <button class="btn-upload" onclick="uploadWordImage('${word}')" title="上传图片">
                        📸 上传图片
                    </button>
                </div>
            `;
        } else if (wordImage.type === 'images' && wordImage.content && wordImage.content.length > 0 && wordImage.content[0].data) {
            return `
                <div class="word-image-sidebar">
                    <div class="word-image-section">
                        ${wordImage.content.map(img => `
                            <img src="${img.data}" alt="${word}" class="word-image" />
                        `).join('')}
                    </div>
                    <div class="image-actions">
                        <button class="btn-upload" onclick="uploadWordImage('${word}')" title="更换图片">
                            🔄 更换图片
                        </button>
                        <button class="btn-delete" onclick="deleteWordImage('${word}')" title="删除图片">
                            🗑️ 删除
                        </button>
                    </div>
                </div>
            `;
        }
    }

    // 无图片时显示默认emoji + 上传按钮
    return `
        <div class="word-image-sidebar">
            <div class="word-image-section">
                <div class="word-emoji">📖</div>
            </div>
            <button class="btn-upload" onclick="uploadWordImage('${word}')" title="上传图片">
                📸 上传图片
            </button>
        </div>
    `;
}

console.log('✅ XZ Dictionary 查词逻辑优化（方案C v3）已加载 - 支持词书例句查找');
