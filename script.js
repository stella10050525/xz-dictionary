// DOM元素
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const resultArea = document.getElementById('resultArea');
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    // 标签切换
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            switchTab(targetTab);
        });
    });

    // 搜索功能
    searchBtn.addEventListener('click', searchWord);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchWord();
        }
    });

    // 加载热词
    loadHotWords();

    // 加载生词本
    loadVocabulary();

    // 自定义词汇表单
    document.getElementById('customWordForm').addEventListener('submit', function(e) {
        e.preventDefault();
        addCustomWord();
    });

    // 清空生词本按钮
    document.getElementById('clearVocabBtn').addEventListener('click', function() {
        if (clearVocabulary()) {
            loadVocabulary();
        }
    });
    
    // 词书功能初始化在 wordbook.js 中完成
});

// 标签切换
function switchTab(tabName) {
    tabs.forEach(tab => tab.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    const activeTab = document.querySelector(`[data-tab="${tabName}"]`);
    const activeContent = document.getElementById(`${tabName}Tab`);

    if (activeTab && activeContent) {
        activeTab.classList.add('active');
        activeContent.classList.add('active');
    }
}

// 检测是否为中文
function isChinese(text) {
    return /[\u4e00-\u9fa5]/.test(text);
}

// 搜索单词
async function searchWord() {
    const word = searchInput.value.trim();
    
    if (!word) {
        alert('请输入要查询的单词或中文！');
        return;
    }

    // 切换到查词页面
    switchTab('search');

    // 显示加载状态
    resultArea.innerHTML = '<div class="loading">正在查询中</div>';

    try {
        // 判断是中文还是英文
        if (isChinese(word)) {
            // 汉译英
            searchChinese(word);
        } else {
            // 英译汉
            await searchEnglish(word.toLowerCase());
        }

    } catch (error) {
        console.error(error);
        displayError(word);
    }
}

// 汉译英查询
function searchChinese(chineseWord) {
    // 在汉英词典中查找
    const results = chineseToEnglish[chineseWord];
    
    if (results && results.length > 0) {
        displayChineseResults(chineseWord, results);
    } else {
        // 尝试部分匹配
        const partialMatches = [];
        for (let [key, values] of Object.entries(chineseToEnglish)) {
            if (key.includes(chineseWord) || chineseWord.includes(key)) {
                values.forEach(val => {
                    if (!partialMatches.includes(val)) {
                        partialMatches.push(val);
                    }
                });
            }
        }
        
        if (partialMatches.length > 0) {
            displayChineseResults(chineseWord, partialMatches);
        } else {
            displayError(chineseWord);
        }
    }
}

// 显示汉译英结果
function displayChineseResults(chineseWord, englishWords) {
    let html = `
        <div class="word-card">
            <div class="word-header">
                <div class="word-title">
                    <h2>${chineseWord}</h2>
                </div>
            </div>

            <div class="chinese-meaning">
                <strong>🇬🇧 英文翻译：</strong>
            </div>

            <div class="english-results">
                ${englishWords.map(word => {
                    const xzExample = xzExamples[word];
                    return `
                        <div class="english-result-item" onclick="searchInput.value='${word}'; searchWord();">
                            <div class="result-word">
                                <strong>${word}</strong>
                                <span class="phonetic-small">${getSimplePhonetic(word)}</span>
                            </div>
                            <div class="result-meaning">${chineseMeanings[word] || ''}</div>
                            ${xzExample ? `
                                <div class="result-example">
                                    <span class="xz-tag">肖战例句</span>
                                    ${xzExample.en}
                                </div>
                            ` : ''}
                        </div>
                    `;
                }).join('')}
            </div>

            <p style="color: var(--text-light); margin-top: 20px; font-size: 0.9rem;">
                💡 点击任意单词可查看详细信息
            </p>
        </div>
    `;

    resultArea.innerHTML = html;
}

// 获取简单音标（如果有）
function getSimplePhonetic(word) {
    // 这里可以添加更多音标，或者调用API
    const phonetics = {
        'handsome': '/ˈhænsəm/',
        'beautiful': '/ˈbjuːtɪfl/',
        'charming': '/ˈtʃɑːmɪŋ/',
        'smile': '/smaɪl/',
        'love': '/lʌv/'
        // 可以继续添加...
    };
    return phonetics[word] || '';
}

// 英译汉查询
async function searchEnglish(word) {
    // 首先检查自定义词汇
    const customWords = getCustomWords();
    if (customWords[word]) {
        displayCustomWord(customWords[word]);
        return;
    }

    // 调用在线词典API
    const response = await fetch(`${DICT_API}${word}`);
    
    if (!response.ok) {
        throw new Error('Word not found');
    }

    const data = await response.json();
    await displayWord(word, data[0]);
}

// 显示单词信息
async function displayWord(word, data) {
    const phonetic = data.phonetic || (data.phonetics && data.phonetics[0]?.text) || '';
    const meanings = data.meanings || [];
    
    // 检查是否有肖战主题例句
    const xzExample = xzExamples[word];
    
    // 获取中文释义
    const chineseMeaning = chineseMeanings[word] || '';
    const detailedDef = detailedDefinitions[word] || null;
    
    // 获取配图（异步）
    const wordImage = await getWordImage(word);
    
    let html = `
        <div class="word-card">
            <div class="word-content-wrapper">
                <div class="word-main-content">
                    <div class="word-header">
                        <div class="word-title">
                            <h2>${word}</h2>
                            ${phonetic ? `<span class="phonetic">${phonetic}</span>` : ''}
                        </div>
                        <div class="word-actions">
                            <button class="btn-icon" onclick="speakWord('${word}')" title="发音">
                                🔊
                            </button>
                            <button class="btn-icon ${isInVocabulary(word) ? 'saved' : ''}" 
                                    onclick="toggleVocabulary('${word}')" 
                                    id="saveBtn-${word}"
                                    title="收藏到生词本">
                                ${isInVocabulary(word) ? '⭐' : '☆'}
                            </button>
                        </div>
                    </div>

                    <div class="meanings">
                        ${detailedDef ? 
                            // 使用详细中文释义
                            Object.entries(detailedDef).map(([pos, defs]) => `
                                <div class="meaning-item">
                                    <div class="part-of-speech">
                                        ${partOfSpeechMap[pos] || pos}
                                    </div>
                                    ${defs.map(def => `
                                        <div class="definition">• ${def}</div>
                                    `).join('')}
                                </div>
                            `).join('')
                            :
                            // 如果没有详细释义但有中文释义
                            chineseMeaning ? 
                                meanings.length > 0 ? `
                                    <div class="meaning-item">
                                        <div class="part-of-speech">
                                            ${partOfSpeechMap[meanings[0].partOfSpeech] || meanings[0].partOfSpeech}
                                        </div>
                                        <div class="definition">• ${chineseMeaning}</div>
                                    </div>
                                ` : `
                                    <div class="meaning-item">
                                        <div class="definition">📖 ${chineseMeaning}</div>
                                    </div>
                                `
                            :
                            // 最后才使用英文释义
                            meanings.map(meaning => `
                                <div class="meaning-item">
                                    <div class="part-of-speech">
                                        ${partOfSpeechMap[meaning.partOfSpeech] || meaning.partOfSpeech}
                                    </div>
                                    ${meaning.definitions.slice(0, 2).map(def => `
                                        <div class="definition">• ${def.definition} <span style="color: var(--text-light); font-size: 0.9rem;">(英文释义)</span></div>
                                    `).join('')}
                                </div>
                            `).join('')
                        }
                    </div>

                    ${xzExample ? `
                        <div class="examples">
                            <h3>📝 例句 <span class="xz-tag">肖战专属</span></h3>
                            <div class="example-item">
                                <div class="example-en">
                                    <span class="example-text">${xzExample.en}</span>
                                    <button class="btn-speak-example" onclick="speakText('${xzExample.en.replace(/'/g, "\\'")}')" title="朗读例句">
                                        🔊
                                    </button>
                                </div>
                                <div class="example-zh">${xzExample.zh}</div>
                            </div>
                        </div>
                    ` : `
                        <div class="examples">
                            <h3>📝 例句</h3>
                            ${meanings[0]?.definitions[0]?.example ? `
                                <div class="example-item">
                                    <div class="example-en">
                                        <span class="example-text">${meanings[0].definitions[0].example}</span>
                                        <button class="btn-speak-example" onclick="speakText('${meanings[0].definitions[0].example.replace(/'/g, "\\'")}')" title="朗读例句">
                                            🔊
                                        </button>
                                    </div>
                                </div>
                            ` : '<p style="color: var(--text-light);">暂无例句</p>'}
                        </div>
                    `}
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

    resultArea.innerHTML = html;

    // 保存到临时数据供生词本使用
    window.currentWordData = {
        word: word,
        phonetic: phonetic,
        chineseMeaning: chineseMeaning,
        meanings: meanings.map(m => ({
            pos: m.partOfSpeech,
            def: m.definitions[0]?.definition || ''
        })),
        example: xzExample || null
    };
}

// 显示自定义词汇
function displayCustomWord(wordData) {
    let html = `
        <div class="word-card">
            <div class="word-header">
                <div class="word-title">
                    <h2>${wordData.word}</h2>
                    ${wordData.phonetic ? `<span class="phonetic">${wordData.phonetic}</span>` : ''}
                </div>
                <div class="word-actions">
                    <button class="btn-icon" onclick="speakWord('${wordData.word}')" title="发音">
                        🔊
                    </button>
                    <button class="btn-icon ${isInVocabulary(wordData.word) ? 'saved' : ''}" 
                            onclick="toggleVocabulary('${wordData.word}')" 
                            id="saveBtn-${wordData.word}"
                            title="收藏到生词本">
                        ${isInVocabulary(wordData.word) ? '⭐' : '☆'}
                    </button>
                </div>
            </div>

            <div class="meanings">
                <div class="meaning-item">
                    <div class="definition">${wordData.meaning}</div>
                </div>
            </div>

            <div class="examples">
                <h3>📝 例句 <span class="xz-tag">自定义</span></h3>
                <div class="example-item">
                    <div class="example-en">${wordData.exampleEn}</div>
                    <div class="example-zh">${wordData.exampleZh}</div>
                </div>
            </div>

            ${wordData.image ? `
                <div class="word-image">
                    <img src="${wordData.image}" alt="${wordData.word}" />
                    <div class="image-caption">自定义图片</div>
                </div>
            ` : ''}
        </div>
    `;

    resultArea.innerHTML = html;

    // 保存到临时数据
    window.currentWordData = wordData;
}

// 显示错误信息
function displayError(word) {
    resultArea.innerHTML = `
        <div class="empty-state">
            <div class="emoji">😢</div>
            <h2>未找到 "${word}"</h2>
            <p>词典中暂无此单词，你可以在"自定义"页面添加它哦！</p>
        </div>
    `;
}

// 发音功能
function speakWord(word) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US';
        utterance.rate = 0.8;
        window.speechSynthesis.speak(utterance);
    } else {
        alert('您的浏览器不支持语音功能');
    }
}

// 朗读文本（用于例句）
function speakText(text) {
    if ('speechSynthesis' in window) {
        // 取消之前的朗读
        window.speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.85; // 稍慢一点，更清晰
        utterance.pitch = 1.0;
        window.speechSynthesis.speak(utterance);
    } else {
        alert('您的浏览器不支持语音功能');
    }
}

// 切换生词本收藏状态
function toggleVocabulary(word) {
    if (!window.currentWordData || window.currentWordData.word !== word) {
        alert('请先查询该单词');
        return;
    }

    const btn = document.getElementById(`saveBtn-${word}`);
    
    if (isInVocabulary(word)) {
        removeFromVocabulary(word);
        btn.classList.remove('saved');
        btn.innerHTML = '☆';
        alert('已从生词本移除');
    } else {
        if (saveToVocabulary(window.currentWordData)) {
            btn.classList.add('saved');
            btn.innerHTML = '⭐';
            alert('已添加到生词本！');
            updateVocabCount();
        }
    }
}

// 加载热词（按特辑分组渲染，新的在上）
function loadHotWords() {
    const container = document.getElementById('hotwordsList');
    
    // 兼容：如果只有旧 hotWords 没有 hotWordSeries，包装一下
    const series = (typeof hotWordSeries !== 'undefined' && hotWordSeries.length > 0)
        ? hotWordSeries
        : [{ id: 'default', title: '🔥 热词推送', banner: '', subtitle: '', date: '', words: hotWords }];

    if (series.length === 0 || series.every(s => s.words.length === 0)) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="emoji">🔥</div>
                <p>暂无热词推送，敬请期待！</p>
            </div>
        `;
        return;
    }

    // 构建 HTML：每个特辑 = Banner(横跨整行) + 卡片们 + 分隔线
    // 全部作为 #hotwordsList (grid容器) 的直接子元素
    let html = '';
    series.forEach((s, si) => {
        // Banner 横跨整个 grid
        if (s.banner) {
            html += `
            <div class="hotword-banner" style="grid-column:1/-1" onclick="openSeriesBanner('${s.id}')">
                <img src="${s.banner}" alt="${s.title}" />
                <div class="hotword-banner-overlay">
                    <div class="hotword-banner-title">${s.title}</div>
                    <div class="hotword-banner-subtitle">${s.subtitle}</div>
                </div>
            </div>`;
        }
        // 卡片们（直接作为 grid 子元素）
        s.words.forEach((item, wi) => {
            html += `
            <div class="hotword-card" onclick="showHotWord(${si}, ${wi});">
                <div class="hotword-header">
                    <div class="hotword-title">${item.word}</div>
                    <div class="hotword-date">${s.date || item.date || ''}</div>
                </div>
                <div class="hotword-topic">${item.topic}</div>
                <div class="hotword-preview">${item.example.en}</div>
            </div>`;
        });
        // 分隔线横跨整行
        if (si < series.length - 1) {
            html += '<div class="hotword-series-divider" style="grid-column:1/-1"></div>';
        }
    });
    container.innerHTML = html;
}

