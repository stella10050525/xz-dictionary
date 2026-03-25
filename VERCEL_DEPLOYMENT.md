# 🚀 Vercel 部署指南

## 第一步：访问 Vercel

1. 打开 https://vercel.com
2. 点击 **"Sign Up"** 或 **"Log In"**
3. 选择 **"Continue with GitHub"**（用 GitHub 账号登录）

---

## 第二步：导入项目

1. 登录后，点击 **"Add New Project"**
2. 选择 **"Import Git Repository"**
3. 在列表中找到 `stella10050525/xz-dictionary`
4. 点击 **"Import"**

---

## 第三步：配置项目

**Project Name**（可选）：
- 默认：`xz-dictionary`
- 可以改成：`xz-dict` 或其他（会影响域名）

**Framework Preset**：
- 选择：**`Other`**

**Root Directory**：
- 保持默认：`./`

**Build and Output Settings**：
- 保持默认即可（Vercel 会自动识别静态网站）

---

## 第四步：部署

1. 点击 **"Deploy"**
2. 等待约 1-2 分钟
3. 部署成功后会显示：
   - ✅ **Congratulations!**
   - 你的网站域名：`https://xz-dictionary-xxx.vercel.app`

---

## 第五步：访问测试

1. 点击生成的域名链接
2. 确认网站正常运行
3. 测试功能：
   - ✅ 查词
   - ✅ 词书
   - ✅ 生词本
   - ✅ 上一词/下一词导航

---

## 🎉 完成！

### 你的新域名：
```
https://xz-dictionary-xxx.vercel.app
```

### 自动部署：
- 每次 push 到 GitHub，Vercel 会自动重新部署
- 无需手动操作

### 国内访问：
- Vercel 使用全球 CDN
- 国内访问速度通常比 GitHub Pages 快
- 如果偶尔不稳定，可以配置自定义域名

---

## 🔧 可选：自定义域名

如果想用自定义域名（如 `xz-dictionary.com`）：

1. 购买域名（Namecheap、GoDaddy、阿里云等）
2. 在 Vercel 项目设置中：
   - Settings → Domains
   - 添加你的域名
3. 配置 DNS：
   - 添加 CNAME 记录指向 `cname.vercel.com`

---

## 📊 查看部署状态

- **Dashboard**：https://vercel.com/dashboard
- **项目页面**：https://vercel.com/你的用户名/xz-dictionary
- **部署历史**：点击项目 → Deployments

---

## ⚠️ 常见问题

### Q: 部署失败怎么办？
A: 检查 Vercel 的部署日志（Functions → View Build Logs），通常是配置问题

### Q: 国内访问还是慢？
A: 
- 可以配置自定义域名 + Cloudflare CDN
- 或考虑部署到阿里云 OSS

### Q: 可以同时保留 GitHub Pages 吗？
A: 可以！两个平台互不影响，用户可以访问任意一个

---

## 📱 分享链接

部署完成后，你可以分享：
- **Vercel 链接**（推荐，国内更快）
- **GitHub Pages 链接**（备用）

---

**祝你部署顺利！🎉**
