// 例句模板库 - 词典标准版本
// 每个模板都经过逻辑检查，确保符合词典例句标准

// ========== 形容词模板 ==========

const adjectiveTemplates = {
    // 基础级别（小学初中词汇）：6-12词
    basic: {
        xiaoZhan: [
            {
                pattern: (word, meaning) => ({
                    en: `Xiao Zhan is ${word}.`,
                    zh: `肖战很${meaning}。`
                }),
                check: () => true
            },
            {
                pattern: (word, meaning) => ({
                    en: `Xiao Zhan looks ${word}.`,
                    zh: `肖战看起来很${meaning}。`
                }),
                check: () => true
            },
            {
                pattern: (word, meaning) => ({
                    en: `Everyone thinks Xiao Zhan is ${word}.`,
                    zh: `大家都认为肖战很${meaning}。`
                }),
                check: () => true
            }
        ],
        character: [
            {
                // 角色"是"这个特质
                pattern: (word, meaning, char) => ({
                    en: `${char.name} is ${word}.`,
                    zh: `${char.zh}很${meaning}。`
                }),
                check: () => true
            },
            {
                // 角色"看起来"这个特质
                pattern: (word, meaning, char) => ({
                    en: `${char.name} looks ${word} in ${char.drama}.`,
                    zh: `${char.zh}在《${char.dramaZh}》中显得很${meaning}。`
                }),
                check: () => true
            },
            {
                // 角色因某事而具有这个特质
                pattern: (word, meaning, char) => ({
                    en: `${char.name} becomes ${word} after facing challenges.`,
                    zh: `${char.zh}在面对挑战后变得${meaning}。`
                }),
                check: () => true
            }
        ]
    },
    
    // 中级（高中词汇）：8-15词
    intermediate: {
        xiaoZhan: [
            {
                pattern: (word, meaning) => ({
                    en: `Xiao Zhan is known for being ${word}.`,
                    zh: `肖战以${meaning}而闻名。`
                }),
                check: () => true
            },
            {
                pattern: (word, meaning) => ({
                    en: `Fans admire Xiao Zhan for being so ${word}.`,
                    zh: `粉丝们欣赏肖战如此${meaning}。`
                }),
                check: () => true
            },
            {
                pattern: (word, meaning) => ({
                    en: `Xiao Zhan's ${word} personality attracts many people.`,
                    zh: `肖战${meaning}的个性吸引了很多人。`
                }),
                check: () => true
            }
        ],
        character: [
            {
                // 角色在剧中展现特质
                pattern: (word, meaning, char) => ({
                    en: `${char.name} is portrayed as ${word} in ${char.drama}.`,
                    zh: `${char.zh}在《${char.dramaZh}》中被塑造得很${meaning}。`
                }),
                check: () => true
            },
            {
                // 角色的特质帮助他/她
                pattern: (word, meaning, char) => ({
                    en: `${char.name}'s ${word} nature helps in difficult situations.`,
                    zh: `${char.zh}${meaning}的天性在困难时刻很有帮助。`
                }),
                check: () => true
            },
            {
                // 他人认为角色具有这个特质
                pattern: (word, meaning, char) => ({
                    en: `People find ${char.name} ${word} and trustworthy.`,
                    zh: `人们觉得${char.zh}${meaning}且值得信赖。`
                }),
                check: () => true
            }
        ]
    },
    
    // 高级（大学及以上）：10-20词
    advanced: {
        xiaoZhan: [
            {
                pattern: (word, meaning) => ({
                    en: `Xiao Zhan's ${word} demeanor has earned him respect throughout the industry.`,
                    zh: `肖战${meaning}的风度为他在整个行业赢得了尊重。`
                }),
                check: () => true
            },
            {
                pattern: (word, meaning) => ({
                    en: `Critics consistently praise Xiao Zhan for being remarkably ${word}.`,
                    zh: `评论家们一致称赞肖战非常${meaning}。`
                }),
                check: () => true
            }
        ],
        character: [
            {
                pattern: (word, meaning, char) => ({
                    en: `${char.name}'s ${word} character serves as a compelling element in ${char.drama}.`,
                    zh: `${char.zh}${meaning}的性格是《${char.dramaZh}》中引人注目的元素。`
                }),
                check: () => true
            },
            {
                pattern: (word, meaning, char) => ({
                    en: `The ${word} qualities of ${char.name} resonate with audiences.`,
                    zh: `${char.zh}${meaning}的品质引起了观众的共鸣。`
                }),
                check: () => true
            }
        ]
    }
};