// 打开特辑 Banner 大图
function openSeriesBanner(seriesId) {
    const s = hotWordSeries.find(x => x.id === seriesId);
    if (!s || !s.banner) return;
    const lb = document.getElementById('bannerLightbox');
    lb.querySelector('img').src = s.banner;
    lb.querySelector('img').alt = s.title;
    lb.classList.add('active');
}

// 显示热词详情
async function showHotWord(seriesIndex, wordIndex) {
    const series = (typeof hotWordSeries !== 'undefined') ? hotWordSeries : [{words: hotWords}];
    const hotWord = series[seriesIndex].words[wordIndex];
    const word = hotWord.word.toLowerCase();
    
    // 切换到查词页面
    switchTab('search');
    
    // 获取配图
    const wordImage = await getWordImage(word);
    
    const resultArea = document.getElementById('resultArea');
    
    resultArea.innerHTML = `
        <div class="word-card">
            <div class="word-content-wrapper">
                <div class="word-main-content">
                    <div class="word-header">
                        <div class="word-title">
                            <h2>${hotWord.word}</h2>
                            ${hotWord.phonetic ? `<span class="phonetic">${hotWord.phonetic}</span>` : ''}
                        </div>
                        <div class="word-actions">
                            <button class="btn-icon" onclick="speakWord('${word}')" title="发音">
                                🔊
                            </button>
                            <button class="btn-icon ${isInVocabulary(word) ? 'saved' : ''}" 
                                    onclick="toggleVocabulary('${word}')" 
                                    id="saveBtn-${word}"
                                    title="收藏到生词本">
                                ${isInVocabulary(word) ? '⭐' : '☆'}
                            </button>
                        </div>
                    </div>

                    <div class="meanings">
                        <div class="meaning-item">
                            <div class="definition">📖 ${hotWord.meaning}</div>
                        </div>
                    </div>

                    <div class="word-note">
                        <strong>🔥 热词主题：</strong>${hotWord.topic}
                    </div>

                    <div class="examples">
                        <h3>📝 例句 <span class="xz-tag">肖战专属</span></h3>
                        <div class="example-item">
                            <div class="example-en">
                                <span class="example-text">${hotWord.example.en}</span>
                                <button class="btn-speak-example" onclick="speakText('${hotWord.example.en.replace(/'/g, "\\'")}')" title="朗读例句">
                                    🔊
                                </button>
                            </div>
                            <div class="example-zh">${hotWord.example.zh}</div>
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
                                <div class="word-emoji">🔥</div>
                            `}
                        </div>
                        <button class="btn-upload" onclick="uploadWordImage('${word}')" title="上传图片">
                            📷 ${wordImage.type === 'images' && wordImage.content && wordImage.content.length > 0 ? '更换图片' : '自定义图片'}
                        </button>
                    </div>
                ` : `
                    <div class="word-image-sidebar">
                        <div class="word-image-section">
                            <div class="word-emoji">🔥</div>
                        </div>
                        <button class="btn-upload" onclick="uploadWordImage('${word}')" title="上传图片">
                            📷 自定义图片
                        </button>
                    </div>
                `}
            </div>
        </div>
    `;
    
    // 保存到临时数据供生词本使用
    window.currentWordData = {
        word: hotWord.word,
        phonetic: hotWord.phonetic || '',
        chineseMeaning: hotWord.meaning,
        meaning: hotWord.meaning, // 确保兼容
        topic: hotWord.topic,
        example: hotWord.example,
        source: 'hotword'
    };
}

