// IndexedDB 图片存储管理器
// 容量远大于 localStorage (可达 50MB+)

class ImageDB {
    constructor() {
        this.dbName = 'XZDictionaryDB';
        this.version = 1;
        this.storeName = 'wordImages';
        this.db = null;
    }

    // 初始化数据库
    async init() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, this.version);

            request.onerror = () => {
                console.error('IndexedDB 打开失败:', request.error);
                reject(request.error);
            };

            request.onsuccess = () => {
                this.db = request.result;
                console.log('✅ IndexedDB 初始化成功');
                resolve(this.db);
            };

            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                
                // 创建对象存储（如果不存在）
                if (!db.objectStoreNames.contains(this.storeName)) {
                    const objectStore = db.createObjectStore(this.storeName, { keyPath: 'word' });
                    objectStore.createIndex('uploadTime', 'uploadTime', { unique: false });
                    console.log('📦 创建对象存储:', this.storeName);
                }
            };
        });
    }

    // 保存图片
    async saveImage(word, imageData) {
        if (!this.db) await this.init();

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.storeName], 'readwrite');
            const objectStore = transaction.objectStore(this.storeName);

            const data = {
                word: word,
                images: [imageData], // 数组格式，兼容原有逻辑
                uploadTime: Date.now()
            };

            const request = objectStore.put(data);

            request.onsuccess = () => {
                console.log(`✅ 图片已保存: ${word}`);
                resolve(data);
            };

            request.onerror = () => {
                console.error('❌ 保存失败:', request.error);
                reject(request.error);
            };
        });
    }

    // 获取图片
    async getImage(word) {
        if (!this.db) await this.init();

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.storeName], 'readonly');
            const objectStore = transaction.objectStore(this.storeName);
            const request = objectStore.get(word);

            request.onsuccess = () => {
                const result = request.result;
                if (result && result.images && result.images.length > 0) {
                    resolve(result.images);
                } else {
                    resolve(null);
                }
            };

            request.onerror = () => {
                console.error('❌ 读取失败:', request.error);
                reject(request.error);
            };
        });
    }

    // 删除图片
    async deleteImage(word) {
        if (!this.db) await this.init();

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.storeName], 'readwrite');
            const objectStore = transaction.objectStore(this.storeName);
            const request = objectStore.delete(word);

            request.onsuccess = () => {
                console.log(`🗑️ 图片已删除: ${word}`);
                resolve(true);
            };

            request.onerror = () => {
                console.error('❌ 删除失败:', request.error);
                reject(request.error);
            };
        });
    }

    // 获取所有单词列表
    async getAllWords() {
        if (!this.db) await this.init();

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.storeName], 'readonly');
            const objectStore = transaction.objectStore(this.storeName);
            const request = objectStore.getAllKeys();

            request.onsuccess = () => {
                resolve(request.result);
            };

            request.onerror = () => {
                console.error('❌ 读取失败:', request.error);
                reject(request.error);
            };
        });
    }

    // 检查存储使用情况（估算）
    async getStorageInfo() {
        if (!this.db) await this.init();

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.storeName], 'readonly');
            const objectStore = transaction.objectStore(this.storeName);
            const request = objectStore.getAll();

            request.onsuccess = () => {
                const allData = request.result;
                let totalSize = 0;
                
                allData.forEach(item => {
                    if (item.images) {
                        item.images.forEach(img => {
                            if (img.data) {
                                totalSize += img.data.length;
                            }
                        });
                    }
                });

                const totalMB = (totalSize / (1024 * 1024)).toFixed(2);
                
                resolve({
                    totalItems: allData.length,
                    totalSize: totalSize,
                    totalMB: parseFloat(totalMB),
                    percentage: (totalSize / (50 * 1024 * 1024) * 100).toFixed(1) // 基于 50MB 估算
                });
            };

            request.onerror = () => {
                console.error('❌ 读取失败:', request.error);
                reject(request.error);
            };
        });
    }

    // 迁移 localStorage 数据到 IndexedDB
    async migrateFromLocalStorage() {
        const oldData = localStorage.getItem('xz_word_images');
        if (!oldData) {
            console.log('ℹ️ 没有需要迁移的数据');
            return 0;
        }

        try {
            const parsedData = JSON.parse(oldData);
            let count = 0;

            for (const [word, images] of Object.entries(parsedData)) {
                // 兼容旧格式（字符串）和新格式（数组）
                const imageArray = typeof images === 'string' 
                    ? [{ data: images, name: 'migrated', uploadTime: Date.now() }]
                    : images;

                if (Array.isArray(imageArray) && imageArray.length > 0) {
                    await this.saveImage(word, imageArray[0]);
                    count++;
                }
            }

            console.log(`✅ 已迁移 ${count} 个单词的图片`);
            
            // 备份后清空 localStorage
            localStorage.setItem('xz_word_images_backup', oldData);
            localStorage.removeItem('xz_word_images');
            
            return count;
        } catch (error) {
            console.error('❌ 迁移失败:', error);
            return 0;
        }
    }
}

// 创建全局实例
const imageDB = new ImageDB();

// 页面加载时初始化并迁移数据
window.addEventListener('DOMContentLoaded', async () => {
    try {
        await imageDB.init();
        const migrated = await imageDB.migrateFromLocalStorage();
        
        if (migrated > 0) {
            console.log(`🎉 数据迁移完成！已迁移 ${migrated} 张图片`);
            console.log('📊 旧数据已备份到 localStorage (key: xz_word_images_backup)');
        }
    } catch (error) {
        console.error('⚠️ IndexedDB 初始化失败，将回退到 localStorage:', error);
    }
});
