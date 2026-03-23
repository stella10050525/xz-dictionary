// 肖战角色与剧集数据库 - 基于真实剧情
// 2026-03-23 更新:基于百度百科实际内容整理

const xzCharacterDatabase = {
    // 1. 《超星星学院》- 科幻校园星座
    fangTianZe: {
        name: 'Fang Tianze',
        zh: '方天择',
        drama: 'Super Star Academy',
        dramaZh: '超星星学院',
        type: 'sci-fi-school',
        traits: ['leader', 'calm', 'loyal', 'strategic'],
        keywords: ['society', 'president', 'leader', 'power', 'zodiac', 'academy', 'inherit', 'organization', 'secret', 'identity']
    },
    
    // 2. 《狼殿下》- 古装言情战争
    jiChong: {
        name: 'Ji Chong',
        zh: '疾冲',
        drama: 'The Wolf',
        dramaZh: '狼殿下',
        type: 'costume-war',
        traits: ['rough', 'heroic', 'righteous', 'sacrificial'],
        keywords: ['warrior', 'soldier', 'mercenary', 'bounty', 'hunter', 'justice', 'battlefield', 'honor', 'noble', 'sacrifice']
    },
    
    // 3. 《哦,我的皇帝陛下》- 古装奇幻喜剧
    beiTangMoRan: {
        name: 'Beitang Moran',
        zh: '北堂墨染',
        drama: 'Oh! My Emperor',
        dramaZh: '哦,我的皇帝陛下',
        type: 'fantasy-comedy',
        traits: ['cold', 'mysterious', 'elegant', 'gentle'],
        keywords: ['prophet', 'prediction', 'foresee', 'mysterious', 'elegant', 'zodiac', 'guardian']
    },
    
    // 4. 《陈情令》- 古装仙侠(代表作)
    weiWuxian: {
        name: 'Wei Wuxian',
        zh: '魏无羡',
        drama: 'The Untamed',
        dramaZh: '陈情令',
        type: 'xianxia',
        traits: ['free-spirited', 'righteous', 'clever', 'loyal'],
        keywords: ['cultivation', 'sword', 'justice', 'friendship', 'sacrifice', 'rebirth', 'demonic', 'martial', 'righteous', 'misunderstood']
    },
    
    // 5. 《斗罗大陆》- 动画配音
    tangSan: {
        name: 'Tang San',
        zh: '唐三',
        drama: 'Douluo Continent',
        dramaZh: '斗罗大陆',
        type: 'animation',
        traits: ['talented', 'diligent', 'strategic', 'determined'],
        keywords: ['soul', 'spirit', 'power', 'train', 'practice', 'technique', 'master', 'growth', 'breakthrough', 'battle']
    },
    
    // 6. 《余生请多指教》- 现代都市医疗爱情
    guWei: {
        name: 'Gu Wei',
        zh: '顾魏',
        drama: 'The Oath of Love',
        dramaZh: '余生请多指教',
        type: 'modern-medical',
        traits: ['gentle', 'professional', 'caring', 'dedicated'],
        keywords: ['doctor', 'surgeon', 'hospital', 'patient', 'heal', 'medical', 'care', 'surgery', 'treatment', 'diagnosis', 'compassion']
    },
    
    // 7. 《王牌部队》- 现代军旅
    guYiye: {
        name: 'Gu Yiye',
        zh: '顾一野',
        drama: 'Ace Troops',
        dramaZh: '王牌部队',
        type: 'military',
        traits: ['disciplined', 'strong', 'brave', 'patriotic'],
        keywords: ['soldier', 'army', 'military', 'troop', 'training', 'mission', 'combat', 'duty', 'sacrifice', 'command', 'battle']
    },
    
    // 8. 《玉骨遥》- 古装仙侠虐恋
    shiYing: {
        name: 'Shi Ying',
        zh: '时影',
        drama: 'The Longest Promise',
        dramaZh: '玉骨遥',
        type: 'xianxia-tragic',
        traits: ['powerful', 'mysterious', 'tragic', 'complex'],
        keywords: ['prince', 'demon', 'immortal', 'fate', 'curse', 'tragic', 'destiny', 'sacrifice', 'magic', 'dark']
    },
    
    // 9. 《如梦之梦》- 话剧
    patient5: {
        name: 'Patient No.5',
        zh: '五号病人',
        drama: 'A Dream Like A Dream',
        dramaZh: '如梦之梦',
        type: 'stage-play',
        traits: ['philosophical', 'reflective', 'complex', 'mysterious'],
        keywords: ['patient', 'dream', 'memory', 'life', 'death', 'meaning', 'identity', 'search', 'past', 'story']
    },
    
    // 10. 《梦中的那片海》- 年代励志
    xiaoChunSheng: {
        name: 'Xiao Chunsheng',
        zh: '肖春生',
        drama: 'The Ocean of Dreams',
        dramaZh: '梦中的那片海',
        type: 'period-inspirational',
        traits: ['passionate', 'ambitious', 'brave', 'loyal'],
        keywords: ['entrepreneur', 'business', 'dream', 'struggle', 'era', 'reform', 'opportunity', 'challenge', 'growth', 'success']
    },
    
    // 11. 《骄阳伴我》- 现代都市职场
    shengYang: {
        name: 'Sheng Yang',
        zh: '盛阳',
        drama: 'The Sun Accompanies Me',
        dramaZh: '骄阳伴我',
        type: 'modern-urban',
        traits: ['talented', 'creative', 'warm', 'professional'],
        keywords: ['architect', 'designer', 'design', 'building', 'create', 'project', 'aesthetic', 'vision', 'art', 'blueprint', 'plan']
    },
    
    // 12. 《射雕英雄传》- 武侠经典
    guoJing: {
        name: 'Guo Jing',
        zh: '郭靖',
        drama: 'The Legend of the Condor Heroes',
        dramaZh: '射雕英雄传',
        type: 'wuxia',
        traits: ['honest', 'loyal', 'diligent', 'righteous'],
        keywords: ['hero', 'martial', 'arts', 'practice', 'kungfu', 'training', 'master', 'honor', 'justice', 'righteous', 'perseverance', 'diligent']
    },
    
    // 13. 《藏海传》- 悬疑探险
    zangHai: {
        name: 'Zang Hai',
        zh: '藏海',
        drama: 'The Hidden Sea',
        dramaZh: '藏海传',
        type: 'mystery-adventure',
        traits: ['clever', 'brave', 'mysterious', 'resourceful'],
        keywords: ['adventurer', 'explorer', 'mystery', 'secret', 'treasure', 'ancient', 'puzzle', 'discover', 'danger', 'expedition', 'riddle', 'tomb']
    },
    
    // 14. 《得闲谨制》- 古装美食治愈
    moDeXian: {
        name: 'Mo Dexian',
        zh: '莫得闲',
        drama: 'Chef Mo',
        dramaZh: '得闲谨制',
        type: 'costume-food', // 不是侦探!是厨师!
        traits: ['skillful', 'creative', 'dedicated', 'meticulous'],
        keywords: ['chef', 'cook', 'cuisine', 'food', 'dish', 'recipe', 'ingredient', 'palace', 'imperial', 'culinary', 'delicacy', 'taste', 'nutrition']
    },
    
    // 15. 《谍报上不封顶》- 谍战悬疑
    renShaoBai: {
        name: 'Ren Shaobai',
        zh: '任少白',
        drama: 'Spy No Limit',
        dramaZh: '谍报上不封顶',
        type: 'spy',
        traits: ['intelligent', 'cautious', 'brave', 'loyal'],
        keywords: ['spy', 'agent', 'secret', 'undercover', 'mission', 'intelligence', 'code', 'infiltrate', 'enemy', 'war', 'danger', 'disguise']
    },
    
    // 16. 《小城良方》- 现代医疗温情
    liuZhengLiang: {
        name: 'Liu Zhengliang',
        zh: '刘铮亮',
        drama: 'Small City Remedy',
        dramaZh: '小城良方',
        type: 'modern-medical',
        traits: ['compassionate', 'skilled', 'humble', 'dedicated'],
        keywords: ['doctor', 'physician', 'clinic', 'community', 'patient', 'treatment', 'diagnose', 'heal', 'medicine', 'care', 'grassroots', 'local']
    }
};