// 加载生词本
function loadVocabulary() {
    const vocabulary = getVocabulary();
    const container = document.getElementById('vocabularyList');
    
    updateVocabCount();

    if (vocabulary.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="emoji">📚</div>
                <p>生词本还是空的，快去查词并收藏吧！</p>
            </div>
        `;
        return;
    }

    container.innerHTML = vocabulary.map(item => {
        // 优先使用 chineseMeaning，然后 meaning，最后才用 meanings 数组
        let displayMeaning = '';
        
        if (item.chineseMeaning) {
            displayMeaning = item.chineseMeaning;
        } else if (item.meaning) {
            displayMeaning = item.meaning;
        } else if (item.meanings && item.meanings.length > 0) {
            // 如果是英文释义，添加标注
            const firstDef = item.meanings[0].def || '';
            displayMeaning = firstDef ? `${firstDef} <span style="color: var(--text-light); font-size: 0.85rem;">(英文释义)</span>` : '';
        } else {
            displayMeaning = '暂无释义';
        }
        
        return `
            <div class="vocab-item">
                <div class="vocab-info">
                    <h3>${item.word}</h3>
                    <div class="vocab-meaning">
                        ${displayMeaning}
                    </div>
                    ${item.source ? `<div style="color: var(--text-light); font-size: 0.85rem; margin-top: 5px;">📚 来自: ${item.source}</div>` : ''}
                </div>
                <div class="vocab-actions">
                    <button class="btn-icon" onclick="searchInput.value='${item.word}'; searchWord();" title="查看详情">
                        👁️
                    </button>
                    <button class="btn-icon" onclick="removeVocabItem('${item.word}')" title="删除">
                        🗑️
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// 更新生词本数量
function updateVocabCount() {
    const count = getVocabulary().length;
    const countElement = document.getElementById('vocabCount');
    if (countElement) {
        countElement.textContent = count;
    }
}

// 删除生词本条目
function removeVocabItem(word) {
    if (confirm(`确定要删除 "${word}" 吗？`)) {
        removeFromVocabulary(word);
        loadVocabulary();
    }
}

// 添加自定义词汇
function addCustomWord() {
    const wordData = {
        word: document.getElementById('customWord').value.trim().toLowerCase(),
        meaning: document.getElementById('customMeaning').value.trim(),
        phonetic: document.getElementById('customPhonetic').value.trim(),
        exampleEn: document.getElementById('customExampleEn').value.trim(),
        exampleZh: document.getElementById('customExampleZh').value.trim(),
        image: document.getElementById('customImage').value.trim()
    };

    if (!wordData.word || !wordData.meaning || !wordData.exampleEn || !wordData.exampleZh) {
        alert('请填写所有必填项！');
        return;
    }

    saveCustomWord(wordData);
    alert(`成功添加自定义词汇: ${wordData.word}`);

    // 清空表单
    document.getElementById('customWordForm').reset();

    // 自动查询刚添加的词
    searchInput.value = wordData.word;
    searchWord();
}

// 键盘快捷键
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K: 聚焦搜索框
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
        searchInput.select();
    }
});

