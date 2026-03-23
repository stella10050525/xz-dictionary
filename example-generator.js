// 优化后的肖战主题例句生成逻辑
// 基于词义、词性和角色特征生成合理的例句

// 导入角色数据库（如果在浏览器环境中，需要先加载 character-database.js）

// 生成肖战主题例句 - 优化版
function generateXZExampleOptimized(word, meaning, partOfSpeech) {
    // 1. 优先使用预定义例句
    if (typeof xzExamples !== 'undefined' && xzExamples[word.toLowerCase()]) {
        return xzExamples[word.toLowerCase()];
    }
    
    // 2. 判断是否为褒义词
    const isPositive = isPositiveWord(word, meaning, partOfSpeech);
    
    // 3. 如果是褒义词，围绕肖战本人；否则选择合适的角色
    let useXiaoZhan = isPositive;
    let character = null;
    
    if (!useXiaoZhan) {
        character = findBestCharacterForWord(word, meaning, partOfSpeech);
    }
    
    // 4. 根据词性生成例句
    const pos = (partOfSpeech || '').toLowerCase();
    
    return generateSentenceByPOS(word, meaning, pos, useXiaoZhan, character);
}

// 根据词性生成例句
function generateSentenceByPOS(word, meaning, pos, useXiaoZhan, character) {
    // 判断词汇难度级别（简单估算）
    const difficulty = estimateDifficulty(word, meaning);
    
    if (pos.includes('adj')) {
        return generateAdjectiveSentence(word, meaning, useXiaoZhan, character, difficulty);
    } else if (pos.includes('v')) {
        return generateVerbSentence(word, meaning, useXiaoZhan, character, difficulty);
    } else if (pos.includes('n')) {
        return generateNounSentence(word, meaning, useXiaoZhan, character, difficulty);
    } else if (pos.includes('adv')) {
        return generateAdverbSentence(word, meaning, useXiaoZhan, character, difficulty);
    } else {
        return generateGenericSentence(word, meaning, useXiaoZhan, character);
    }
}

// 估算词汇难度（简单/中等/高级）
function estimateDifficulty(word, meaning) {
    const length = word.length;
    
    // 基础词汇：短且常见
    const basicWords = ['do', 'go', 'get', 'make', 'take', 'come', 'see', 'know', 'think', 'look', 'want', 'give', 'use', 'find', 'tell', 'ask', 'work', 'feel', 'try', 'leave', 'put', 'mean', 'keep', 'let', 'begin', 'show', 'hear', 'play', 'run', 'move', 'live', 'believe', 'bring', 'happen', 'write', 'sit', 'stand', 'lose', 'pay', 'meet', 'include', 'continue', 'set', 'learn', 'change', 'lead', 'understand', 'watch', 'follow', 'stop', 'create', 'speak', 'read', 'spend', 'grow', 'open', 'walk', 'win', 'teach', 'offer', 'remember', 'love', 'consider'];
    
    if (basicWords.includes(word.toLowerCase()) || length <= 5) {
        return 'basic'; // 小学初中水平
    } else if (length <= 8) {
        return 'intermediate'; // 高中水平
    } else {
        return 'advanced'; // 大学及以上
    }
}