// 根据关键词匹配最合适的角色
function findBestCharacterForWord(word, meaning, partOfSpeech) {
    const wordLower = word.toLowerCase();
    const meaningLower = meaning.toLowerCase();
    
    // 特殊匹配规则 - 基于真实剧情
    const specialMatches = {
        // 医疗相关 → 顾魏(外科医生)或刘铮亮(基层医生)
        'doctor': ['guWei', 'liuZhengLiang'],
        'surgeon': ['guWei'],
        'hospital': ['guWei'],
        'patient': ['guWei', 'liuZhengLiang'],
        'heal': ['guWei', 'liuZhengLiang'],
        'medical': ['guWei'],
        'clinic': ['liuZhengLiang'],
        'surgery': ['guWei'],
        'treatment': ['guWei', 'liuZhengLiang'],
        
        // 设计/建筑相关 → 盛阳(建筑设计师)
        'design': ['shengYang'],
        'designer': ['shengYang'],
        'architect': ['shengYang'],
        'building': ['shengYang'],
        'aesthetic': ['shengYang'],
        'blueprint': ['shengYang'],
        
        // 武术/练习相关 → 郭靖(勤学苦练)、魏无羡(剑术)
        'practice': ['guoJing', 'tangSan'],
        'martial': ['guoJing'],
        'kungfu': ['guoJing'],
        'sword': ['weiWuxian', 'guoJing'],
        'training': ['guoJing', 'guYiye'],
        'diligent': ['guoJing'],
        
        // 军事相关 → 顾一野(军人)、疾冲(战士)
        'soldier': ['guYiye', 'jiChong'],
        'army': ['guYiye'],
        'military': ['guYiye'],
        'troop': ['guYiye'],
        'battle': ['guYiye', 'jiChong'],
        'combat': ['guYiye'],
        'warrior': ['jiChong'],
        
        // 美食/烹饪相关 → 莫得闲(御膳总管/厨师)
        'chef': ['moDeXian'],
        'cook': ['moDeXian'],
        'cuisine': ['moDeXian'],
        'food': ['moDeXian'],
        'dish': ['moDeXian'],
        'recipe': ['moDeXian'],
        'culinary': ['moDeXian'],
        
        // 间谍相关 → 任少白(地下工作者)
        'spy': ['renShaoBai'],
        'agent': ['renShaoBai'],
        'undercover': ['renShaoBai'],
        'intelligence': ['renShaoBai'],
        'infiltrate': ['renShaoBai'],
        
        // 探险/神秘相关 → 藏海(探险家)优先
        'adventure': ['zangHai'],
        'explorer': ['zangHai'],
        'treasure': ['zangHai'],
        'mystery': ['zangHai'],  // 修正:优先藏海而非莫得闲
        'secret': ['zangHai', 'renShaoBai'],
        'tomb': ['zangHai'],
        'ancient': ['zangHai'],
        
        // 商业/创业相关 → 肖春生(创业者)
        'business': ['xiaoChunSheng'],
        'entrepreneur': ['xiaoChunSheng'],
        'opportunity': ['xiaoChunSheng'],
        'success': ['xiaoChunSheng'],
        
        // 魂力/修炼相关 → 唐三、魏无羡
        'soul': ['tangSan'],
        'spirit': ['tangSan'],
        'cultivation': ['weiWuxian'],
        'immortal': ['shiYing', 'weiWuxian'],
        
        // 领导/组织相关 → 方天择(会长)
        'leader': ['fangTianZe'],
        'president': ['fangTianZe'],
        'organization': ['fangTianZe'],
        'society': ['fangTianZe'],
        
        // 命运/悲剧相关 → 时影(魔神)
        'fate': ['shiYing'],
        'curse': ['shiYing'],
        'tragic': ['shiYing'],
        'destiny': ['shiYing'],
        
        // 哲学/梦境相关 → 五号病人
        'dream': ['patient5', 'xiaoChunSheng'],
        'memory': ['patient5'],
        'philosophical': ['patient5']
    };
    
    // 检查特殊匹配
    for (const [keyword, characters] of Object.entries(specialMatches)) {
        if (wordLower.includes(keyword) || meaningLower.includes(keyword)) {
            const charKey = characters[Math.floor(Math.random() * characters.length)];
            return xzCharacterDatabase[charKey];
        }
    }
    
    // 如果没有特殊匹配,根据关键词模糊匹配
    for (const [key, character] of Object.entries(xzCharacterDatabase)) {
        if (character.keywords.some(kw => 
            wordLower.includes(kw) || 
            meaningLower.includes(kw) ||
            kw.includes(wordLower)
        )) {
            return character;
        }
    }
    
    // 默认返回魏无羡(最经典角色)
    return xzCharacterDatabase.weiWuxian;
}

// 判断单词是否为褒义词
function isPositiveWord(word, meaning, partOfSpeech) {
    const wordLower = word.toLowerCase();
    const meaningLower = meaning.toLowerCase();
    
    // 褒义词关键字列表
    const positiveKeywords = [
        // 外貌
        'handsome', 'beautiful', 'gorgeous', 'attractive', 'charming', 'elegant', 'stylish', 'graceful', 'radiant',
        // 才华
        'talented', 'brilliant', 'skillful', 'gifted', 'creative', 'artistic', 'professional', 'excellent', 'outstanding',
        // 品质
        'kind', 'gentle', 'humble', 'sincere', 'honest', 'generous', 'dedicated', 'passionate',
        'loyal', 'brave', 'courageous', 'strong', 'determined', 'ambitious', 'diligent', 'hardworking',
        // 性格
        'warm', 'friendly', 'caring', 'compassionate', 'thoughtful', 'considerate', 'patient',
        // 成就
        'successful', 'remarkable', 'impressive', 'amazing', 'incredible', 'wonderful',
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
