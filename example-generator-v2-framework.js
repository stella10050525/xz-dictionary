// 例句生成核心原则 - 词典优先版本
// 第一原则：这是一本词典，例句必须符合词典标准
// 第二原则：自然融入肖战/角色信息，但不破坏例句质量

/* 
核心设计理念：
1. 词典例句的本质是展示词汇的**用法**，而非炫耀人名
2. 例句必须逻辑自洽、符合真实语境
3. 角色/剧情的融入应该是**顺理成章**的，而非硬套
4. 宁可简单正确，不要复杂错误
*/

// ========== 例句质量检查清单 ==========
// ✓ 语法是否正确？
// ✓ 逻辑是否通顺？
// ✓ 是否展示了词的正确用法？
// ✓ 中英文表达是否自然？
// ✓ 角色使用是否合理？（角色的身份/行为是否匹配词义）

// ========== 核心生成函数 - 重构版 ==========

function generateXZExampleOptimized(word, meaning, partOfSpeech) {
    // 1. 优先使用预定义例句（已经验证质量的）
    if (typeof xzExamples !== 'undefined' && xzExamples[word.toLowerCase()]) {
        return xzExamples[word.toLowerCase()];
    }
    
    // 2. 清理释义，提取主要含义
    const cleanedMeaning = cleanMeaning(meaning);
    
    // 3. 判断是否为褒义词
    const isPositive = isPositiveWord(word, cleanedMeaning, partOfSpeech);
    
    // 4. 选择合适的生成策略
    if (isPositive) {
        // 褒义词：围绕肖战本人
        return generatePositiveSentence(word, cleanedMeaning, partOfSpeech);
    } else {
        // 中性/其他词：选择合适角色
        const character = findBestCharacterForWord(word, cleanedMeaning, partOfSpeech);
        return generateCharacterSentence(word, cleanedMeaning, partOfSpeech, character);
    }
}

// ========== 褒义词例句生成（肖战本人）==========
function generatePositiveSentence(word, meaning, pos) {
    const difficulty = estimateDifficulty(word, meaning);
    const posType = identifyPOS(pos);
    
    // 根据词性和难度选择合适的句型
    return generateByPOSAndDifficulty(word, meaning, posType, difficulty, true);
}

// ========== 角色例句生成 ==========
function generateCharacterSentence(word, meaning, pos, character) {
    const difficulty = estimateDifficulty(word, meaning);
    const posType = identifyPOS(pos);
    
    // 关键：检查角色是否适合这个词
    // 例如：如果词是"doctor"，角色应该是医生或与医疗相关
    const isCharacterSuitable = checkCharacterSuitability(word, meaning, character);
    
    if (!isCharacterSuitable) {
        // 如果角色不合适，使用通用句型
        return generateGenericSentence(word, meaning, posType, difficulty);
    }
    
    return generateByPOSAndDifficulty(word, meaning, posType, difficulty, false, character);
}

// ========== 检查角色适用性 ==========
function checkCharacterSuitability(word, meaning, character) {
    const wordLower = word.toLowerCase();
    const meaningLower = meaning.toLowerCase();
    
    // 检查逻辑：
    // 1. 如果词是职业，角色应该是这个职业
    // 2. 如果词是动作，角色应该能做这个动作
    // 3. 如果词是特质，角色应该具有这个特质
    
    // 职业词汇检查
    const professionWords = {
        'doctor': ['guWei', 'liuZhengLiang'],
        'physician': ['guWei', 'liuZhengLiang'],
        'surgeon': ['guWei'],
        'designer': ['shengYang'],
        'architect': ['shengYang'],
        'soldier': ['guYiye', 'jiChong', 'xiaoChunSheng'],
        'warrior': ['jiChong'],
        'spy': ['renShaoBai'],
        'hero': ['guoJing']
    };
    
    for (const [profession, suitableChars] of Object.entries(professionWords)) {
        if (wordLower.includes(profession) || meaningLower.includes(profession)) {
            return suitableChars.includes(character.name.replace(/\s+/g, '').toLowerCase()) ||
                   suitableChars.some(c => character.identity && character.identity.includes(profession));
        }
    }
    
    // 如果不是职业词，认为角色适合（可以在剧情中使用）
    return true;
}

