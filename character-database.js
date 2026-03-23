// 肖战角色与剧集数据库 - 基于真实剧情和人设
// 2026-03-23 更新: 基于用户提供的准确剧情和角色信息整理

const xzCharacterDatabase = {
    // 1. 《超星星学院》- 科幻校园星座
    fangTianZe: {
        name: 'Fang Tianze',
        zh: '方天择',
        drama: 'Super Star Academy',
        dramaZh: '超星星学院',
        type: 'sci-fi-school',
        identity: '学生、社团会长',
        traits: ['leader', 'cold', 'responsible', 'brave', 'loyal'],
        keywords: ['student', 'society', 'president', 'leader', 'zodiac', 'academy', 'power', 'identity', 'secret', 'protect', 'family', 'conspiracy']
    },
    
    // 2. 《狼殿下》- 古装言情战争
    jiChong: {
        name: 'Ji Chong',
        zh: '疾冲',
        drama: 'The Wolf',
        dramaZh: '狼殿下',
        type: 'costume-war',
        identity: '溍国少帅、赏金猎人',
        traits: ['heroic', 'righteous', 'skilled', 'noble', 'sacrificial', 'independent'],
        keywords: ['warrior', 'commander', 'mercenary', 'bounty', 'hunter', 'arrow', 'eagle', 'army', 'justice', 'honor', 'sacrifice', 'respect', 'noble', 'protect']
    },
    
    // 3. 《哦,我的皇帝陛下》- 古装奇幻喜剧
    beiTangMoRan: {
        name: 'Beitang Moran',
        zh: '北堂墨染',
        drama: 'Oh! My Emperor',
        dramaZh: '哦,我的皇帝陛下',
        type: 'fantasy-comedy',
        identity: '王爷、水瓶星主',
        traits: ['gentle', 'strategic', 'devoted', 'protective'],
        keywords: ['prince', 'guardian', 'zodiac', 'protect', 'gentle', 'strategic', 'devoted', 'loyal']
    },
    
    // 4. 《陈情令》- 古装仙侠(代表作)
    weiWuxian: {
        name: 'Wei Wuxian',
        zh: '魏无羡',
        drama: 'The Untamed',
        dramaZh: '陈情令',
        type: 'xianxia',
        identity: '修仙者、夷陵老祖',
        traits: ['free-spirited', 'righteous', 'loyal', 'brave', 'misunderstood'],
        keywords: ['cultivation', 'immortal', 'sword', 'flute', 'justice', 'friendship', 'sacrifice', 'rebirth', 'misunderstood', 'righteous', 'principle', 'protect']
    },
    
    // 5. 《斗罗大陆》- 动画配音
    tangSan: {
        name: 'Tang San',
        zh: '唐三',
        drama: 'Douluo Continent',
        dramaZh: '斗罗大陆',
        type: 'animation',
        identity: '魂师',
        traits: ['resilient', 'clever', 'loyal', 'determined', 'talented'],
        keywords: ['soul', 'spirit', 'power', 'train', 'practice', 'technique', 'battle', 'growth', 'martial', 'family', 'promise', 'justice']
    },
    
    // 6. 《余生,请多指教》- 现代都市医疗爱情
    guWei: {
        name: 'Gu Wei',
        zh: '顾魏',
        drama: 'The Oath of Love',
        dramaZh: '余生,请多指教',
        type: 'modern-medical',
        identity: '外科医生',
        traits: ['cold', 'professional', 'gentle', 'dedicated', 'caring'],
        keywords: ['doctor', 'surgeon', 'hospital', 'patient', 'heal', 'medical', 'surgery', 'operation', 'treatment', 'diagnosis', 'care', 'professional', 'cold', 'gentle']
    },
    
    // 7. 《王牌部队》- 现代军旅
    guYiye: {
        name: 'Gu Yiye',
        zh: '顾一野',
        drama: 'Ace Troops',
        dramaZh: '王牌部队',
        type: 'military',
        identity: '军人',
        traits: ['proud', 'ambitious', 'skilled', 'loyal', 'responsible'],
        keywords: ['soldier', 'army', 'military', 'training', 'battle', 'combat', 'mission', 'duty', 'honor', 'discipline', 'comrade', 'proud', 'noble']
    },
    
    // 8. 《玉骨遥》- 古装仙侠虐恋
    shiYing: {
        name: 'Shi Ying',
        zh: '时影',
        drama: 'The Longest Promise',
        dramaZh: '玉骨遥',
        type: 'xianxia-tragic',
        identity: '空桑皇太子',
        traits: ['cold', 'restrained', 'responsible', 'devoted', 'tragic'],
        keywords: ['prince', 'cold', 'lonely', 'duty', 'sacrifice', 'fate', 'curse', 'tragic', 'protect', 'nation', 'restrain', 'magic']
    },
    
    // 9. 《如梦之梦》- 话剧
    patient5: {
        name: 'Patient No.5',
        zh: '五号病人',
        drama: 'A Dream Like A Dream',
        dramaZh: '如梦之梦',
        type: 'stage-play',
        identity: '病人',
        traits: ['lonely', 'sensitive', 'searching', 'gentle', 'suffering'],
        keywords: ['patient', 'disease', 'lonely', 'search', 'travel', 'pain', 'loss', 'memory', 'truth', 'meaning', 'life', 'death']
    },
    
    // 10. 《梦中的那片海》- 年代励志
    xiaoChunSheng: {
        name: 'Xiao Chunsheng',
        zh: '肖春生',
        drama: 'The Ocean of Dreams',
        dramaZh: '梦中的那片海',
        type: 'period-inspirational',
        identity: '大院子弟、军人、企业家',
        traits: ['clever', 'brave', 'loyal', 'responsible', 'charismatic'],
        keywords: ['soldier', 'entrepreneur', 'business', 'loyalty', 'brotherhood', 'era', 'reform', 'dream', 'struggle', 'integrity', 'responsibility']
    },
    
    // 11. 《骄阳伴我》- 现代都市职场
    shengYang: {
        name: 'Sheng Yang',
        zh: '盛阳',
        drama: 'The Sun Accompanies Me',
        dramaZh: '骄阳伴我',
        type: 'modern-urban',
        identity: '设计师',
        traits: ['sunny', 'positive', 'hardworking', 'sincere', 'warm'],
        keywords: ['designer', 'design', 'architecture', 'building', 'create', 'project', 'rookie', 'growth', 'dream', 'sincere', 'warm', 'heal']
    },
    
    // 12. 《射雕英雄传》- 武侠经典
    guoJing: {
        name: 'Guo Jing',
        zh: '郭靖',
        drama: 'The Legend of the Condor Heroes',
        dramaZh: '射雕英雄传',
        type: 'wuxia',
        identity: '大侠',
        traits: ['honest', 'loyal', 'diligent', 'righteous', 'patriotic'],
        keywords: ['hero', 'martial', 'arts', 'practice', 'diligent', 'honest', 'loyal', 'righteous', 'nation', 'protect', 'kungfu', 'perseverance', 'simple']
    },
    
    // 13. 《藏海传》- 古装权谋悬疑
    zangHai: {
        name: 'Zang Hai',
        zh: '藏海',
        drama: 'The Hidden Sea',
        dramaZh: '藏海传',
        type: 'intrigue-suspense',
        identity: '钦天监监正、幕僚',
        traits: ['clever', 'strategic', 'patient', 'loyal', 'cute'],
        keywords: ['adviser', 'strategist', 'revenge', 'intrigue', 'clever', 'patient', 'hidden', 'secret', 'tunnel', 'plan', 'justice', 'protect']
    },
    
    // 14. 《得闲谨制》- 抗战历史
    moDeXian: {
        name: 'Mo Dexian',
        zh: '莫得闲',
        drama: 'Defend the Town',
        dramaZh: '得闲谨制',
        type: 'war-history',
        identity: '钳工、普通百姓',
        traits: ['honest', 'brave', 'responsible', 'simple', 'heroic'],
        keywords: ['worker', 'ordinary', 'brave', 'protect', 'family', 'town', 'war', 'resist', 'hero', 'simple', 'wisdom', 'courage']
    },
    
    // 15. 《谍报上不封顶》- 谍战悬疑
    renShaoBai: {
        name: 'Ren Shaobai',
        zh: '任少白',
        drama: 'Spy No Limit',
        dramaZh: '谍报上不封顶',
        type: 'spy',
        identity: '地下党员、情报人员',
        traits: ['calm', 'clever', 'patient', 'loyal', 'brave'],
        keywords: ['spy', 'agent', 'undercover', 'secret', 'intelligence', 'mission', 'danger', 'disguise', 'faith', 'loyal', 'clever', 'patient']
    },
    
    // 16. 《小城良方》- 现代医疗
    liuZhengLiang: {
        name: 'Liu Zhengliang',
        zh: '刘铮亮',
        drama: 'Small City Remedy',
        dramaZh: '小城良方',
        type: 'modern-medical',
        identity: '基层医生',
        traits: ['talented', 'resilient', 'warm', 'dedicated', 'humorous'],
        keywords: ['doctor', 'physician', 'genius', 'grassroots', 'community', 'clinic', 'patient', 'heal', 'treatment', 'warm', 'humor', 'life', 'death']
    }
};

