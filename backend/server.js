const express = require('express');
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
app.use(express.static(path.join(__dirname, '../project')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'project', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server đang chạy tại port ${PORT}`));