// 形容词例句生成
function generateAdjectiveSentence(word, meaning, useXiaoZhan, character, difficulty) {
    if (useXiaoZhan) {
        // 褒义词：围绕肖战本人
        const templates = {
            basic: [
                { en: `Xiao Zhan is ${word}.`, zh: `肖战很${meaning}。` },
                { en: `Xiao Zhan looks ${word}.`, zh: `肖战看起来很${meaning}。` },
                { en: `Everyone thinks Xiao Zhan is ${word}.`, zh: `大家都觉得肖战很${meaning}。` }
            ],
            intermediate: [
                { en: `Xiao Zhan is known for being ${word}.`, zh: `肖战以${meaning}而闻名。` },
                { en: `Fans admire how ${word} Xiao Zhan is.`, zh: `粉丝们钦佩肖战的${meaning}。` },
                { en: `Xiao Zhan's ${word} personality attracts many people.`, zh: `肖战${meaning}的性格吸引了很多人。` }
            ],
            advanced: [
                { en: `Xiao Zhan's ${word} demeanor has earned him respect throughout the industry.`, zh: `肖战${meaning}的风度为他赢得了业内的尊重。` },
                { en: `Critics consistently praise Xiao Zhan for being remarkably ${word}.`, zh: `评论家们一致称赞肖战非常${meaning}。` },
                { en: `The ${word} nature of Xiao Zhan's work ethic inspires his colleagues.`, zh: `肖战工作态度的${meaning}激励着他的同事们。` }
            ]
        };
        return randomChoice(templates[difficulty]);
    } else {
        // 其他词汇：围绕角色
        const templates = {
            basic: [
                { en: `${character.name} is ${word}.`, zh: `${character.zh}很${meaning}。` },
                { en: `${character.name} looks ${word}.`, zh: `${character.zh}看起来${meaning}。` },
                { en: `The ${word} ${character.name} is loved by fans.`, zh: `${meaning}的${character.zh}深受粉丝喜爱。` }
            ],
            intermediate: [
                { en: `${character.name} becomes more ${word} as the story unfolds.`, zh: `随着故事发展,${character.zh}变得更加${meaning}。` },
                { en: `In ${character.drama}, ${character.name} is portrayed as ${word}.`, zh: `在《${character.dramaZh}》中,${character.zh}被塑造得${meaning}。` },
                { en: `The ${word} personality of ${character.name} drives the plot forward.`, zh: `${character.zh}${meaning}的性格推动了剧情发展。` }
            ],
            advanced: [
                { en: `${character.name}'s ${word} character serves as a compelling contrast to the surrounding chaos.`, zh: `${character.zh}${meaning}的性格与周围的混乱形成了鲜明对比。` },
                { en: `The director emphasizes ${character.name}'s ${word} qualities throughout ${character.drama}.`, zh: `导演在《${character.dramaZh}》中始终强调${character.zh}的${meaning}特质。` },
                { en: `${character.name} embodies a ${word} spirit that resonates with the audience.`, zh: `${character.zh}体现了一种${meaning}的精神,引起了观众的共鸣。` }
            ]
        };
        return randomChoice(templates[difficulty]);
    }
}

// 动词例句生成
function generateVerbSentence(word, meaning, useXiaoZhan, character, difficulty) {
    if (useXiaoZhan) {
        const templates = {
            basic: [
                { en: `Xiao Zhan can ${word} well.`, zh: `肖战能很好地${meaning}。` },
                { en: `Xiao Zhan loves to ${word}.`, zh: `肖战喜欢${meaning}。` },
                { en: `Xiao Zhan often ${word}s for his roles.`, zh: `肖战经常为角色${meaning}。` }
            ],
            intermediate: [
                { en: `Xiao Zhan works hard to ${word} every character perfectly.`, zh: `肖战努力完美地${meaning}每个角色。` },
                { en: `Before filming, Xiao Zhan would ${word} to prepare for the role.`, zh: `拍摄前,肖战会${meaning}来准备角色。` },
                { en: `Fans love watching Xiao Zhan ${word} with such dedication.`, zh: `粉丝们喜欢看肖战如此专注地${meaning}。` }
            ],
            advanced: [
                { en: `Xiao Zhan's ability to ${word} with authenticity distinguishes him from his peers.`, zh: `肖战真实地${meaning}的能力使他从同行中脱颖而出。` },
                { en: `Throughout his career, Xiao Zhan has consistently demonstrated his capacity to ${word} beyond expectations.`, zh: `在整个职业生涯中,肖战始终展现出超越期待的${meaning}能力。` },
                { en: `Critics acknowledge Xiao Zhan's remarkable talent to ${word} with both subtlety and power.`, zh: `评论家们认可肖战以细腻而有力的方式${meaning}的非凡才华。` }
            ]
        };
        return randomChoice(templates[difficulty]);
    } else {
        const templates = {
            basic: [
                { en: `${character.name} needs to ${word}.`, zh: `${character.zh}需要${meaning}。` },
                { en: `${character.name} can ${word} very well.`, zh: `${character.zh}能很好地${meaning}。` },
                { en: `${character.name} must ${word} to complete the mission.`, zh: `${character.zh}必须${meaning}才能完成任务。` }
            ],
            intermediate: [
                { en: `${character.name} learns to ${word} throughout ${character.drama}.`, zh: `${character.zh}在《${character.dramaZh}》中学会了${meaning}。` },
                { en: `In order to succeed, ${character.name} must ${word} despite the challenges.`, zh: `为了成功,${character.zh}必须克服挑战来${meaning}。` },
                { en: `${character.name}'s decision to ${word} changes everything in the story.`, zh: `${character.zh}决定${meaning}改变了故事的一切。` }
            ],
            advanced: [
                { en: `${character.name}'s determination to ${word} against all odds becomes the central theme of ${character.drama}.`, zh: `${character.zh}不顾一切${meaning}的决心成为《${character.dramaZh}》的核心主题。` },
                { en: `Throughout the narrative, ${character.name} struggles to ${word} while maintaining personal integrity.`, zh: `在整个故事中,${character.zh}努力在${meaning}的同时保持个人操守。` },
                { en: `The way ${character.name} chooses to ${word} reveals the depth of the character's complexity.`, zh: `${character.zh}选择${meaning}的方式揭示了这个角色的深度和复杂性。` }
            ]
        };
        return randomChoice(templates[difficulty]);
    }
}

