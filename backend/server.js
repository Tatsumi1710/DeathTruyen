const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Kết nối MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ Kết nối MongoDB thành công!'))
    .catch(err => console.log('❌ Lỗi kết nối:', err));

// Routes
app.use('/api/auth', require('./routes/auth'));

 // đặt SAU routes API

const projectPath = path.join(__dirname, '..', 'project');
console.log('Looking for frontend at:', projectPath);

app.use(express.static(projectPath));
app.get('*', (req, res) => {
    res.sendFile(path.join(projectPath, 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server đang chạy tại port ${PORT}`));