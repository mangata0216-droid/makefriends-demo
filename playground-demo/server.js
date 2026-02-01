const express = require('express');
const app = express();
const path = require('path');

// 让你能访问项目里的图片
app.use('/Images', express.static(path.join(__dirname, 'Images')));

// 一个简单的接口，返回你的 uiConfig 数据
app.get('/api/config', (req, res) => {
  // 这里假设你的 app.js 导出了 uiConfig
  // 为了简单，我们先直接把数据写在这，或者你可以通过 require 导入
  res.json({
    title: "互动绘本",
    subtitle: "与小明一起开始奇妙的冒险之旅"
  });
});

// 首页显示一个简单的文字，证明服务通了
app.get('/', (req, res) => {
  res.send('<h1>绘本服务已启动！</h1><p>请确保你有 index.html 来承载内容。</p>');
});

const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});