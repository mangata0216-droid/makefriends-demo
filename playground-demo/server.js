const express = require('express');
const app = express();
const path = require('path');

// --- 核心改动开始 ---

// 1. 让服务器能够访问你文件夹里所有的静态文件 (html, css, js, 图片, 视频)
app.use(express.static(path.join(__dirname, '/')));

// 2. 当有人访问首页时，直接把你的 index.html 文件发给他们
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// --- 核心改动结束 ---

// 这里的端口保持 3000 即可
const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});