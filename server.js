const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// 中間件
app.use(cors());
app.use(bodyParser.json());

// 連接 MongoDB
const mongoURI = 'mongodb+srv://<Dynasty72>:<denny1998927>@cluster0.phrjq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // 修改為您的 MongoDB URI
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('成功連接到 MongoDB'))
  .catch(err => console.error('MongoDB 連接失敗：', err));

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
    console.error(error);
    res.status(500).json({ message: '伺服器錯誤' });
  }
});

app.get('/api/registrations', async (req, res) => {
  try {
    const registrations = await Registration.find().sort({ timestamp: -1 });
    res.status(200).json(registrations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: '伺服器錯誤' });
  }
});

// 啟動伺服器
app.listen(PORT, () => {
  console.log(`伺服器正在 http://localhost:${PORT} 運行`);
});
