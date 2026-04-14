// 🎬 追剧背词模块 - 完整三层架构
// 第 1 层：剧集列表 → 第 2 层：分集列表 → 第 3 层：单集学习（单词速览 + 剧情助记）

(function() {
    'use strict';

    // ========== 全局状态 ==========
    let currentView = 'list';  // list | episodes | learn
    let currentDrama = null;   // 当前选中的剧集
    let currentEpisode = null; // 当前选中的集数
    let masteredWords = [];    // 已掌握单词 ID
    let currentFilter = 'all'; // all, todo, done
    let hideMeaning = false;   // 是否隐藏释义

    // ========== 数据：多部剧集 ==========
    const dramaList = [window.DRAMA_ZHZ];

    // ========== 初始化 ==========
    function init() {
        renderDramaList();
        setupEventListeners();
    }

    // ========== 第 1 层：渲染剧集列表 ==========
    function renderDramaList() {
        currentView = 'list';
        const container = document.getElementById('dramaContainer');
        if (!container) return;

        // 隐藏第3层头部和导航
        hideLearnUI();

        let html = `
            <div class="drama-list-header">
                <h1>🎬 追剧背词</h1>
                <p>📚 选择一部剧集开始学习</p>
            </div>
            <div class="drama-book-grid">
        `;

        dramaList.forEach(drama => {
            // 计算已更新词数
            let updatedWordCount = 0;
            drama.episodes.forEach(ep => {
                if (ep.id <= drama.releasedEpisodes) {
                    updatedWordCount += ep.wordCount;
                }
            });

            html += `
                <div class="drama-book-card" data-drama-id="${drama.id}">
                    <div class="drama-book-cover">
                        ${drama.cover ? `<img src="${drama.cover}" alt="${drama.title}" style="width:100%;height:100%;object-fit:cover;border-radius:12px">` : '<div class="cover-placeholder">📖</div>'}
                    </div>
                    <div class="drama-book-info">
                        <h3 class="drama-book-title">${drama.title}</h3>
                        <p class="drama-book-subtitle">${drama.subtitle}</p>
                        <p class="drama-book-desc">${drama.description}</p>
                        <div class="drama-book-stats">
                            <span class="stat">📺 已更新 ${drama.releasedEpisodes}/${drama.totalEpisodes} 集</span>
                            <span class="stat">📊 已更新词数 ${updatedWordCount}</span>
                        </div>
                    </div>
                </div>
            `;
        });

        html += '</div>';
        container.innerHTML = html;

        // 绑定点击事件
        container.querySelectorAll('.drama-book-card').forEach(card => {
            card.addEventListener('click', function() {
                const dramaId = this.dataset.dramaId;
                const drama = dramaList.find(d => d.id === dramaId);
                if (drama) {
                    currentDrama = drama;
                    renderEpisodeList();
                }
            });
        });
    }

    // ========== 第 2 层：渲染分集列表（不展示单词） ==========
    function renderEpisodeList() {
        currentView = 'episodes';
        const container = document.getElementById('dramaContainer');
        if (!container || !currentDrama) return;

        // 隐藏第3层头部和导航
        hideLearnUI();

        let html = `
            <div class="episode-list-header">
                <button class="back-btn" onclick="window.dramaBackToList()">← 返回剧集列表</button>
                <h1>${currentDrama.title}</h1>
                <p>${currentDrama.subtitle}</p>
            </div>
            <div class="episode-grid">
        `;

        currentDrama.episodes.forEach(ep => {
            const isLocked = ep.id > currentDrama.releasedEpisodes;
            html += `
                <div class="episode-card ${isLocked ? 'locked' : ''}" data-episode-id="${ep.id}">
                    <div class="episode-number">EP${String(ep.id).padStart(2, '0')}</div>
                    <h3 class="episode-title">${ep.title}</h3>
                    <div class="episode-stats">
                        <span class="stat">📊 ${ep.wordCount} 词</span>
                    </div>
                    ${isLocked ? '<div class="lock-overlay">🔒 未更新</div>' : ''}
                </div>
            `;
        });

        html += '</div>';
        container.innerHTML = html;

        // 绑定点击事件
        container.querySelectorAll('.episode-card:not(.locked)').forEach(card => {
            card.addEventListener('click', function() {
                const epId = parseInt(this.dataset.episodeId);
                const episode = currentDrama.episodes.find(e => e.id === epId);
                if (episode) {
                    currentEpisode = episode;
                    renderLearningView();
                }
            });
        });
    }

    // ========== 第 3 层：渲染单集学习页 ==========
    function renderLearningView() {
        currentView = 'learn';
        if (!currentDrama || !currentEpisode) return;

        // 隐藏 dramaContainer（第1/2层内容）
        const container = document.getElementById('dramaContainer');
        if (container) container.innerHTML = '';

        // 更新头部
        const header = document.querySelector('.drama-header');
        if (header) {
            const bannerBg = currentEpisode.banner ? `background-image:url('${currentEpisode.banner}');background-size:cover;background-position:center;` : '';
            header.innerHTML = `
                <div class="drama-header-image-overlay" style="${bannerBg}"></div>
                <div class="drama-header-content">
                    <button class="back-btn-header" onclick="window.dramaBackToEpisodes()">← 返回</button>
                    <h1>${currentDrama.title}</h1>
                    <p>${currentEpisode.title} · ${currentEpisode.wordCount} 词</p>
                </div>
            `;
            header.style.display = '';
        }

        // 更新导航栏
        const navBar = document.querySelector('.drama-nav-bar');
        if (navBar) {
            navBar.style.display = 'flex';
        }

        // 显示学习区域 - 默认显示单词速览
        document.querySelectorAll('.drama-section').forEach(s => s.classList.remove('active'));
        document.getElementById('drama-sec-words').classList.add('active');
        document.querySelectorAll('.drama-nav-btn').forEach(b => b.classList.remove('active'));
        document.querySelector('.drama-nav-btn[data-target="words"]').classList.add('active');

        // 重置隐藏释义状态
        const hideCheckbox = document.getElementById('dramaHideMeaning');
        if (hideCheckbox) {
            hideCheckbox.checked = false;
            hideMeaning = false;
        }

        // 加载单词卡片
        loadMasteredWords();
        renderWords();
        renderStory();
    }

    // ========== 隐藏第3层 UI ==========
    function hideLearnUI() {
        const header = document.querySelector('.drama-header');
        if (header) header.style.display = 'none';
        const navBar = document.querySelector('.drama-nav-bar');
        if (navBar) navBar.style.display = 'none';
        // 隐藏所有 section
        document.querySelectorAll('.drama-section').forEach(s => s.classList.remove('active'));
    }

    // ========== 单词卡片功能 ==========
    function loadMasteredWords() {
        const key = `drama_mastered_${currentDrama.id}_ep${currentEpisode.id}`;
        const stored = localStorage.getItem(key);
        masteredWords = stored ? JSON.parse(stored) : [];
    }

    function saveMasteredWords() {
        const key = `drama_mastered_${currentDrama.id}_ep${currentEpisode.id}`;
        localStorage.setItem(key, JSON.stringify(masteredWords));
    }

    function speak(word) {
        if (!('speechSynthesis' in window)) {
            alert('浏览器不支持语音播放');
            return;
        }
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(word);
        u.lang = 'en-US';
        u.rate = 0.85;
        u.pitch = 1;
        const voices = window.speechSynthesis.getVoices();
        const en = voices.find(v => v.lang.startsWith('en') && v.name.includes('Female'))
            || voices.find(v => v.lang.startsWith('en'));
        if (en) u.voice = en;
        window.speechSynthesis.speak(u);
    }

    // 单词速览：词头、词性、释义、发音🔊，可隐藏/显示释义，可标记已掌握
    function renderWords() {
        const q = (document.getElementById('dramaSearchInput')?.value || '').toLowerCase();
        const list = document.getElementById('dramaWordList');
        if (!list || !currentEpisode) return;

        let html = '';
        let shown = 0;

        (currentEpisode.words || []).forEach(w => {
            const isMastered = masteredWords.includes(w.id);
            if (currentFilter === 'done' && !isMastered) return;
            if (currentFilter === 'todo' && isMastered) return;
            if (q && !w.en.toLowerCase().includes(q) && !w.cn.includes(q) && !w.ph.includes(q)) return;

            shown++;

            // 解析词性和释义：格式如 "n. 军队" → 词性="n." 释义="军队"
            const cnParts = w.cn.match(/^([a-z]+\.\s*(?:\/[a-z]+\.\s*)*)(.+)$/i);
            const pos = cnParts ? cnParts[1].trim() : '';
            const meaning = cnParts ? cnParts[2].trim() : w.cn;

            html += `
                <div class="word-card ${isMastered ? 'mastered' : ''}" id="wc-${w.id}">
                    <div class="word-top">
                        <span class="word-en">${w.en}</span>
                        <span class="word-pos">${pos}</span>
                        <span class="word-meaning ${hideMeaning ? 'hidden-meaning' : ''}">${meaning}</span>
                        <button class="play-btn" onclick="window.dramaSpeak('${w.en}')" title="播放发音">🔊</button>
                        <button class="mastered-btn ${isMastered ? 'done' : ''}" 
                            onclick="window.dramaToggleMaster(${w.id}, this)">
                            ${isMastered ? '✅ 已掌握' : '☐ 标记已掌握'}
                        </button>
                    </div>
                </div>
            `;
        });

        if (!shown) {
            html = '<p style="text-align:center;color:var(--text-light);padding:40px 0">没有匹配的单词</p>';
        }

        list.innerHTML = html;
        updateProgress();
    }

    function toggleMaster(id, btn) {
        if (masteredWords.includes(id)) {
            masteredWords = masteredWords.filter(x => x !== id);
            btn.classList.remove('done');
            btn.textContent = '☐ 标记已掌握';
            const card = document.getElementById('wc-' + id);
            if (card) card.classList.remove('mastered');
        } else {
            masteredWords.push(id);
            btn.classList.add('done');
            btn.textContent = '✅ 已掌握';
            const card = document.getElementById('wc-' + id);
            if (card) card.classList.add('mastered');
        }
        saveMasteredWords();
        updateProgress();
    }

    function toggleMeaning(hide) {
        hideMeaning = hide;
        document.querySelectorAll('.word-meaning').forEach(el => {
            if (hide) {
                el.classList.add('hidden-meaning');
            } else {
                el.classList.remove('hidden-meaning');
            }
        });
    }

    function updateProgress() {
        const n = masteredWords.length;
        const total = (currentEpisode?.words || []).length;
        const progressText = document.getElementById('dramaProgressText');
        const progressFill = document.getElementById('dramaProgressFill');
        if (progressText) progressText.textContent = `已掌握 ${n} / ${total}`;
        if (progressFill) progressFill.style.width = (total > 0 ? (n / total * 100) : 0) + '%';
    }

    function setFilter(f) {
        currentFilter = f;
        document.querySelectorAll('.drama-filter-btn').forEach(b => b.classList.remove('active'));
        const btn = document.getElementById('filter' + f.charAt(0).toUpperCase() + f.slice(1));
        if (btn) btn.classList.add('active');
        renderWords();
    }

    // ========== 故事功能 ==========
    function renderStory() {
        const storyBox = document.getElementById('dramaStoryBox');
        if (!storyBox || !currentEpisode) return;

        let storyHtml = currentEpisode.story || '<p>故事加载中...</p>';

        // 将括号中的汉字包裹成可隐藏元素，默认隐藏
        // 匹配（中文）或 (中文) 格式
        storyHtml = storyHtml.replace(/（([^）]+)）/g, '<span class="story-cn-meaning hidden-cn">（$1）</span>');
        storyHtml = storyHtml.replace(/\(([^)]*[\u4e00-\u9fff][^)]*)\)/g, '<span class="story-cn-meaning hidden-cn">($1)</span>');

        storyBox.innerHTML = storyHtml;

        // 重置开关
        const showCheckbox = document.getElementById('dramaShowStoryMeaning');
        if (showCheckbox) showCheckbox.checked = false;

        const tip = document.getElementById('dramaTipBox');
        document.querySelectorAll('.vocab-highlight').forEach(el => {
            el.addEventListener('mouseenter', e => {
                const w = (currentEpisode.words || []).find(x => x.en === el.dataset.word);
                if (!w) return;
                tip.innerHTML = `<b>${w.en}</b> ${w.ph}<br>${w.cn}`;
                tip.style.display = 'block';
                const r = el.getBoundingClientRect();
                tip.style.left = Math.min(r.left, window.innerWidth - 270) + 'px';
                tip.style.top = (r.bottom + 8) + 'px';
            });
            el.addEventListener('mouseleave', () => {
                tip.style.display = 'none';
            });
            el.addEventListener('click', () => {
                speak(el.dataset.word);
            });
        });
    }

    function toggleStoryMeaning(show) {
        document.querySelectorAll('.story-cn-meaning').forEach(el => {
            if (show) {
                el.classList.remove('hidden-cn');
            } else {
                el.classList.add('hidden-cn');
            }
        });
    }

    // ========== 导航 ==========
    function backToList() {
        currentView = 'list';
        currentDrama = null;
        currentEpisode = null;
        renderDramaList();
    }

    function backToEpisodes() {
        currentView = 'episodes';
        currentEpisode = null;
        renderEpisodeList();
    }

    // ========== 事件监听 ==========
    function setupEventListeners() {
        // 搜索输入
        document.getElementById('dramaSearchInput')?.addEventListener('input', renderWords);

        // 导航切换（仅在第 3 层显示）
        document.querySelectorAll('.drama-nav-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                if (currentView !== 'learn') return;
                
                document.querySelectorAll('.drama-nav-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                const target = this.dataset.target;
                document.querySelectorAll('.drama-section').forEach(s => s.classList.remove('active'));
                document.getElementById('drama-sec-' + target).classList.add('active');
            });
        });
    }

    // ========== 全局函数 ==========
    window.dramaSpeak = speak;
    window.dramaToggleMaster = toggleMaster;
    window.dramaToggleMeaning = toggleMeaning;
    window.dramaToggleStoryMeaning = toggleStoryMeaning;
    window.dramaSetFilter = setFilter;
    window.dramaBackToList = backToList;
    window.dramaBackToEpisodes = backToEpisodes;

    // ========== 启动 ==========
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
