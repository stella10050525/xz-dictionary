// ==================== 内置词书功能增强模块 ====================
// 在原 wordbook.js 基础上添加内置词书支持
// 使用方式：在 index.html 中同时加载 wordbook.js 和 wordbook-builtin.js

const WORDBOOK_VERSION_KEY = 'xz_wordbook_versions';
const BUILTIN_WORDBOOKS_INDEX = 'wordbooks/index.json';

// 保存原始的 getWordbooks 函数
const _originalGetWordbooks = getWordbooks;

// 保存原始的 saveWordbook 函数
const _originalSaveWordbook = saveWordbook;

// 保存原始的 deleteWordbook 函数
const _originalDeleteWordbook = deleteWordbook;

// 保存原始的 displayWordbookList 函数
const _originalDisplayWordbookList = displayWordbookList;

// ==================== 新增：获取内置词书列表 ====================
async function getBuiltinWordbooks() {
    try {
        const response = await fetch(BUILTIN_WORDBOOKS_INDEX);
        if (!response.ok) {
            console.warn('内置词书索引加载失败');
            return [];
        }
        
        const index = await response.json();
        const installedVersions = getInstalledVersions();
        
        return index.wordbooks.map(wb => {
            const installed = installedVersions[wb.id];
            return {
                ...wb,
                builtin: true,
                installed: !!installed,
                hasUpdate: installed && installed.version !== wb.version,
                installedVersion: installed?.version
            };
        });
    } catch (error) {
        console.error('加载内置词书索引失败:', error);
        return [];
    }
}

// ==================== 新增：获取已安装版本 ====================
function getInstalledVersions() {
    const stored = localStorage.getItem(WORDBOOK_VERSION_KEY);
    return stored ? JSON.parse(stored) : {};
}

// ==================== 新增：安装内置词书 ====================
async function installBuiltinWordbook(wordbookMeta) {
    try {
        showLoading('正在下载词书...');
        
        const response = await fetch(wordbookMeta.dataFile);
        if (!response.ok) {
            throw new Error('词书数据加载失败');
        }
        
        const wordbookData = await response.json();
        
        const wordbook = {
            id: wordbookData.id,
            name: wordbookData.name,
            version: wordbookData.version,
            cover: wordbookData.cover,
            description: wordbookData.description,
            category: wordbookData.category,
            updateDate: wordbookData.updateDate,
            words: wordbookData.words,
            wordCount: wordbookData.words.length,
            builtin: true,
            createTime: new Date().toISOString()
        };
        
        const userWordbooks = _originalGetWordbooks();
        const existingIndex = userWordbooks.findIndex(wb => wb.id === wordbook.id);
        
        if (existingIndex > -1) {
            userWordbooks[existingIndex] = wordbook;
        } else {
            userWordbooks.unshift(wordbook);
        }
        
        localStorage.setItem(WORDBOOK_STORAGE_KEY, JSON.stringify(userWordbooks));
        
        const versions = getInstalledVersions();
        versions[wordbook.id] = {
            version: wordbook.version,
            installTime: new Date().toISOString()
        };
        localStorage.setItem(WORDBOOK_VERSION_KEY, JSON.stringify(versions));
        
        hideLoading();
        return wordbook;
    } catch (error) {
        hideLoading();
        throw error;
    }
}

// ==================== 新增：加载/隐藏状态 ====================
function showLoading(message) {
    const loadingDiv = document.createElement('div');
    loadingDiv.id = 'wordbookLoading';
    loadingDiv.className = 'loading-overlay';
    loadingDiv.innerHTML = `<div class="loading">${message}</div>`;
    document.body.appendChild(loadingDiv);
}

function hideLoading() {
    const loadingDiv = document.getElementById('wordbookLoading');
    if (loadingDiv) {
        document.body.removeChild(loadingDiv);
    }
}

