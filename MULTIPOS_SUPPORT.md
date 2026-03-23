# 多词性支持功能 - 实现说明

## 🎯 功能概述

词书上传功能现已支持一词多义（多词性）的情况，可以正确解析和显示包含多个词性及对应释义的单词。

## 📝 支持的格式

### 分隔符
- **词性分隔符**：`/` 或 `;` 或 `；`
- **释义分隔符**：`;` 或 `；`

### 三种情况

#### 1️⃣ 词性和释义一一对应
最常见的情况，词性和释义数量相同，按顺序对应。

**Excel/CSV 格式：**
```csv
单词,词性,释义
love,v./n.,爱；喜爱；爱情
support,v./n.,支持；拥护；支撑物
practice,v./n.,练习；实践；业务
act,v./n.,表演；行为
dance,v./n.,跳舞；舞蹈
smile,v./n.,微笑；笑容
```

**显示效果：**
```
love
━━━━━━━━━━━━━
📘 v. (动词)
  • 爱；喜爱

📘 n. (名词)
  • 爱情
```

#### 2️⃣ 单一词性，多个释义
一个词性，但有多个不同的释义。

**Excel/CSV 格式：**
```csv
单词,词性,释义
perfect,adj.,完美的；理想的；完全的
beautiful,adj.,美丽的；美好的；极好的
```

**显示效果：**
```
perfect
━━━━━━━━━━━━━
📘 adj. (形容词)
  • 完美的
  • 理想的
  • 完全的
```

#### 3️⃣ 多个词性，共用释义
多个词性共享同一个释义说明。

**Excel/CSV 格式：**
```csv
单词,词性,释义
professional,adj./n.,专业的；职业的
favorite,adj./n.,最喜欢的
```

**显示效果：**
```
professional
━━━━━━━━━━━━━
📘 adj./n.
  • 专业的；职业的
```

## 🔧 技术实现

### parseWordEntry() 函数
新增的核心解析函数，负责智能识别和处理多词性：

```javascript
function parseWordEntry(rawData) {
    // 检测分隔符
    const posSeparators = /[\/;；]/;
    const meaningSeparators = /[；;]/;
    
    // 分割词性和释义
    const posArray = partOfSpeech.split(posSeparators);
    const meaningArray = meaning.split(meaningSeparators);
    
    // 根据数量关系处理
    if (posArray.length === meaningArray.length) {
        // 一一对应
    } else if (posArray.length === 1) {
        // 单一词性，多释义
    } else if (meaningArray.length === 1) {
        // 多词性，共用释义
    }
    
    return {
        word: word,
        partOfSpeech: posArray.join('/'),
        meaning: meaning,
        meanings: [...], // 结构化数据
        isMultiPos: true
    };
}
```

### 数据结构

#### 输入数据（CSV/Excel）
```csv
love,v./n.,爱；喜爱；爱情
```

#### 解析后的数据结构
```javascript
{
    word: "love",
    partOfSpeech: "v./n.",          // 原始格式，用于列表显示
    meaning: "爱；喜爱；爱情",        // 原始格式
    meanings: [                       // 结构化数据，用于详情显示
        { pos: "v.", def: "爱；喜爱" },
        { pos: "n.", def: "爱情" }
    ],
    note: "高频词",
    isMultiPos: true                  // 标记为多词性
}
```

### 显示逻辑

#### 单词列表显示
```javascript
// 简化显示，只显示原始格式
<strong>love</strong> <span>v./n.</span>
<div>爱；喜爱；爱情</div>
```

#### 单词详情显示
```javascript
// 展开显示，按词性分组
if (wordData.isMultiPos && wordData.meanings.length > 1) {
    // 按词性分组显示
    const posMap = {};
    wordData.meanings.forEach(m => {
        if (!posMap[m.pos]) posMap[m.pos] = [];
        posMap[m.pos].push(m.def);
    });
    
    // 渲染每个词性及其释义
    Object.entries(posMap).map(([pos, defs]) => ...);
}
```

## 📊 测试用例