// 获取单词配图
async function getWordImage(word) {
    try {
        // 首先检查 IndexedDB
        const dbImages = await imageDB.getImage(word);
        if (dbImages && dbImages.length > 0) {
            return {
                type: 'images',
                content: dbImages
            };
        }
    } catch (error) {
        console.warn('IndexedDB 读取失败，尝试 localStorage:', error);
    }
    
    // 降级到 localStorage（兼容性）
    const customImages = JSON.parse(localStorage.getItem('xz_word_images') || '{}');
    if (customImages[word]) {
        // 兼容旧版本（单张图片字符串）
        if (typeof customImages[word] === 'string') {
            return {
                type: 'images',
                content: [{
                    data: customImages[word],
                    name: 'uploaded',
                    uploadTime: Date.now()
                }]
            };
        }
        // 新版本（多张图片数组）
        if (Array.isArray(customImages[word]) && customImages[word].length > 0) {
            return {
                type: 'images',
                content: customImages[word]
            };
        }
    }
    
    // 返回默认emoji
    const defaultEmojis = {
        // 外貌相关
        handsome: '🤵',
        beautiful: '✨',
        charming: '💫',
        elegant: '🎩',
        gorgeous: '🌟',
        attractive: '😍',
        stylish: '👔',
        radiant: '☀️',
        graceful: '🦢',
        dashing: '⚡',
        
        // 才华相关
        talented: '🎨',
        brilliant: '💎',
        professional: '💼',
        creative: '🎭',
        skillful: '🎯',
        versatile: '🎪',
        artistic: '🖼️',
        gifted: '🎁',
        
        // 品质相关
        kind: '💝',
        humble: '🙏',
        dedicated: '💪',
        sincere: '❤️',
        gentle: '🌸',
        generous: '🎁',
        honest: '✅',
        reliable: '🤝',
        
        // 表演相关
        act: '🎬',
        perform: '🎤',
        dance: '💃',
        sing: '🎵',
        scene: '🎞️',
        role: '👤',
        character: '🎭',
        drama: '📺',
        movie: '🎥',
        film: '🎬',
        
        // 音乐相关
        song: '🎶',
        music: '🎼',
        voice: '🎙️',
        melody: '🎵',
        album: '💿',
        concert: '🎤',
        
        // 粉丝相关
        fan: '👏',
        love: '💕',
        support: '🫶',
        dream: '💭',
        idol: '🌟',
        hero: '🦸',
        star: '⭐',
        
        // 成就相关
        award: '🏆',
        success: '🎊',
        victory: '🥇',
        achievement: '🏅',
        celebrate: '🎉',
        
        // 时尚相关
        fashion: '👗',
        ambassador: '💄',
        runway: '🛤️',
        style: '👔',
        brand: '🏷️',
        
        // 情感相关
        smile: '😊',
        laugh: '😄',
        happy: '😁',
        inspire: '💡',
        encourage: '👍',
        
        // 其他
        shine: '✨',
        bright: '🌞',
        warm: '🔥',
        cool: '😎',
        perfect: '💯'
    };
    
    if (defaultEmojis[word]) {
        return {
            type: 'emoji',
            content: defaultEmojis[word]
        };
    }
    
    // 默认返回通用emoji
    return {
        type: 'emoji',
        content: '📖'
    };
}