// ========== 通用句型生成（当角色不适合时）==========
function generateGenericSentence(word, meaning, posType, difficulty) {
    // 这种情况下，我们生成不提及具体人物的通用例句
    // 类似真正的词典例句
    
    const templates = {
        'adj': {
            basic: [
                { en: `The ${word} person is loved by everyone.`, zh: `${meaning}的人受到大家喜爱。` },
                { en: `She feels ${word} today.`, zh: `她今天感觉很${meaning}。` }
            ],
            intermediate: [
                { en: `His ${word} attitude impressed everyone.`, zh: `他${meaning}的态度给所有人留下了深刻印象。` }
            ],
            advanced: [
                { en: `The ${word} nature of his work requires great dedication.`, zh: `他工作的${meaning}性质需要极大的奉献精神。` }
            ]
        },
        'v': {
            basic: [
                { en: `People need to ${word} regularly.`, zh: `人们需要定期${meaning}。` },
                { en: `He learned to ${word} at a young age.`, zh: `他很小就学会了${meaning}。` }
            ]
        },
        'n': {
            basic: [
                { en: `${word.charAt(0).toUpperCase() + word.slice(1)} is important for success.`, zh: `${meaning}对成功很重要。` },
                { en: `Everyone needs ${word} in life.`, zh: `每个人生活中都需要${meaning}。` }
            ]
        }
    };
    
    const diffTemplates = templates[posType]?.[difficulty] || templates[posType]?.basic || [];
    if (diffTemplates.length > 0) {
        return randomChoice(diffTemplates);
    }
    
    // 最后的兜底
    return {
        en: `This is an example of ${word}.`,
        zh: `这是${meaning}的一个例子。`
    };
}

// ========== 识别词性类型 ==========
function identifyPOS(pos) {
    if (!pos) return 'unknown';
    const posLower = pos.toLowerCase();
    
    if (posLower.includes('adj')) return 'adj';
    if (posLower.includes('v')) return 'v';
    if (posLower.includes('n')) return 'n';
    if (posLower.includes('adv')) return 'adv';
    
    return 'unknown';
}

// ========== 按词性和难度生成 ==========
function generateByPOSAndDifficulty(word, meaning, posType, difficulty, useXiaoZhan, character) {
    // 这个函数会在第二阶段详细实现
    // 现在先返回一个基础模板
    
    if (useXiaoZhan) {
        // 肖战本人的例句
        if (posType === 'adj') {
            return {
                en: `Xiao Zhan is ${word}.`,
                zh: `肖战很${meaning}。`
            };
        } else if (posType === 'v') {
            return {
                en: `Xiao Zhan ${word}s with dedication.`,
                zh: `肖战用心地${meaning}。`
            };
        } else if (posType === 'n') {
            return {
                en: `Xiao Zhan shows great ${word}.`,
                zh: `肖战展现出极大的${meaning}。`
            };
        }
    } else if (character) {
        // 角色的例句 - 确保逻辑正确
        if (posType === 'adj') {
            return {
                en: `${character.name} is ${word}.`,
                zh: `${character.zh}很${meaning}。`
            };
        } else if (posType === 'v') {
            return {
                en: `${character.name} ${word}s in ${character.drama}.`,
                zh: `${character.zh}在《${character.dramaZh}》中${meaning}。`
            };
        } else if (posType === 'n') {
            return {
                en: `${character.name} has ${word}.`,
                zh: `${character.zh}有${meaning}。`
            };
        }
    }
    
    // 兜底
    return generateGenericSentence(word, meaning, posType, difficulty);
}

// ========== 工具函数 ==========
function randomChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// 向后兼容
function generateXZExample(word, meaning, partOfSpeech) {
    return generateXZExampleOptimized(word, meaning, partOfSpeech);
}

/* 
========== 第二阶段待完成 ==========
1. 完善 generateByPOSAndDifficulty 函数
2. 为每个词性和难度设计3-5个高质量模板
3. 确保每个模板都符合词典标准
4. 测试所有模板的逻辑正确性

设计原则：
- 形容词：人物**是**或**具有**这个特质
- 动词：人物**做**这个动作（符合其身份/剧情）
- 名词：人物**拥有**/**展现**这个事物/概念
- 副词：人物以这种**方式**做某事

每个模板必须经过检查：
✓ 逻辑自洽？
✓ 符合中英文习惯？
✓ 角色使用合理？
✓ 展示词的正确用法？
*/
