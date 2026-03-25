# Gitee Pages 快速部署脚本
# 使用方法：将"你的用户名"替换为你的 Gitee 用户名，然后运行

# 设置你的 Gitee 用户名
$GITEE_USERNAME = "你的用户名"

# 进入项目目录
Write-Host "📁 进入项目目录..." -ForegroundColor Cyan
cd ~\xz-dictionary-local

# 检查是否已存在 gitee remote
Write-Host "🔍 检查远程仓库配置..." -ForegroundColor Cyan
$existingRemote = git remote -v | Select-String "gitee"

if ($existingRemote) {
    Write-Host "⚠️  已存在 gitee remote，正在更新..." -ForegroundColor Yellow
    git remote set-url gitee https://gitee.com/$GITEE_USERNAME/xz-dictionary.git
} else {
    Write-Host "➕ 添加 Gitee 远程仓库..." -ForegroundColor Green
    git remote add gitee https://gitee.com/$GITEE_USERNAME/xz-dictionary.git
}

# 显示远程仓库信息
Write-Host "`n📋 远程仓库信息:" -ForegroundColor Cyan
git remote -v

# 推送代码
Write-Host "`n🚀 推送到 Gitee..." -ForegroundColor Cyan
git push -u gitee main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✅ 推送成功！" -ForegroundColor Green
    Write-Host "`n📝 下一步操作:" -ForegroundColor Cyan
    Write-Host "1. 访问 https://gitee.com/$GITEE_USERNAME/xz-dictionary" -ForegroundColor White
    Write-Host "2. 进入 服务 → Gitee Pages" -ForegroundColor White
    Write-Host "3. 选择 main 分支，点击保存" -ForegroundColor White
    Write-Host "4. 等待审核通过（通常 1-2 个工作日）" -ForegroundColor White
    Write-Host "`n🎉 审核通过后访问：https://$GITEE_USERNAME.gitee.io/xz-dictionary" -ForegroundColor Green
} else {
    Write-Host "`n❌ 推送失败，请检查错误信息" -ForegroundColor Red
    Write-Host "可能的原因:" -ForegroundColor Yellow
    Write-Host "- 用户名填写错误" -ForegroundColor White
    Write-Host "- 仓库不存在" -ForegroundColor White
    Write-Host "- 没有推送权限" -ForegroundColor White
}

Write-Host "`n按任意键退出..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
