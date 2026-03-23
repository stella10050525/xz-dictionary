// 例句生成器 - 完整版 V2
// 词典标准 + 肖战主题

// 导入依赖（在浏览器环境中已通过script标签加载）
// character-database.js: 角色数据库
// example-templates.js: 例句模板库

// ========== 清理释义 ==========
function cleanMeaning(meaning) {
    if (!meaning) return '';
    
    let cleaned = meaning.trim();
    
    // 如果有分号，只取第一个释义
    if (cleaned.includes(';')) {
        cleaned = cleaned.split(';')[0].trim();
    }
    
    // 如果有顿号，只取第一个释义
    if (cleaned.includes('、')) {
        cleaned = cleaned.split('、')[0].trim();
    }
    
    // 如果有逗号，只取第一个释义
    if (cleaned.includes(',')) {
        const parts = cleaned.split(',');
        // 排除固定搭配形式（如"v. 做,进行"）
        if (parts.length === 2 && parts[0].length <= 3 && parts[1].length <= 3) {
            return cleaned; // 保留固定搭配
        }
        cleaned = parts[0].trim();
    }
    
    return cleaned;
}

// ========== 估算难度 ==========
function estimateDifficulty(word, meaning) {
    const length = word.length;
    
    // 基础词汇列表（常见高频词）
    const basicWords = ['do', 'go', 'get', 'make', 'take', 'come', 'see', 'know', 'think', 'look', 'want', 'give', 'use', 'find', 'tell', 'ask', 'work', 'feel', 'try', 'leave', 'put', 'mean', 'keep', 'let', 'begin', 'show', 'hear', 'play', 'run', 'move', 'live', 'believe', 'bring', 'happen', 'write', 'sit', 'stand', 'lose', 'pay', 'meet', 'include', 'continue', 'set', 'learn', 'change', 'lead', 'understand', 'watch', 'follow', 'stop', 'create', 'speak', 'read', 'spend', 'grow', 'open', 'walk', 'win', 'teach', 'offer', 'remember', 'love', 'consider', 'good', 'new', 'old', 'great', 'high', 'small', 'large', 'long', 'little', 'own', 'other', 'right', 'big', 'different', 'public', 'bad', 'early', 'able', 'young', 'important', 'sure', 'free', 'real', 'human'];
    
    if (basicWords.includes(word.toLowerCase()) || length <= 5) {
        return 'basic';
    } else if (length <= 8) {
        return 'intermediate';
    } else {
        return 'advanced';
    }
}

// ========== 识别词性 ==========
function identifyPOS(pos) {
    if (!pos) return 'unknown';
    const posLower = pos.toLowerCase();
    
    if (posLower.includes('adj')) return 'adj';
    if (posLower.includes('v')) return 'v';
    if (posLower.includes('n')) return 'n';
    if (posLower.includes('adv')) return 'adv';
    
    return 'unknown';
}

// ========== 检查角色适用性 ==========
function checkCharacterSuitability(word, meaning, character) {
    const wordLower = word.toLowerCase();
    const meaningLower = meaning.toLowerCase();
    
    // 职业词汇必须严格匹配
    const professionCheck = {
        'doctor': (char) => char.identity && (char.identity.includes('医生') || char.identity.includes('doctor')),
        'physician': (char) => char.identity && (char.identity.includes('医生') || char.identity.includes('doctor')),
        'surgeon': (char) => char.identity && char.identity.includes('外科医生'),
        'designer': (char) => char.identity && char.identity.includes('设计师'),
        'architect': (char) => char.identity && char.identity.includes('设计师'),
        'soldier': (char) => char.identity && char.identity.includes('军人'),
        'warrior': (char) => char.identity && (char.identity.includes('将') || char.identity.includes('士')),
        'spy': (char) => char.identity && (char.identity.includes('间谍') || char.identity.includes('地下')),
        'chef': (char) => char.identity && char.identity.includes('厨'),
        'student': (char) => char.identity && char.identity.includes('学生')
    };
    
    for (const [profession, checkFn] of Object.entries(professionCheck)) {
        if (wordLower.includes(profession) || meaningLower.includes(profession)) {
            return checkFn(character);
        }
    }
    
    // 其他词汇：角色可以在剧情中使用
    return true;
}

