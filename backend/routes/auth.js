const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// ĐĂNG KÝ
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Kiểm tra email đã tồn tại chưa
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email đã được sử dụng!' });
        }

        // Mã hóa mật khẩu
        const hashedPassword = await bcrypt.hash(password, 10);

        // Tạo user mới
        const user = new User({ username, email, password: hashedPassword });
        await user.save();

        res.status(201).json({ message: 'Đăng ký thành công!' });

    } catch (error) {
        res.status(500).json({ message: 'Lỗi server!' });
    }
});

// ĐĂNG NHẬP
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Tìm user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Email không tồn tại!' });
        }

        // Kiểm tra mật khẩu
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Mật khẩu không đúng!' });
        }

        // Tạo token
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );

        res.json({
            token,
            user: { id: user._id, username: user.username, email: user.email }
        });

    } catch (error) {
        res.status(500).json({ message: 'Lỗi server!' });
    }
});

// Middleware xác thực token
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Chưa đăng nhập!" });
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch {
        res.status(401).json({ message: "Token không hợp lệ!" });
    }
};

// THEO DÕI / BỎ THEO DÕI
router.post('/follow', authMiddleware, async (req, res) => {
    try {
        const { mangaTitle } = req.body;
        const user = await User.findById(req.userId);
        
        const index = user.followedMangas.indexOf(mangaTitle);
        if (index === -1) {
            user.followedMangas.push(mangaTitle);
        } else {
            user.followedMangas.splice(index, 1);
        }
        await user.save();
        res.json({ followedMangas: user.followedMangas });
    } catch {
        res.status(500).json({ message: "Lỗi server!" });
    }
});

// LẤY DANH SÁCH THEO DÕI
router.get('/following', authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.userId);
        res.json({ followedMangas: user.followedMangas });
    } catch {
        res.status(500).json({ message: "Lỗi server!" });
    }
});

module.exports = router;

