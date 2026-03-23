// XZ Dictionary 图片诊断脚本
// 在浏览器 Console 中运行此脚本

console.log('=== 🔍 开始诊断 ambassador 图片 ===\n');

// 1. 检查 localStorage 数据
const allData = localStorage.getItem('xz_word_images');
console.log('1️⃣ localStorage 原始数据存在:', !!allData);

if (!allData) {
    console.error('❌ 没有找到任何图片数据！');
} else {
    try {
        const parsed = JSON.parse(allData);
        console.log('2️⃣ 数据解析成功');
        console.log('   已保存的单词:', Object.keys(parsed));
        
        // 检查 ambassador
        if (parsed.ambassador) {
            console.log('\n3️⃣ ✅ 找到 ambassador 的数据:');
            console.log('   数据类型:', Array.isArray(parsed.ambassador) ? '数组' : typeof parsed.ambassador);
            
            if (Array.isArray(parsed.ambassador)) {
                console.log('   图片数量:', parsed.ambassador.length);
                
                if (parsed.ambassador.length > 0) {
                    const img = parsed.ambassador[0];
                    console.log('\n4️⃣ 图片详情:');
                    console.log('   文件名:', img.name);
                    console.log('   数据大小:', (img.data.length / 1024).toFixed(2), 'KB');
                    console.log('   数据类型:', img.data.substring(0, 30) + '...');
                    console.log('   上传时间:', new Date(img.uploadTime).toLocaleString('zh-CN'));
                    
                    // 尝试创建图片元素测试
                    console.log('\n5️⃣ 测试图片显示:');
                    const testImg = document.createElement('img');
                    testImg.src = img.data;
                    testImg.style.maxWidth = '200px';
                    testImg.style.border = '2px solid #E63946';
                    testImg.onload = function() {
                        console.log('✅ 图片加载成功!', testImg.width + 'x' + testImg.height);
                        console.log('👇 在下方查看图片:');
                        console.log(testImg);
                    };
                    testImg.onerror = function() {
                        console.error('❌ 图片加载失败!');
                    };
                } else {
                    console.warn('⚠️ 数组为空，没有图片数据');
                }
            } else {
                console.log('   (旧格式，非数组)');
            }
        } else {
            console.error('\n❌ 没有找到 ambassador 的数据');
            console.log('   可能原因:');
            console.log('   1. 图片未保存成功');
            console.log('   2. 单词拼写不一致');
            console.log('   3. 数据被清空了');
        }
        
    } catch (e) {
        console.error('❌ 数据解析失败:', e.message);
    }
}

console.log('\n=== 🎯 诊断完成 ===');
console.log('如果图片数据存在但页面不显示，请尝试:');
console.log('1. 在词典页面搜索 ambassador');
console.log('2. 检查页面 Elements 是否有 img 元素');
console.log('3. 按 Ctrl+F5 强制刷新页面');