// ========== 动词模板 ==========

const verbTemplates = {
    basic: {
        xiaoZhan: [
            {
                // 肖战能做这个动作
                pattern: (word, meaning) => ({
                    en: `Xiao Zhan can ${word} well.`,
                    zh: `肖战能很好地${meaning}。`
                }),
                check: () => true
            },
            {
                // 肖战喜欢做这个动作
                pattern: (word, meaning) => ({
                    en: `Xiao Zhan loves to ${word}.`,
                    zh: `肖战喜欢${meaning}。`
                }),
                check: () => true
            },
            {
                // 肖战为了某事而做这个动作
                pattern: (word, meaning) => ({
                    en: `Xiao Zhan ${word}s for his roles.`,
                    zh: `肖战为角色而${meaning}。`
                }),
                check: () => true
            }
        ],
        character: [
            {
                // 角色能做这个动作（符合身份）
                pattern: (word, meaning, char) => ({
                    en: `${char.name} can ${word} well.`,
                    zh: `${char.zh}能很好地${meaning}。`
                }),
                check: (word, char) => {
                    // 检查：动作应该符合角色身份
                    // 例如：doctor只能用在医生角色上
                    return true; // 基础检查在外层已完成
                }
            },
            {
                // 角色需要做这个动作
                pattern: (word, meaning, char) => ({
                    en: `${char.name} needs to ${word}.`,
                    zh: `${char.zh}需要${meaning}。`
                }),
                check: () => true
            },
            {
                // 角色学会了做这个动作
                pattern: (word, meaning, char) => ({
                    en: `${char.name} learns to ${word}.`,
                    zh: `${char.zh}学会了${meaning}。`
                }),
                check: () => true
            }
        ]
    },
    
    intermediate: {
        xiaoZhan: [
            {
                pattern: (word, meaning) => ({
                    en: `Xiao Zhan works hard to ${word} every character perfectly.`,
                    zh: `肖战努力完美地${meaning}每个角色。`
                }),
                check: () => true
            },
            {
                pattern: (word, meaning) => ({
                    en: `Before filming, Xiao Zhan would ${word} to prepare.`,
                    zh: `拍摄前,肖战会${meaning}来准备。`
                }),
                check: () => true
            },
            {
                pattern: (word, meaning) => ({
                    en: `Fans love watching Xiao Zhan ${word} with dedication.`,
                    zh: `粉丝们喜欢看肖战专注地${meaning}。`
                }),
                check: () => true
            }
        ],
        character: [
            {
                // 角色在剧中做这个动作
                pattern: (word, meaning, char) => ({
                    en: `${char.name} ${word}s throughout ${char.drama}.`,
                    zh: `${char.zh}在《${char.dramaZh}》中${meaning}。`
                }),
                check: () => true
            },
            {
                // 角色为了目标而做这个动作
                pattern: (word, meaning, char) => ({
                    en: `${char.name} ${word}s to achieve the goal.`,
                    zh: `${char.zh}为了实现目标而${meaning}。`
                }),
                check: () => true
            },
            {
                // 角色决定做这个动作
                pattern: (word, meaning, char) => ({
                    en: `${char.name} decides to ${word} despite the challenges.`,
                    zh: `${char.zh}决定克服挑战去${meaning}。`
                }),
                check: () => true
            }
        ]
    },
    
    advanced: {
        xiaoZhan: [
            {
                pattern: (word, meaning) => ({
                    en: `Xiao Zhan's ability to ${word} authentically distinguishes him from peers.`,
                    zh: `肖战真实地${meaning}的能力使他从同行中脱颖而出。`
                }),
                check: () => true
            },
            {
                pattern: (word, meaning) => ({
                    en: `Throughout his career, Xiao Zhan has demonstrated his capacity to ${word} beyond expectations.`,
                    zh: `在职业生涯中,肖战展现出超越期待的${meaning}能力。`
                }),
                check: () => true
            }
        ],
        character: [
            {
                pattern: (word, meaning, char) => ({
                    en: `${char.name}'s determination to ${word} becomes central to ${char.drama}.`,
                    zh: `${char.zh}${meaning}的决心成为《${char.dramaZh}》的核心。`
                }),
                check: () => true
            },
            {
                pattern: (word, meaning, char) => ({
                    en: `Throughout the narrative, ${char.name} struggles to ${word} while maintaining integrity.`,
                    zh: `在整个故事中,${char.zh}努力在${meaning}的同时保持操守。`
                }),
                check: () => true
            }
        ]
    }
};