// 上传单词图片（每个单词1张）
function uploadWordImage(word) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.multiple = false; // 仅支持单张
    
    input.onchange = async function(e) {
        const files = e.target.files;
        if (!files || files.length === 0) return;
        
        // 检查是否已有图片（限制每个单词最多1张图片）
        try {
            const existingImages = await imageDB.getImage(word);
            if (existingImages && existingImages.length >= 1) {
                if (!confirm(`该单词已有图片，是否替换？`)) {
                    return;
                }
            }
        } catch (error) {
            console.warn('检查现有图片失败:', error);
        }
        
        const file = files[0]; // 只处理第一张
        
        // 检查文件大小（提升到10MB限制）
        if (file.size > 10 * 1024 * 1024) {
            alert(`❌ 图片 "${file.name}" 大小超过10MB，请压缩后重试！`);
            return;
        }
        
        const reader = new FileReader();
        reader.onload = async function(event) {
            try {
                const imageData = {
                    data: event.target.result,
                    name: file.name,
                    uploadTime: Date.now()
                };
                
                // 保存到 IndexedDB
                await imageDB.saveImage(word, imageData);
                
                // 重新显示
                searchInput.value = word;
                await searchWord();
                
                // 显示存储使用情况
                try {
                    const storageInfo = await imageDB.getStorageInfo();
                    alert(`✅ 图片上传成功！\n\n存储使用情况：\n已使用: ${storageInfo.totalMB} MB\n图片数: ${storageInfo.totalItems} 张\n使用率: ${storageInfo.percentage}%`);
                } catch (error) {
                    alert(`✅ 图片上传成功！`);
                }
            } catch (error) {
                console.error('IndexedDB 保存失败:', error);
                alert(`❌ 保存失败！\n\n错误信息：${error.message}\n\n可能原因：\n1. 浏览器不支持 IndexedDB\n2. 存储空间不足\n3. 浏览器隐私模式限制`);
            }
        };
        
        reader.onerror = function() {
            alert(`❌ 读取图片 "${file.name}" 失败！`);
        };
        
        reader.readAsDataURL(file);
    };
    
    input.click();
}

