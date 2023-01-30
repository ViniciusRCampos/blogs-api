const jwt = require('jsonwebtoken');

require('dotenv/config');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const validateToken = async (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Token not found' });
    }
    try {
        const decoded = jwt.verify(token, secret);
        const { password: _, ...user } = decoded.data;
        req.user = user;

        next();
      } catch (err) {
        return res.status(401).json({ message: 'Expired or invalid token' });
      }
};

module.exports = {
    validateToken,
};