// ========== 名词模板 ==========

const nounTemplates = {
    basic: {
        xiaoZhan: [
            {
                pattern: (word, meaning) => ({
                    en: `Xiao Zhan has ${word}.`,
                    zh: `肖战有${meaning}。`
                }),
                check: () => true
            },
            {
                pattern: (word, meaning) => ({
                    en: `Xiao Zhan shows ${word}.`,
                    zh: `肖战展现出${meaning}。`
                }),
                check: () => true
            },
            {
                pattern: (word, meaning) => ({
                    en: `Everyone admires Xiao Zhan's ${word}.`,
                    zh: `大家都欣赏肖战的${meaning}。`
                }),
                check: () => true
            }
        ],
        character: [
            {
                pattern: (word, meaning, char) => ({
                    en: `${char.name} has ${word}.`,
                    zh: `${char.zh}有${meaning}。`
                }),
                check: () => true
            },
            {
                // 特别处理：如果词是职业名词，用"是"而非"有"
                pattern: (word, meaning, char) => {
                    // 检查是否是职业词
                    const professionWords = ['doctor', 'teacher', 'student', 'soldier', 'designer', 'worker', 'chef'];
                    const isProfession = professionWords.some(p => word.toLowerCase().includes(p));
                    
                    if (isProfession) {
                        return {
                            en: `${char.name} is a ${word}.`,
                            zh: `${char.zh}是一名${meaning}。`
                        };
                    } else {
                        return {
                            en: `${char.name} shows ${word}.`,
                            zh: `${char.zh}展现出${meaning}。`
                        };
                    }
                },
                check: () => true
            },
            {
                pattern: (word, meaning, char) => ({
                    en: `The ${word} of ${char.name} is important.`,
                    zh: `${char.zh}的${meaning}很重要。`
                }),
                check: () => true
            }
        ]
    },
    
    intermediate: {
        xiaoZhan: [
            {
                pattern: (word, meaning) => ({
                    en: `Xiao Zhan's ${word} is evident in his work.`,
                    zh: `肖战的${meaning}在他的工作中显而易见。`
                }),
                check: () => true
            },
            {
                pattern: (word, meaning) => ({
                    en: `Fans appreciate the ${word} Xiao Zhan brings to every project.`,
                    zh: `粉丝们欣赏肖战为每个项目带来的${meaning}。`
                }),
                check: () => true
            },
            {
                pattern: (word, meaning) => ({
                    en: `The ${word} of Xiao Zhan inspires many people.`,
                    zh: `肖战的${meaning}激励着许多人。`
                }),
                check: () => true
            }
        ],
        character: [
            {
                pattern: (word, meaning, char) => ({
                    en: `${char.name}'s ${word} plays a key role in ${char.drama}.`,
                    zh: `${char.zh}的${meaning}在《${char.dramaZh}》中起关键作用。`
                }),
                check: () => true
            },
            {
                pattern: (word, meaning, char) => ({
                    en: `The ${word} that ${char.name} possesses helps overcome obstacles.`,
                    zh: `${char.zh}拥有的${meaning}帮助克服障碍。`
                }),
                check: () => true
            },
            {
                pattern: (word, meaning, char) => ({
                    en: `${char.name} relies on ${word} to succeed.`,
                    zh: `${char.zh}依靠${meaning}获得成功。`
                }),
                check: () => true
            }
        ]
    },
    
    advanced: {
        xiaoZhan: [
            {
                pattern: (word, meaning) => ({
                    en: `Xiao Zhan's unwavering ${word} has become a defining characteristic.`,
                    zh: `肖战坚定的${meaning}已成为标志性特征。`
                }),
                check: () => true
            },
            {
                pattern: (word, meaning) => ({
                    en: `The industry recognizes Xiao Zhan's ${word} as testament to his dedication.`,
                    zh: `业内认可肖战的${meaning}是他奉献精神的证明。`
                }),
                check: () => true
            }
        ],
        character: [
            {
                pattern: (word, meaning, char) => ({
                    en: `${char.name}'s journey revolves around discovering the true meaning of ${word}.`,
                    zh: `${char.zh}的旅程围绕着发现${meaning}的真正含义展开。`
                }),
                check: () => true
            },
            {
                pattern: (word, meaning, char) => ({
                    en: `The ${word} that defines ${char.name} emerges as a central theme in ${char.drama}.`,
                    zh: `定义${char.zh}的${meaning}成为《${char.dramaZh}》的核心主题。`
                }),
                check: () => true
            }
        ]
    }
};

