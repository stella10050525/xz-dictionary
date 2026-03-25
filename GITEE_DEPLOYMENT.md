# 🇨🇳 Gitee Pages 部署指南

## 📋 第一步：注册 Gitee 账号

1. 访问 https://gitee.com
2. 点击右上角 **"注册"**
3. 使用手机号注册
4. 完成**实名认证**（必须）：
   - 进入：个人设置 → 实名认证
   - 上传身份证照片或进行人脸识别
   - 通常几分钟内完成审核

---

## 📦 第二步：创建仓库

### 方式 A：在 Gitee 网页创建（推荐）

1. 登录 Gitee
2. 点击右上角 **"+"** → **"新建仓库"**
3. 填写信息：
   - **仓库名称**：`xz-dictionary`
   - **仓库介绍**：`🦐 小飞侠专属词典 - 肖战主题英语学习工具`
   - **仓库首页**：勾选 **"使用 README.md 初始化仓库"**
   - **开源/私有**：选择 **"开源"**（免费且审核更快）
4. 点击 **"创建"**

### 方式 B：从 GitHub 导入

1. 登录 Gitee
2. 点击右上角 **"+"** → **"导入仓库"**
3. 选择 **"从 GitHub/GitLab 导入"**
4. 授权后选择 `stella10050525/xz-dictionary`
5. 点击 **"开始导入"**

---

## 🚀 第三步：推送代码

### 方法 1：使用 Git 命令行（推荐）

打开 PowerShell，执行：

```powershell
# 进入项目目录
cd ~\xz-dictionary-local

# 添加 Gitee 远程仓库（替换为你的 Gitee 用户名）
git remote add gitee https://gitee.com/你的用户名/xz-dictionary.git

# 推送代码
git push -u gitee main
```

### 方法 2：使用 GitHub Desktop

1. 打开 GitHub Desktop
2. 选择 `xz-dictionary` 仓库
3. Repository → Repository Settings
4. 添加 Remote：
   - Name: `gitee`
   - URL: `https://gitee.com/你的用户名/xz-dictionary.git`
5. 点击 Push，选择 `gitee`

### 方法 3：直接上传文件（适合新手）

1. 进入 Gitee 仓库页面
2. 点击 **"上传文件"**
3. 选择所有文件（HTML、CSS、JS 等）
4. 填写提交信息："初始提交"
5. 点击 **"上传"**

---

## ⚙️ 第四步：开启 Pages 服务

1. 进入 Gitee 仓库页面
2. 点击 **"服务"** 标签
3. 找到 **"Gitee Pages"**
4. 配置：
   - **来源**：选择 `main` 分支
   - **路径**：留空（默认为 `/`）
   - **域名**：先留空（后面可配置自定义域名）
5. 点击 **"保存"**
6. 系统会提示 **"Pages 服务开启成功，等待审核"**

---

## ⏳ 第五步：等待审核

### 审核时间
- **通常**：1-2 个工作日
- **快的情况**：几小时内
- **慢的情况**：3-5 天

### 审核状态查询
1. 进入仓库 → 服务 → Gitee Pages
2. 查看审核状态：
   - ⏳ **审核中** - 等待即可
   - ✅ **审核通过** - 可以访问
   - ❌ **审核失败** - 根据提示修改后重新提交

### 加速审核技巧
- ✅ 完善 README.md（说明项目用途）
- ✅ 添加 LICENSE 文件
- ✅ 确保内容健康向上
- ✅ 避免敏感词汇

---

## 🎉 第六步：访问网站

### 审核通过后

**获得域名：**
```
https://你的用户名.gitee.io/xz-dictionary
```

**或自定义域名（可选）：**
```
https://xz-dictionary.com
```

### 测试功能
- ✅ 首页加载
- ✅ 词书功能
- ✅ 生词本
- ✅ 上一词/下一词导航
- ✅ 站内搜索

---

## 🔄 第七步：后续更新

### 自动部署（推荐）

每次推送到 Gitee 后：

```powershell
cd ~\xz-dictionary-local
git add .
git commit -m "更新内容描述"
git push gitee main
```

Gitee Pages 会**自动重新构建**（通常 1-2 分钟）。

### 查看部署状态

1. 进入仓库 → 服务 → Gitee Pages
2. 查看 **"构建历史"**
3. 绿色 ✅ 表示成功，红色 ❌ 表示失败

---

## 📊 访问统计（可选）

### Gitee 自带统计

1. 仓库 → 统计
2. 查看：
   - 访问量
   - 克隆数
   - 趋势图

### 添加 Google Analytics

已在 `index.html` 中配置，可在 Google Analytics 后台查看：
- 实时访客
- 页面浏览量
- 用户来源
- 地理位置

---

## ⚠️ 常见问题

### Q1: 审核失败怎么办？
**A:** 
- 查看失败原因
- 修改后重新提交 Pages 申请
- 确保内容符合规范

### Q2: 自定义域名如何配置？
**A:**
1. 购买域名（阿里云、腾讯云等）
2. Gitee 仓库 → 服务 → Gitee Pages → 绑定域名
3. 配置 DNS：
   - 添加 CNAME 记录指向 `你的用户名.gitee.io`
4. 等待 DNS 生效（通常几分钟）

### Q3: 如何同时保留 GitHub 和 Gitee？
**A:** 
两个平台互不影响！
- GitHub Pages: `https://stella10050525.github.io/xz-dictionary/`
- Gitee Pages: `https://你的用户名.gitee.io/xz-dictionary`

可以分享 Gitee 链接给国内用户，GitHub 链接给国外用户。

### Q4: 构建失败怎么办？
**A:**
- 检查是否有语法错误
- 确保所有文件都上传了
- 查看构建日志找原因

### Q5: 每月构建次数限制？
**A:**
- 个人版：**10 次/月**
- 但静态网站不需要频繁构建
- 只有代码推送才会触发构建

---

## 🎯 快速检查清单

- [ ] 注册 Gitee 账号
- [ ] 完成实名认证
- [ ] 创建仓库 `xz-dictionary`
- [ ] 推送所有代码文件
- [ ] 开启 Gitee Pages 服务
- [ ] 等待审核通过
- [ ] 测试网站功能
- [ ] 分享给用户

---

## 📞 需要帮助？

遇到问题可以：
1. 查看 Gitee 官方文档：https://gitee.com/help
2. 联系 Gitee 客服
3. 或在 GitHub Issues 中提问

---

**祝你部署顺利！🎉**

---

## 📝 附录：完整 Git 命令

```powershell
# 1. 进入项目目录
cd ~\xz-dictionary-local

# 2. 添加 Gitee 远程仓库（替换为你的 Gitee 用户名）
git remote add gitee https://gitee.com/你的用户名/xz-dictionary.git

# 3. 查看远程仓库
git remote -v

# 4. 推送到 Gitee
git push -u gitee main

# 5. 后续更新
git add .
git commit -m "更新说明"
git push gitee main
```

---

**Gitee Pages 部署完成！** 🚀