### 测试数据
[example_wordbook.csv](file:///C:/Users/zhengja/lobsterai/project/xz-dictionary/example_wordbook.csv) 已更新，包含多个多词性示例：

| 单词 | 词性 | 示例 |
|------|------|------|
| professional | adj./n. | 专业的；职业的 |
| favorite | adj./n. | 最喜欢的；特别喜爱的人或物 |
| act | v./n. | 表演；行为 |
| dance | v./n. | 跳舞；舞蹈 |
| support | v./n. | 支持；拥护；支撑物 |
| love | v./n. | 爱；喜爱；爱情 |
| smile | v./n. | 微笑；笑容 |
| laugh | v./n. | 笑；大笑；笑声 |
| shine | v./n. | 发光；照耀；光泽 |
| dream | v./n. | 梦想；做梦；梦 |
| practice | v./n. | 练习；实践；业务 |

### 测试步骤

1. **上传测试词书**
   - 打开 [index.html](file:///C:/Users/zhengja/lobsterai/project/xz-dictionary/index.html)
   - 点击 "📚 备考词书" → "📥 上传新词书"
   - 选择 `example_wordbook.csv`

2. **查看词书列表**
   - 确认词书上传成功
   - 显示正确的单词数量

3. **查看单词列表**
   - 点击词书卡片进入
   - 检查多词性单词显示：`v./n.` 标签

4. **查看单词详情**
   - 点击 `love` 或 `support` 等多词性单词
   - 确认按词性分组显示：
     ```
     v. (动词)
       • 爱；喜爱
     
     n. (名词)
       • 爱情
     ```

5. **测试例句生成**
   - 确认肖战主题例句正常生成
   - 支持语音朗读

6. **测试收藏功能**
   - 收藏多词性单词到生词本
   - 检查生词本中显示完整释义

## ✅ 兼容性

### 向后兼容
- ✅ 单一词性单词继续正常工作
- ✅ 旧版词书数据自动兼容
- ✅ 不影响其他功能

### 格式容错
- ✅ 支持中英文分号：`;` 和 `；`
- ✅ 支持斜杠和分号：`/` 和 `;`
- ✅ 自动去除多余空格
- ✅ 词性释义数量不匹配时智能处理

## 🎨 显示优化

### 词性标签美化
```css
.part-of-speech {
    color: var(--primary-red);
    font-weight: 700;
    font-size: 1rem;
    margin-bottom: 8px;
    text-transform: uppercase;
}
```

### 分组显示
多词性时按词性分组，每个词性单独显示：
- 清晰的视觉分隔
- 易于理解和记忆
- 与查词结果页风格一致

## 📌 使用建议

### 推荐格式

**✅ 推荐：词性和释义一一对应**
```csv
love,v./n.,爱；喜爱；爱情
support,v./n.,支持；拥护；支撑物
```

**✅ 推荐：单一词性多释义**
```csv
perfect,adj.,完美的；理想的；完全的
```

**⚠️ 注意：避免混淆**
```csv
# 不推荐 - 释义顺序不明确
word,v./n./adj.,释义1；释义2
```

### 词性缩写标准
- `n.` - 名词 (noun)
- `v.` - 动词 (verb)
- `adj.` - 形容词 (adjective)
- `adv.` - 副词 (adverb)
- `prep.` - 介词 (preposition)
- `conj.` - 连词 (conjunction)
- `pron.` - 代词 (pronoun)
- `interj.` - 感叹词 (interjection)

## 🚀 未来增强

- [ ] 支持更复杂的词性组合
- [ ] 自动识别词性缩写
- [ ] 词性颜色区分
- [ ] 批量编辑多词性
- [ ] 导出为标准格式

## 📝 更新日志

**2026-03-22**
- ✅ 新增 `parseWordEntry()` 智能解析函数
- ✅ 支持 `/` 和 `;` 分隔符
- ✅ 支持三种多词性情况
- ✅ 优化单词详情显示
- ✅ 更新测试数据集
- ✅ 更新文档说明

---

💖 让词书功能更加完善！  
🦐 专为小飞侠打造的专属词典
