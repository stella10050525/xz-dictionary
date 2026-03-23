// 肖战角色与剧集数据库
// 用于生成符合人设和剧情的例句

const xzCharacterDatabase = {
    // 1. 《超星星学院》- 科幻校园
    fangTianZe: {
        name: 'Fang Tianze',
        zh: '方天择',
        drama: 'Super Star Academy',
        dramaZh: '超星星学院',
        type: 'sci-fi', // 科幻
        traits: ['brave', 'intelligent', 'protective', 'determined'],
        keywords: ['星际', 'academy', 'student', 'protect', 'battle', 'courage', 'mission', 'space', 'future']
    },
    
    // 2. 《狼殿下》- 古装奇幻
    jiChong: {
        name: 'Ji Chong',
        zh: '疾冲',
        drama: 'The Wolf',
        dramaZh: '狼殿下',
        type: 'fantasy', // 奇幻
        traits: ['wild', 'loyal', 'strong', 'mysterious'],
        keywords: ['wolf', 'wild', 'forest', 'instinct', 'hunt', 'protect', 'fierce', 'nature', 'survival']
    },
    
    // 3. 《哦，我的皇帝陛下》- 古装喜剧
    beiTangMoRan: {
        name: 'Beitang Moran',
        zh: '北堂墨染',
        drama: 'Oh! My Emperor',
        dramaZh: '哦，我的皇帝陛下',
        type: 'comedy', // 喜剧
        traits: ['cold', 'powerful', 'mysterious', 'noble'],
        keywords: ['emperor', 'palace', 'power', 'royal', 'throne', 'destiny', 'magic', 'astrology']
    },
    
    // 4. 《陈情令》- 古装仙侠（代表作）
    weiWuxian: {
        name: 'Wei Wuxian',
        zh: '魏无羡',
        drama: 'The Untamed',
        dramaZh: '陈情令',
        type: 'xianxia', // 仙侠
        traits: ['free-spirited', 'righteous', 'clever', 'rebellious', 'loyal'],
        keywords: ['cultivation', 'sword', 'justice', 'friendship', 'sacrifice', 'rebirth', 'demonic', 'flute', 'adventure', 'misunderstood']
    },
    
    // 5. 《斗罗大陆》- 动画配音
    tangSan: {
        name: 'Tang San',
        zh: '唐三',
        drama: 'Douluo Continent',
        dramaZh: '斗罗大陆',
        type: 'animation', // 动画
        traits: ['talented', 'humble', 'determined', 'strategic'],
        keywords: ['soul', 'spirit', 'power', 'train', 'challenge', 'grow', 'battle', 'technique', 'master']
    },
    
    // 6. 《余生请多指教》- 现代都市爱情
    guWei: {
        name: 'Gu Wei',
        zh: '顾魏',
        drama: 'The Oath of Love',
        dramaZh: '余生请多指教',
        type: 'modern-romance', // 现代爱情
        traits: ['gentle', 'professional', 'caring', 'dedicated', 'warm'],
        keywords: ['doctor', 'hospital', 'patient', 'heal', 'care', 'medical', 'save', 'compassion', 'surgery', 'diagnosis']
    },
    
    // 7. 《王牌部队》- 军旅
    guYiye: {
        name: 'Gu Yiye',
        zh: '顾一野',
        drama: 'Ace Troops',
        dramaZh: '王牌部队',
        type: 'military', // 军旅
        traits: ['disciplined', 'strong', 'strategic', 'patriotic', 'tough'],
        keywords: ['soldier', 'army', 'train', 'mission', 'battle', 'command', 'discipline', 'duty', 'sacrifice', 'military']
    },
    
    // 8. 《玉骨遥》- 古装仙侠
    shiYing: {
        name: 'Shi Ying',
        zh: '时影',
        drama: 'The Longest Promise',
        dramaZh: '玉骨遥',
        type: 'xianxia', // 仙侠
        traits: ['mysterious', 'powerful', 'complex', 'tragic'],
        keywords: ['immortal', 'demon', 'fate', 'sacrifice', 'power', 'curse', 'destiny', 'magic', 'tragic']
    },
    
    // 9. 《如梦之梦》- 话剧
    patient5: {
        name: 'Patient No.5',
        zh: '五号病人',
        drama: 'A Dream Like A Dream',
        dramaZh: '如梦之梦',
        type: 'stage', // 话剧
        traits: ['philosophical', 'complex', 'mysterious', 'reflective'],
        keywords: ['dream', 'memory', 'life', 'death', 'story', 'search', 'identity', 'meaning', 'past']
    },
    
    // 10. 《梦中的那片海》- 年代剧
    xiaoChunSheng: {
        name: 'Xiao Chunsheng',
        zh: '肖春生',
        drama: 'The Ocean of Dreams',
        dramaZh: '梦中的那片海',
        type: 'period', // 年代
        traits: ['passionate', 'ambitious', 'determined', 'entrepreneurial'],
        keywords: ['era', 'dream', 'business', 'struggle', 'family', 'passion', 'success', 'challenge', 'growth']
    },
    
    // 11. 《骄阳伴我》- 现代都市
    shengYang: {
        name: 'Sheng Yang',
        zh: '盛阳',
        drama: 'The Sun Accompanies Me',
        dramaZh: '骄阳伴我',
        type: 'modern-urban', // 现代都市
        traits: ['talented', 'creative', 'warm', 'professional'],
        keywords: ['design', 'architecture', 'create', 'art', 'project', 'aesthetic', 'vision', 'build', 'dream']
    },
    
    // 12. 《射雕英雄传》- 武侠
    guoJing: {
        name: 'Guo Jing',
        zh: '郭靖',
        drama: 'The Legend of the Condor Heroes',
        dramaZh: '射雕英雄传',
        type: 'wuxia', // 武侠
        traits: ['honest', 'loyal', 'diligent', 'righteous', 'simple'],
        keywords: ['martial arts', 'practice', 'master', 'honor', 'hero', 'justice', 'kungfu', 'training', 'loyalty']
    },
    
    // 13. 《藏海传》- 悬疑探险
    zangHai: {
        name: 'Zang Hai',
        zh: '藏海',
        drama: 'The Hidden Sea',
        dramaZh: '藏海传',
        type: 'mystery-adventure', // 悬疑探险
        traits: ['clever', 'brave', 'mysterious', 'resourceful'],
        keywords: ['mystery', 'adventure', 'danger', 'secret', 'discover', 'explore', 'puzzle', 'ancient', 'treasure']
    },
    
    // 14. 《得闲谨制》- 悬疑推理
    moDeXian: {
        name: 'Mo Dexian',
        zh: '莫得闲',
        drama: 'Detective Mo',
        dramaZh: '得闲谨制',
        type: 'detective', // 侦探
        traits: ['analytical', 'sharp', 'observant', 'rational'],
        keywords: ['detective', 'clue', 'investigate', 'solve', 'mystery', 'crime', 'truth', 'evidence', 'deduce']
    },
    
    // 15. 《谍报上不封顶》- 谍战
    renShaoBai: {
        name: 'Ren Shaobai',
        zh: '任少白',
        drama: 'Spy No Limit',
        dramaZh: '谍报上不封顶',
        type: 'spy', // 谍战
        traits: ['intelligent', 'cautious', 'brave', 'loyal'],
        keywords: ['spy', 'secret', 'mission', 'danger', 'intelligence', 'code', 'infiltrate', 'enemy', 'war']
    },
    
    // 16. 《小城良方》- 现代医疗
    liuZhengLiang: {
        name: 'Liu Zhengliang',
        zh: '刘铮亮',
        drama: 'Small City Remedy',
        dramaZh: '小城良方',
        type: 'modern-medical', // 现代医疗
        traits: ['compassionate', 'skilled', 'dedicated', 'humble'],
        keywords: ['doctor', 'clinic', 'heal', 'patient', 'diagnose', 'treat', 'medicine', 'care', 'community']
    }
};

