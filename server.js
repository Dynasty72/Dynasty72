const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // 環境變數管理

const app = express();
const PORT = process.env.PORT || 3000;

// 中間件
app.use(cors());
app.use(bodyParser.json());

// MongoDB URI 從環境變數讀取
const mongoURI = process.env.MONGO_URI || 'mongodb+srv://<Dynasty72>:<denny1998927>@cluster0.phrjq.mongodb.net/badminton?retryWrites=true&w=majority';

// 連接 MongoDB
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ 成功連接到 MongoDB'))
  .catch(err => {
    console.error('❌ MongoDB 連接失敗：', err.message);
    process.exit(1); // 無法連接時終止應用
  });

// 定義資料模型
const registrationSchema = new mongoose.Schema({
  name: String,
  email: String,
  skillLevel: String,
  phone: String,
  timestamp: { type: Date, default: Date.now }
});

const Registration = mongoose.model('Registration', registrationSchema);

// API 路由
app.post('/api/register', async (req, res) => {
  try {
    const { name, email, skillLevel, phone } = req.body;
    const newRegistration = new Registration({ name, email, skillLevel, phone });
    await newRegistration.save();
    res.status(201).json({ message: '報名成功', data: newRegistration });
  } catch (error) {
    console.error('❌ 儲存資料失敗：', error.message);
    res.status(500).json({ message: '伺服器錯誤，請稍後再試' });
  }
});

app.get('/api/registrations', async (req, res) => {
  try {
    const registrations = await Registration.find().sort({ timestamp: -1 });
    res.status(200).json(registrations);
  } catch (error) {
    console.error('❌ 無法取得資料：', error.message);
    res.status(500).json({ message: '伺服器錯誤，請稍後再試' });
  }
});

// 啟動伺服器
app.listen(PORT, () => {
  console.log(`🚀 伺服器正在運行於 http://localhost:${PORT}`);
});