// 名词例句生成
function generateNounSentence(word, meaning, useXiaoZhan, character, difficulty) {
    if (useXiaoZhan) {
        const templates = {
            basic: [
                { en: `Xiao Zhan has ${word}.`, zh: `肖战有${meaning}。` },
                { en: `Xiao Zhan shows ${word}.`, zh: `肖战展现出${meaning}。` },
                { en: `Everyone admires Xiao Zhan's ${word}.`, zh: `大家都欣赏肖战的${meaning}。` }
            ],
            intermediate: [
                { en: `Xiao Zhan's ${word} is evident in his work.`, zh: `肖战的${meaning}在他的工作中显而易见。` },
                { en: `Fans appreciate the ${word} that Xiao Zhan brings to every project.`, zh: `粉丝们欣赏肖战为每个项目带来的${meaning}。` },
                { en: `The ${word} of Xiao Zhan inspires many young actors.`, zh: `肖战的${meaning}激励着许多年轻演员。` }
            ],
            advanced: [
                { en: `Xiao Zhan's unwavering ${word} has become a defining characteristic of his professional identity.`, zh: `肖战坚定的${meaning}已成为他职业身份的标志性特征。` },
                { en: `The industry recognizes Xiao Zhan's ${word} as a testament to his dedication and talent.`, zh: `业内认可肖战的${meaning}是他奉献精神和才华的证明。` },
                { en: `Through years of hard work, Xiao Zhan has cultivated a ${word} that sets him apart.`, zh: `经过多年的努力,肖战培养出了使他与众不同的${meaning}。` }
            ]
        };
        return randomChoice(templates[difficulty]);
    } else {
        const templates = {
            basic: [
                { en: `${character.name} has ${word}.`, zh: `${character.zh}有${meaning}。` },
                { en: `The ${word} of ${character.name} is important.`, zh: `${character.zh}的${meaning}很重要。` },
                { en: `${character.name}'s ${word} helps in the story.`, zh: `${character.zh}的${meaning}在故事中起到帮助。` }
            ],
            intermediate: [
                { en: `${character.name}'s ${word} plays a crucial role in ${character.drama}.`, zh: `${character.zh}的${meaning}在《${character.dramaZh}》中起着关键作用。` },
                { en: `The ${word} that ${character.name} possesses becomes a turning point.`, zh: `${character.zh}拥有的${meaning}成为了转折点。` },
                { en: `${character.name} relies on ${word} to overcome obstacles.`, zh: `${character.zh}依靠${meaning}来克服障碍。` }
            ],
            advanced: [
                { en: `${character.name}'s journey revolves around discovering the true meaning of ${word}.`, zh: `${character.zh}的旅程围绕着发现${meaning}的真正含义展开。` },
                { en: `The ${word} that defines ${character.name} emerges as a central motif throughout ${character.drama}.`, zh: `定义${character.zh}的${meaning}成为贯穿《${character.dramaZh}》的核心主题。` },
                { en: `${character.name}'s relationship with ${word} evolves dramatically across the narrative arc.`, zh: `${character.zh}与${meaning}的关系在叙事弧线中发生了戏剧性的变化。` }
            ]
        };
        return randomChoice(templates[difficulty]);
    }
}