// 根据关键词匹配最合适的角色
function findBestCharacterForWord(word, meaning, partOfSpeech) {
    const wordLower = word.toLowerCase();
    const meaningLower = meaning.toLowerCase();
    
    // 特殊匹配规则 - 基于真实人设和剧情
    const specialMatches = {
        // 医疗相关
        'doctor': ['guWei', 'liuZhengLiang'],
        'surgeon': ['guWei'],
        'physician': ['liuZhengLiang'],
        'hospital': ['guWei'],
        'clinic': ['liuZhengLiang'],
        'patient': ['guWei', 'liuZhengLiang', 'patient5'],
        'heal': ['guWei', 'liuZhengLiang'],
        'surgery': ['guWei'],
        'treatment': ['guWei', 'liuZhengLiang'],
        'medical': ['guWei', 'liuZhengLiang'],
        'genius': ['liuZhengLiang'],
        'grassroots': ['liuZhengLiang'],
        
        // 设计/建筑相关
        'design': ['shengYang'],
        'designer': ['shengYang'],
        'architect': ['shengYang'],
        'building': ['shengYang'],
        'create': ['shengYang'],
        'rookie': ['shengYang'],
        
        // 武术/练习相关
        'practice': ['guoJing', 'tangSan'],
        'martial': ['guoJing'],
        'kungfu': ['guoJing'],
        'diligent': ['guoJing'],
        'perseverance': ['guoJing'],
        'honest': ['guoJing', 'moDeXian'],
        
        // 军事/战斗相关
        'soldier': ['guYiye', 'xiaoChunSheng', 'jiChong'],
        'army': ['guYiye', 'jiChong'],
        'military': ['guYiye'],
        'combat': ['guYiye'],
        'commander': ['jiChong'],
        'arrow': ['jiChong'],
        'eagle': ['jiChong'],
        
        // 间谍/情报相关
        'spy': ['renShaoBai'],
        'agent': ['renShaoBai'],
        'undercover': ['renShaoBai'],
        'intelligence': ['renShaoBai'],
        'secret': ['renShaoBai', 'zangHai'],
        
        // 权谋/策略相关
        'strategist': ['zangHai', 'beiTangMoRan'],
        'adviser': ['zangHai'],
        'clever': ['zangHai', 'renShaoBai', 'weiWuxian'],
        'intrigue': ['zangHai'],
        'revenge': ['zangHai'],
        'tunnel': ['zangHai'], // 藏海爱挖地道!
        
        // 商业/创业相关
        'business': ['xiaoChunSheng'],
        'entrepreneur': ['xiaoChunSheng'],
        'integrity': ['xiaoChunSheng'],
        'brotherhood': ['xiaoChunSheng'],
        
        // 修仙/仙侠相关
        'cultivation': ['weiWuxian'],
        'immortal': ['weiWuxian', 'shiYing'],
        'sword': ['weiWuxian', 'guoJing'],
        'flute': ['weiWuxian'],
        
        // 魂力/修炼相关
        'soul': ['tangSan'],
        'spirit': ['tangSan'],
        
        // 学生/校园相关
        'student': ['fangTianZe'],
        'academy': ['fangTianZe'],
        'society': ['fangTianZe'],
        'president': ['fangTianZe'],
        'zodiac': ['fangTianZe', 'beiTangMoRan'],
        
        // 王子/贵族相关
        'prince': ['shiYing', 'beiTangMoRan'],
        'noble': ['guYiye', 'jiChong'],
        
        // 战争/抗战相关
        'war': ['moDeXian', 'jiChong'],
        'resist': ['moDeXian'],
        'protect': ['moDeXian', 'shiYing', 'weiWuxian'],
        
        // 普通人/英雄相关
        'ordinary': ['moDeXian'],
        'worker': ['moDeXian'],
        'hero': ['guoJing', 'moDeXian'],
        
        // 病人/疾病相关
        'disease': ['patient5'],
        'lonely': ['patient5', 'shiYing'],
        'search': ['patient5'],
        
        // 成长/梦想相关
        'growth': ['shengYang', 'tangSan'],
        'dream': ['shengYang', 'xiaoChunSheng'],
        'warm': ['shengYang', 'liuZhengLiang']
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
        // 中文褒义词
        '优秀', '出色', '杰出', '卓越', '完美', '精彩', '美好', '善良', '真诚', '勤奋',
        '努力', '帅气', '英俊', '迷人', '优雅', '才华', '天赋', '专业', '敬业'
    ];
    
    return positiveKeywords.some(keyword => 
        wordLower.includes(keyword) || 
        meaningLower.includes(keyword) ||
        keyword.includes(wordLower)
    );
}

// 导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        xzCharacterDatabase,
        findBestCharacterForWord,
        isPositiveWord
    };
}
