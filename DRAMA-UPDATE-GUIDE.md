# 🎬 追剧背词 - 更新指南

## 目录结构

```
xz-dictionary/
├── index.html              # 主页（已包含追剧背词 Tab）
├── drama.js                # 追剧背词模块逻辑
├── drama.css               # 追剧背词模块样式
├── drama-data-zhz.js       # 《藏海传》剧集数据
├── images/
│   ├── zhz.jpg             # 藏海传封面图
│   └── zhz1集.png          # 第1集 banner 图
```

---

## 一、更新已有剧集的集数（如给《藏海传》加第2集）

只需编辑 `drama-data-zhz.js`，做三件事：

### 1. 修改顶部计数

```js
totalWords: 270,           // 更新为所有集的总词数
releasedEpisodes: 2,       // 已更新到第几集
```

### 2. 在 episodes 数组末尾追加新集

```js
episodes: [
    { /* 第1集（已有，不要动） */ },
    {
        id: 2,
        title: '第 2 集',
        banner: 'images/zhz2集.png',   // 可选，该集 banner 图
        wordCount: 135,                 // 该集单词数量
        words: [
            {id:1, en:"palace", ph:"/ˈpælɪs/", cn:"n. 宫殿", ex:'稚奴潜入<em>palace</em>。'},
            {id:2, en:"secret", ph:"/ˈsiːkrɪt/", cn:"n./adj. 秘密", ex:'这是一个<em>secret</em>。'},
            // ... 更多单词，格式完全一样
        ],
        story: `<h2>🏯 藏海传 · 第 2 集</h2>
            <span class="story-chapter">【第一幕：标题】</span>
            <p>剧情文本，用 <span class="vocab-highlight" data-word="palace">palace</span>（宫殿）标记高亮词。</p>
            <p>用 <span class="vocab-highlight" data-word="secret">secret</span>（秘密）继续写。</p>
            <p style="text-align:center;color:#D4A843;margin-top:32px;font-weight:700">—— 第 2 集完 · 共 135 词 ——</p>`
    }
]
```

### 3. 如有 banner 图，放到 images/ 文件夹

---

## 二、新增一部全新剧集

### 1. 创建数据文件

新建 `drama-data-xxx.js`（xxx 为剧集缩写），格式如下：

```js
window.DRAMA_XXX = {
    id: 'xxx',                    // 唯一 ID
    title: '《剧名》',
    subtitle: '副标题',
    cover: 'images/xxx.jpg',      // 封面图路径
    description: '简介文本。',
    totalEpisodes: 40,            // 总集数
    totalWords: 135,              // 当前总词数
    releasedEpisodes: 1,          // 已更新集数
    episodes: [
        {
            id: 1,
            title: '第 1 集',
            banner: 'images/xxx1集.png',
            wordCount: 135,
            words: [ /* 同上格式 */ ],
            story: ` /* 同上格式 */ `
        }
    ]
};
```

### 2. 在 index.html 中引入

找到这一行：
```html
<script src="drama-data-zhz.js"></script>
```
在它下面加一行：
```html
<script src="drama-data-xxx.js"></script>
```

### 3. 在 drama.js 中注册

找到这一行：
```js
const dramaList = [window.DRAMA_ZHZ];
```
改为：
```js
const dramaList = [window.DRAMA_ZHZ, window.DRAMA_XXX];
```

---

## 三、单词数据格式说明

每个单词对象：

| 字段 | 说明 | 示例 |
|------|------|------|
| `id` | 序号（从1开始，每集独立编号） | `1` |
| `en` | 英文单词 | `"palace"` |
| `ph` | 音标 | `"/ˈpælɪs/"` |
| `cn` | 词性 + 中文释义 | `"n. 宫殿"` |
| `ex` | 例句（用 `<em>` 标记单词） | `'稚奴潜入<em>palace</em>。'` |

## 四、剧情故事格式说明

- 章节标题用：`<span class="story-chapter">【第一幕：标题】</span>`
- 段落用：`<p>文本</p>`
- 高亮单词用：`<span class="vocab-highlight" data-word="单词">单词</span>（中文释义）`
  - `data-word` 必须和 words 里的 `en` 一致，这样鼠标悬停才能显示释义
  - 括号里的中文释义默认隐藏，用户可点击"展示词义"显示

## 五、发布更新

编辑完成后，提交并推送：

```bash
git add -A
git commit -m "feat: 追剧背词更新第X集"
git push origin main
```

GitHub Pages 会自动部署。