// 副词例句生成
function generateAdverbSentence(word, meaning, useXiaoZhan, character, difficulty) {
    if (useXiaoZhan) {
        const templates = {
            basic: [
                { en: `Xiao Zhan works ${word}.`, zh: `肖战${meaning}地工作。` },
                { en: `Xiao Zhan acts ${word}.`, zh: `肖战${meaning}地表演。` },
                { en: `Xiao Zhan ${word} practices his lines.`, zh: `肖战${meaning}地练习台词。` }
            ],
            intermediate: [
                { en: `Xiao Zhan ${word} prepares for each role he takes on.`, zh: `肖战${meaning}地为每个角色做准备。` },
                { en: `Fans admire how ${word} Xiao Zhan approaches his craft.`, zh: `粉丝们欣赏肖战如此${meaning}地对待演艺事业。` },
                { en: `Xiao Zhan ${word} dedicates himself to perfecting every detail.`, zh: `肖战${meaning}地致力于完善每个细节。` }
            ],
            advanced: [
                { en: `Xiao Zhan ${word} immerses himself in character research, demonstrating exceptional professionalism.`, zh: `肖战${meaning}地沉浸在角色研究中,展现出非凡的专业精神。` },
                { en: `Throughout his career, Xiao Zhan has ${word} maintained the highest standards of artistic excellence.`, zh: `在整个职业生涯中,肖战${meaning}地保持着最高的艺术水准。` },
                { en: `Xiao Zhan ${word} balances commercial success with artistic integrity, a rare achievement.`, zh: `肖战${meaning}地平衡商业成功与艺术操守,这是难得的成就。` }
            ]
        };
        return randomChoice(templates[difficulty]);
    } else {
        const templates = {
            basic: [
                { en: `${character.name} acts ${word}.`, zh: `${character.zh}${meaning}地行动。` },
                { en: `${character.name} ${word} works hard.`, zh: `${character.zh}${meaning}地努力工作。` },
                { en: `${character.name} moves ${word}.`, zh: `${character.zh}${meaning}地移动。` }
            ],
            intermediate: [
                { en: `${character.name} ${word} approaches every challenge in ${character.drama}.`, zh: `${character.zh}${meaning}地面对《${character.dramaZh}》中的每个挑战。` },
                { en: `In the story, ${character.name} ${word} pursues the truth.`, zh: `在故事中,${character.zh}${meaning}地追寻真相。` },
                { en: `${character.name} ${word} transforms throughout the narrative.`, zh: `${character.zh}在叙事过程中${meaning}地转变。` }
            ],
            advanced: [
                { en: `${character.name} ${word} navigates the complex moral landscape of ${character.drama}.`, zh: `${character.zh}${meaning}地在《${character.dramaZh}》复杂的道德环境中穿行。` },
                { en: `Throughout the series, ${character.name} ${word} evolves from a simple character into a nuanced protagonist.`, zh: `在整个系列中,${character.zh}${meaning}地从简单角色演变为细腻的主角。` },
                { en: `${character.name} ${word} balances duty and personal desire, creating compelling dramatic tension.`, zh: `${character.zh}${meaning}地平衡责任与个人欲望,创造出引人入胜的戏剧张力。` }
            ]
        };
        return randomChoice(templates[difficulty]);
    }
}

// 通用例句生成（词性不明确时）
function generateGenericSentence(word, meaning, useXiaoZhan, character) {
    if (useXiaoZhan) {
        const templates = [
            { en: `${word} and Xiao Zhan - a perfect match.`, zh: `${meaning}与肖战——完美的搭配。` },
            { en: `Xiao Zhan represents ${word} in many ways.`, zh: `肖战在许多方面代表着${meaning}。` },
            { en: `When I think of ${word}, I think of Xiao Zhan.`, zh: `想到${meaning},我就会想到肖战。` }
        ];
        return randomChoice(templates);
    } else {
        const templates = [
            { en: `${character.name} and ${word} - connected in ${character.drama}.`, zh: `${character.zh}与${meaning}——在《${character.dramaZh}》中紧密相连。` },
            { en: `The concept of ${word} is central to ${character.name}'s journey.`, zh: `${meaning}的概念是${character.zh}旅程的核心。` },
            { en: `${character.name} embodies ${word} throughout the story.`, zh: `${character.zh}在整个故事中体现了${meaning}。` }
        ];
        return randomChoice(templates);
    }
}

// 随机选择模板
function randomChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// 向后兼容：保持原函数名
function generateXZExample(word, meaning, partOfSpeech) {
    return generateXZExampleOptimized(word, meaning, partOfSpeech);
}