// ==================== 覆盖：增强的 displayWordbookList ====================
displayWordbookList = async function() {
    const container = document.getElementById('wordbookList');
    const progress = getWordbookProgress();
    
    container.innerHTML = '<div class="loading" style="padding: 40px; text-align: center;">正在加载词书...</div>';
    
    try {
        const builtinWordbooks = await getBuiltinWordbooks();
        const userWordbooks = _originalGetWordbooks();
        const userOnlyWordbooks = userWordbooks.filter(wb => !wb.builtin);
        
        if (builtinWordbooks.length === 0 && userWordbooks.length === 0) {
            _originalDisplayWordbookList();
            return;
        }
        
        let html = '';
        
        // 内置词书区域
        if (builtinWordbooks.length > 0) {
            html += '<div class="wordbook-section"><h3 style="color: var(--primary-red); margin-bottom: 15px;">📚 官方词书</h3>';
            
            builtinWordbooks.forEach(wb => {
                const installed = userWordbooks.find(uwb => uwb.id === wb.id);
                
                if (installed) {
                    const learnedCount = progress[wb.id]?.learned?.length || 0;
                    const progressPercent = ((learnedCount / wb.wordCount) * 100).toFixed(0);
                    
                    html += `
                        <div class="wordbook-card" onclick="openWordbook('${wb.id}')">
                            <div class="wordbook-card-header">
                                <div style="display: flex; align-items: center; gap: 10px;">
                                    <span style="font-size: 2rem; line-height: 1;">${wb.cover}</span>
                                    <div style="flex: 1;">
                                        <h3 style="margin: 0;">${wb.name}</h3>
                                        ${wb.hasUpdate ? '<span class="update-badge">🔄 有更新</span>' : '<span class="installed-badge">✓ 已安装</span>'}
                                    </div>
                                </div>
                                <div style="display: flex; gap: 8px;">
                                    ${wb.hasUpdate ? `<button class="btn-icon" onclick="updateBuiltinWordbook(event, '${wb.id}')" title="更新">🔄</button>` : ''}
                                    <button class="btn-icon" onclick="uninstallBuiltinWordbook(event, '${wb.id}')" title="卸载">🗑️</button>
                                </div>
                            </div>
                            <div class="wordbook-card-info">
                                <span>📝 ${wb.wordCount} 个单词</span>
                                <span>📂 ${wb.category}</span>
                            </div>
                            <div class="wordbook-card-progress">
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: ${progressPercent}%"></div>
                                </div>
                                <span class="progress-text">${learnedCount} / ${wb.wordCount} (${progressPercent}%)</span>
                            </div>
                        </div>
                    `;
                } else {
                    html += `
                        <div class="wordbook-card uninstalled">
                            <div class="wordbook-card-header">
                                <div style="display: flex; align-items: center; gap: 10px;">
                                    <span style="font-size: 2rem; line-height: 1;">${wb.cover}</span>
                                    <div style="flex: 1;">
                                        <h3 style="margin: 0;">${wb.name}</h3>
                                        <p style="margin: 5px 0 0 0; font-size: 0.9rem; color: var(--text-light);">${wb.description}</p>
                                    </div>
                                </div>
                                <button class="btn-primary" onclick="installWordbook(event, '${wb.id}')" style="padding: 8px 16px; font-size: 0.9rem;">
                                    ⬇️ 下载
                                </button>
                            </div>
                            <div class="wordbook-card-info">
                                <span>📝 ${wb.wordCount} 个单词</span>
                                <span>📂 ${wb.category}</span>
                                <span>📅 ${wb.updateDate}</span>
                            </div>
                        </div>
                    `;
                }
            });
            
            html += '</div>';
        }
        
        // 用户词书区域
        if (userOnlyWordbooks.length > 0) {
            html += '<div class="wordbook-section" style="margin-top: 30px;"><h3 style="color: var(--primary-red); margin-bottom: 15px;">📂 我的词书</h3>';
            
            userOnlyWordbooks.forEach(wb => {
                const learnedCount = progress[wb.id]?.learned?.length || 0;
                const progressPercent = ((learnedCount / wb.wordCount) * 100).toFixed(0);
                const cover = wb.cover || '📚';
                
                html += `
                    <div class="wordbook-card" onclick="openWordbook('${wb.id}')">
                        <div class="wordbook-card-header">
                            <div style="display: flex; align-items: center; gap: 10px;">
                                <span style="font-size: 2rem; line-height: 1;">${cover}</span>
                                <h3 style="margin: 0; flex: 1;">${wb.name}</h3>
                            </div>
                            <button class="btn-icon" onclick="deleteWordbookConfirm(event, '${wb.id}')" title="删除">🗑️</button>
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
            });
            
            html += '</div>';
        }
        
        container.innerHTML = html;
        
    } catch (error) {
        console.error('显示词书列表失败:', error);
        _originalDisplayWordbookList();
    }
};

// ==================== 新增：安装词书 ====================
async function installWordbook(event, wordbookId) {
    event.stopPropagation();
    
    try {
        const builtinWordbooks = await getBuiltinWordbooks();
        const wordbook = builtinWordbooks.find(wb => wb.id === wordbookId);
        
        if (!wordbook) {
            alert('词书不存在');
            return;
        }
        
        await installBuiltinWordbook(wordbook);
        alert(`✅ "${wordbook.name}" 安装成功！\n\n📊 ${wordbook.wordCount} 个单词已就绪`);
        displayWordbookList();
        
    } catch (error) {
        alert(`❌ 安装失败：${error.message}`);
        console.error('安装词书失败:', error);
    }
}

// ==================== 新增：更新词书 ====================
async function updateBuiltinWordbook(event, wordbookId) {
    event.stopPropagation();
    
    if (!confirm('确定要更新此词书吗？\n\n更新后将保留你的学习进度。')) {
        return;
    }
    
    try {
        const builtinWordbooks = await getBuiltinWordbooks();
        const wordbook = builtinWordbooks.find(wb => wb.id === wordbookId);
        
        if (!wordbook) {
            alert('词书不存在');
            return;
        }
        
        await installBuiltinWordbook(wordbook);
        alert(`✅ "${wordbook.name}" 更新成功！\n\n📊 版本：${wordbook.version}`);
        displayWordbookList();
        
    } catch (error) {
        alert(`❌ 更新失败：${error.message}`);
        console.error('更新词书失败:', error);
    }
}

// ==================== 新增：卸载词书 ====================
function uninstallBuiltinWordbook(event, wordbookId) {
    event.stopPropagation();
    
    const userWordbooks = _originalGetWordbooks();
    const wordbook = userWordbooks.find(wb => wb.id === wordbookId);
    
    if (!wordbook) return;
    
    if (confirm(`确定要卸载 "${wordbook.name}" 吗？\n\n卸载后学习进度将保留，可随时重新下载。`)) {
        _originalDeleteWordbook(wordbookId);
        displayWordbookList();
        alert('词书已卸载');
    }
}

console.log('✅ 内置词书功能已加载');
