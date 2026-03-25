// 显示单词详情（类似查词结果）
function showWordbookWord(wordbookId, wordIndex) {
    const wordbooks = getWordbooks();
    const wordbook = wordbooks.find(wb => wb.id === wordbookId);
    
    if (!wordbook) return;
    
    const wordData = wordbook.words[wordIndex];
    const word = wordData.word.toLowerCase();
    
    // 切换到查词页面
    switchTab('search');
    
    // **修复：优先使用词库中的例句，而不是动态生成**
    let examplesHtml = '';
    
    if (wordData.meanings && wordData.meanings.length > 0) {
        // 使用 meanings 中的例句（多词性支持）
        const meaningsWithExamples = wordData.meanings.filter(m => 
            m.example && m.example.en && m.example.zh
        );
        
        if (meaningsWithExamples.length > 0) {
            examplesHtml = meaningsWithExamples.map((meaning, idx) => `
                ${idx === 0 ? '<h3>📝 例句 <span class="xz-tag">专属</span></h3>' : ''}
                <div class="example-item">
                    ${meaning.pos ? `<div class="example-pos-label">${meaning.pos}</div>` : ''}
                    <div class="example-en">
                        <span class="example-text">${meaning.example.en}</span>
                        <button class="btn-speak-example" onclick="speakText('${meaning.example.en.replace(/'/g, "\\'")}')" title="朗读例句">
                            🔊
                        </button>
                    </div>
                    <div class="example-zh">${meaning.example.zh}</div>
                </div>
            `).join('');
        }
    }
    
    // 如果没有预设例句，才使用动态生成
    if (!examplesHtml) {
        const firstMeaning = wordData.meanings && wordData.meanings.length > 0 
            ? wordData.meanings[0].def 
            : wordData.meaning;
        const firstPos = wordData.meanings && wordData.meanings.length > 0
            ? wordData.meanings[0].pos
            : wordData.partOfSpeech;
        const example = generateXZExample(word, firstMeaning, firstPos);
        
        examplesHtml = `
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
        `;
    }
    
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
                            ${examplesHtml}
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