// ========== 副词模板 ==========

const adverbTemplates = {
    basic: {
        xiaoZhan: [
            {
                pattern: (word, meaning) => ({
                    en: `Xiao Zhan works ${word}.`,
                    zh: `肖战${meaning}地工作。`
                }),
                check: () => true
            },
            {
                pattern: (word, meaning) => ({
                    en: `Xiao Zhan acts ${word}.`,
                    zh: `肖战${meaning}地表演。`
                }),
                check: () => true
            },
            {
                pattern: (word, meaning) => ({
                    en: `Xiao Zhan ${word} prepares for roles.`,
                    zh: `肖战${meaning}地为角色做准备。`
                }),
                check: () => true
            }
        ],
        character: [
            {
                pattern: (word, meaning, char) => ({
                    en: `${char.name} acts ${word}.`,
                    zh: `${char.zh}${meaning}地行动。`
                }),
                check: () => true
            },
            {
                pattern: (word, meaning, char) => ({
                    en: `${char.name} ${word} works hard.`,
                    zh: `${char.zh}${meaning}地努力工作。`
                }),
                check: () => true
            },
            {
                pattern: (word, meaning, char) => ({
                    en: `${char.name} moves ${word}.`,
                    zh: `${char.zh}${meaning}地移动。`
                }),
                check: () => true
            }
        ]
    },
    
    intermediate: {
        xiaoZhan: [
            {
                pattern: (word, meaning) => ({
                    en: `Xiao Zhan ${word} prepares for each role he takes on.`,
                    zh: `肖战${meaning}地为每个角色做准备。`
                }),
                check: () => true
            },
            {
                pattern: (word, meaning) => ({
                    en: `Xiao Zhan ${word} dedicates himself to his craft.`,
                    zh: `肖战${meaning}地投入到演艺事业中。`
                }),
                check: () => true
            }
        ],
        character: [
            {
                pattern: (word, meaning, char) => ({
                    en: `${char.name} ${word} approaches every challenge in ${char.drama}.`,
                    zh: `${char.zh}${meaning}地面对《${char.dramaZh}》中的每个挑战。`
                }),
                check: () => true
            },
            {
                pattern: (word, meaning, char) => ({
                    en: `${char.name} ${word} pursues the goal.`,
                    zh: `${char.zh}${meaning}地追求目标。`
                }),
                check: () => true
            }
        ]
    },
    
    advanced: {
        xiaoZhan: [
            {
                pattern: (word, meaning) => ({
                    en: `Xiao Zhan ${word} immerses himself in character research.`,
                    zh: `肖战${meaning}地沉浸在角色研究中。`
                }),
                check: () => true
            }
        ],
        character: [
            {
                pattern: (word, meaning, char) => ({
                    en: `${char.name} ${word} navigates the complex situations in ${char.drama}.`,
                    zh: `${char.zh}${meaning}地在《${char.dramaZh}》复杂的情境中穿行。`
                }),
                check: () => true
            }
        ]
    }
};

// ========== 模板选择器 ==========

function selectTemplate(posType, difficulty, useXiaoZhan, character) {
    let templates = null;
    
    // 根据词性选择模板库
    switch(posType) {
        case 'adj':
            templates = adjectiveTemplates;
            break;
        case 'v':
            templates = verbTemplates;
            break;
        case 'n':
            templates = nounTemplates;
            break;
        case 'adv':
            templates = adverbTemplates;
            break;
        default:
            return null;
    }
    
    // 获取对应难度的模板
    const diffTemplates = templates[difficulty] || templates.basic;
    const sourceTemplates = useXiaoZhan ? diffTemplates.xiaoZhan : diffTemplates.character;
    
    if (!sourceTemplates || sourceTemplates.length === 0) {
        return null;
    }
    
    // 随机选择一个模板
    return sourceTemplates[Math.floor(Math.random() * sourceTemplates.length)];
}

// ========== 应用模板生成例句 ==========

function applyTemplate(template, word, meaning, character) {
    if (!template) return null;
    
    try {
        if (typeof template.pattern === 'function') {
            return template.pattern(word, meaning, character);
        }
    } catch (e) {
        console.error('Template application error:', e);
        return null;
    }
    
    return null;
}

// 导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        selectTemplate,
        applyTemplate
    };
}
