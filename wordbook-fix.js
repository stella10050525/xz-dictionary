// ==================== 词书单词显示逻辑修复 ====================
// 让词书单词遵循方案C：不自动生成AI例句
// 使用方式：在 wordbook-builtin.js 之后加载

// 保存原始的 showWordbookWord 函数
const _originalShowWordbookWord = showWordbookWord;

// 覆盖 showWordbookWord 函数
showWordbookWord = function(wordbookId, wordIndex) {
    const wordbooks = getWordbooks();
    const wordbook = wordbooks.find(wb => wb.id === wordbookId);
    
    if (!wordbook) return;
    
    const wordData = wordbook.words[wordIndex];
    const word = wordData.word.toLowerCase();
    
    // 切换到查词页面
    switchTab('search');
    
    // 检查是否有预定义例句（方案C逻辑）
    const hasXzExample = xzExamples[word];
    const hasMeaning = chineseMeanings[word] || wordData.meaning;
    
    // 获取配图
    getWordImage(word).then(wordImage => {
        const resultArea = document.getElementById('resultArea');
        
        // 构建多词性释义HTML
        let meaningsHtml = '';
        
        if (wordData.isMultiPos && wordData.meanings && wordData.meanings.length > 1) {
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
            meaningsHtml = `
                <div class="meaning-item">
                    ${wordData.partOfSpeech ? `<div class="part-of-speech">${wordData.partOfSpeech}</div>` : ''}
                    <div class="definition">• ${wordData.meaning}</div>
                </div>
            `;
        }
        
        // 例句区域HTML（遵循方案C）
        let exampleHtml = '';
        
        if (hasXzExample) {
            // 情况1：有预定义例句
            exampleHtml = `
                <div class="examples">
                    <h3>📝 例句 <span class="xz-tag">专属例句</span></h3>
                    <div class="example-item">
                        <div class="example-en">
                            <span class="example-text">${hasXzExample.en}</span>
                            <button class="btn-speak-example" onclick="speakText('${hasXzExample.en.replace(/'/g, "\\'")}')" title="朗读例句">
                                🔊
                            </button>
                        </div>
                        <div class="example-zh">${hasXzExample.zh}</div>
                    </div>
                </div>
            `;
        } else {
            // 情况2：无预定义例句 - 显示"例句在路上了"
            exampleHtml = `
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
            `;
        }
        
        // 渲染完整页面
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

                        ${exampleHtml}
                    </div>
                    
                    ${wordImage ? `
                        <div class="word-image-sidebar">
                            <div class="word-image-section">
                                ${wordImage.type === 'emoji' ? `
                                    <div class="word-emoji">${wordImage.content}</div>
                                ` : wordImage.type === 'images' && wordImage.content && wordImage.content.length > 0 && wordImage.content[0].data ? `
                                    <div class="word-images-gallery">
                                        <div class="gallery-item active">
                                            <img src="${wordImage.content[0].data}" alt="${word}" />
                                            <button class="btn-delete-image" onclick="deleteWordImage('${word}', 0)" title="删除图片">
                                                ❌
                                            </button>
                                        </div>
                                    </div>
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
};

console.log('✅ 词书单词显示逻辑已修复（遵循方案C）');