// 根据关键词匹配最合适的角色
function findBestCharacterForWord(word, meaning, partOfSpeech) {
    const wordLower = word.toLowerCase();
    const meaningLower = meaning.toLowerCase();
    
    // 特殊匹配规则
    const specialMatches = {
        // 医疗相关 → 顾魏或刘铮亮
        'doctor': ['guWei', 'liuZhengLiang'],
        'hospital': ['guWei'],
        'patient': ['guWei', 'liuZhengLiang'],
        'heal': ['guWei', 'liuZhengLiang'],
        'medical': ['guWei'],
        'clinic': ['liuZhengLiang'],
        
        // 设计/艺术相关 → 盛阳
        'design': ['shengYang'],
        'architecture': ['shengYang'],
        'create': ['shengYang'],
        'aesthetic': ['shengYang'],
        
        // 武术/练习相关 → 郭靖、魏无羡
        'practice': ['guoJing', 'weiWuxian'],
        'martial': ['guoJing'],
        'kungfu': ['guoJing'],
        'sword': ['weiWuxian', 'guoJing'],
        
        // 军事相关 → 顾一野
        'soldier': ['guYiye'],
        'army': ['guYiye'],
        'military': ['guYiye'],
        'battle': ['guYiye', 'guoJing'],
        
        // 侦探/推理相关 → 莫得闲
        'detective': ['moDeXian'],
        'investigate': ['moDeXian'],
        'clue': ['moDeXian'],
        'mystery': ['moDeXian', 'zangHai'],
        
        // 间谍相关 → 任少白
        'spy': ['renShaoBai'],
        'secret': ['renShaoBai', 'zangHai'],
        
        // 探险相关 → 藏海
        'adventure': ['zangHai'],
        'explore': ['zangHai'],
        'treasure': ['zangHai'],
        
        // 商业/奋斗相关 → 肖春生
        'business': ['xiaoChunSheng'],
        'entrepreneur': ['xiaoChunSheng'],
        'success': ['xiaoChunSheng'],
        
        // 科幻相关 → 方天择
        'space': ['fangTianZe'],
        'future': ['fangTianZe'],
        'academy': ['fangTianZe'],
        
        // 魔法/仙侠相关 → 魏无羡、时影
        'magic': ['weiWuxian', 'shiYing'],
        'immortal': ['shiYing'],
        'cultivation': ['weiWuxian'],
        
        // 野性/自然相关 → 疾冲
        'wolf': ['jiChong'],
        'wild': ['jiChong'],
        'forest': ['jiChong']
    };
    
    // 检查特殊匹配
    for (const [keyword, characters] of Object.entries(specialMatches)) {
        if (wordLower.includes(keyword) || meaningLower.includes(keyword)) {
            const charKey = characters[Math.floor(Math.random() * characters.length)];
            return xzCharacterDatabase[charKey];
        }
    }
    
    // 如果没有特殊匹配，根据关键词模糊匹配
    for (const [key, character] of Object.entries(xzCharacterDatabase)) {
        if (character.keywords.some(kw => 
            wordLower.includes(kw) || 
            meaningLower.includes(kw) ||
            kw.includes(wordLower)
        )) {
            return character;
        }
    }
    
    // 默认返回魏无羡（最经典角色）
    return xzCharacterDatabase.weiWuxian;
}