// ========== 主生成函数 ==========
function generateXZExampleOptimized(word, meaning, partOfSpeech) {
    // 1. 优先使用预定义例句
    if (typeof xzExamples !== 'undefined' && xzExamples[word.toLowerCase()]) {
        return xzExamples[word.toLowerCase()];
    }
    
    // 2. 清理释义
    const cleanedMeaning = cleanMeaning(meaning);
    
    // 3. 判断褒义词
    const isPositive = isPositiveWord(word, cleanedMeaning, partOfSpeech);
    
    // 4. 估算难度和识别词性
    const difficulty = estimateDifficulty(word, cleanedMeaning);
    const posType = identifyPOS(partOfSpeech);
    
    let result = null;
    
    if (isPositive) {
        // 褒义词：使用肖战本人
        const template = selectTemplate(posType, difficulty, true, null);
        if (template) {
            result = applyTemplate(template, word, cleanedMeaning, null);
        }
    } else {
        // 中性词：选择合适角色
        const character = findBestCharacterForWord(word, cleanedMeaning, partOfSpeech);
        
        // 检查角色适用性
        const suitable = checkCharacterSuitability(word, cleanedMeaning, character);
        
        if (suitable) {
            const template = selectTemplate(posType, difficulty, false, character);
            if (template) {
                result = applyTemplate(template, word, cleanedMeaning, character);
            }
        } else {
            // 角色不适合，使用通用例句
            result = generateGenericSentence(word, cleanedMeaning, posType, difficulty);
        }
    }
    
    // 兜底
    if (!result) {
        result = generateFallbackSentence(word, cleanedMeaning, posType);
    }
    
    return result;
}

// ========== 通用例句（角色不适合时）==========
function generateGenericSentence(word, meaning, posType, difficulty) {
    const generic = {
        'adj': {
            basic: [
                { en: `A ${word} person is loved by everyone.`, zh: `${meaning}的人受到大家喜爱。` },
                { en: `She feels ${word} today.`, zh: `她今天感觉很${meaning}。` },
                { en: `The ${word} smile is unforgettable.`, zh: `${meaning}的笑容令人难忘。` }
            ],
            intermediate: [
                { en: `His ${word} attitude impressed everyone.`, zh: `他${meaning}的态度给所有人留下深刻印象。` },
                { en: `People admire those who are ${word}.`, zh: `人们欣赏${meaning}的人。` }
            ]
        },
        'v': {
            basic: [
                { en: `People need to ${word} regularly.`, zh: `人们需要定期${meaning}。` },
                { en: `He learned to ${word} at a young age.`, zh: `他很小就学会了${meaning}。` },
                { en: `Everyone should ${word}.`, zh: `每个人都应该${meaning}。` }
            ],
            intermediate: [
                { en: `It's important to ${word} consistently.`, zh: `持续${meaning}很重要。` }
            ]
        },
        'n': {
            basic: [
                { en: `${word.charAt(0).toUpperCase() + word.slice(1)} is important for success.`, zh: `${meaning}对成功很重要。` },
                { en: `Everyone needs ${word} in life.`, zh: `每个人生活中都需要${meaning}。` },
                { en: `This shows great ${word}.`, zh: `这展现出极大的${meaning}。` }
            ],
            intermediate: [
                { en: `The ${word} in this story is inspiring.`, zh: `这个故事中的${meaning}很鼓舞人心。` }
            ]
        },
        'adv': {
            basic: [
                { en: `He works ${word}.`, zh: `他${meaning}地工作。` },
                { en: `She speaks ${word}.`, zh: `她${meaning}地说话。` }
            ]
        }
    };
    
    const templates = generic[posType]?.[difficulty] || generic[posType]?.basic || [];
    if (templates.length > 0) {
        return templates[Math.floor(Math.random() * templates.length)];
    }
    
    return null;
}

// ========== 最终兜底例句 ==========
function generateFallbackSentence(word, meaning, posType) {
    // 最简单但保证正确的例句
    if (posType === 'adj') {
        return {
            en: `This is ${word}.`,
            zh: `这很${meaning}。`
        };
    } else if (posType === 'v') {
        return {
            en: `People ${word}.`,
            zh: `人们${meaning}。`
        };
    } else if (posType === 'n') {
        return {
            en: `This is ${word}.`,
            zh: `这是${meaning}。`
        };
    } else if (posType === 'adv') {
        return {
            en: `He acts ${word}.`,
            zh: `他${meaning}地行动。`
        };
    }
    
    return {
        en: `This is an example of ${word}.`,
        zh: `这是${meaning}的一个例子。`
    };
}

// ========== 向后兼容 ==========
function generateXZExample(word, meaning, partOfSpeech) {
    return generateXZExampleOptimized(word, meaning, partOfSpeech);
}

// ========== 工具函数 ==========
function randomChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
}