// 获取单词的所有图片
async function getWordImages(word) {
    try {
        const images = await imageDB.getImage(word);
        return images || [];
    } catch (error) {
        console.warn('IndexedDB 读取失败，尝试 localStorage:', error);
        const customImages = JSON.parse(localStorage.getItem('xz_word_images') || '{}');
        return customImages[word] || [];
    }
}

// 删除单词图片（每个单词只有1张）
async function deleteWordImage(word, imageIndex) {
    if (!confirm('确定要删除这张图片吗？')) {
        return;
    }
    
    try {
        await imageDB.deleteImage(word);
        
        // 重新显示
        searchInput.value = word;
        await searchWord();
        
        alert('图片已删除！');
    } catch (error) {
        console.error('删除失败:', error);
        alert(`❌ 删除失败：${error.message}`);
    }
}

// 检查 IndexedDB 存储使用情况
async function checkStorageUsage() {
    try {
        const storageInfo = await imageDB.getStorageInfo();
        
        console.log(`📊 IndexedDB 使用情况：`);
        console.log(`总计: ${storageInfo.totalMB} MB`);
        console.log(`图片数: ${storageInfo.totalItems} 张`);
        console.log(`使用率: ${storageInfo.percentage}% (基于 50MB 估算)`);
        
        alert(`📊 存储使用情况\n\n已使用: ${storageInfo.totalMB} MB\n图片数: ${storageInfo.totalItems} 张\n使用率: ${storageInfo.percentage}%\n\n💡 IndexedDB 容量远大于 localStorage！`);
        
        return storageInfo;
    } catch (error) {
        console.error('检查存储失败:', error);
        alert(`❌ 检查失败：${error.message}`);
        return null;
    }
}

// 在控制台输入 checkStorageUsage() 可查看存储使用情况