// 判断单词是否为褒义词
function isPositiveWord(word, meaning, partOfSpeech) {
    const wordLower = word.toLowerCase();
    const meaningLower = meaning.toLowerCase();
    
    // 褒义词关键字列表
    const positiveKeywords = [
        // 外貌
        'handsome', 'beautiful', 'gorgeous', 'attractive', 'charming', 'elegant', 'stylish', 'graceful',
        // 才华
        'talented', 'brilliant', 'skillful', 'gifted', 'creative', 'artistic', 'professional', 'excellent',
        // 品质
        'kind', 'gentle', 'humble', 'sincere', 'honest', 'generous', 'dedicated', 'passionate',
        'loyal', 'brave', 'courageous', 'strong', 'determined', 'ambitious', 'diligent', 'hardworking',
        // 性格
        'warm', 'friendly', 'caring', 'compassionate', 'thoughtful', 'considerate', 'patient',
        // 成就
        'successful', 'outstanding', 'remarkable', 'impressive', 'amazing', 'incredible', 'wonderful',
        'perfect', 'popular', 'famous', 'influential',
        // 中文褒义词标记
        '优秀', '出色', '杰出', '卓越', '完美', '精彩', '美好', '善良', '真诚', '勤奋',
        '努力', '帅气', '英俊', '迷人', '优雅', '才华', '天赋', '专业', '敬业'
    ];
    
    // 检查单词或释义是否包含褒义词
    return positiveKeywords.some(keyword => 
        wordLower.includes(keyword) || 
        meaningLower.includes(keyword) ||
        keyword.includes(wordLower)
    );
}

// 导出供其他文件使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        xzCharacterDatabase,
        findBestCharacterForWord,
        isPositiveWord
    };
}
