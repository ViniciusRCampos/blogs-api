const loginService = require('../services/login.service');

const login = async (req, res) => {
    const { email, password } = req.body;
    const access = await loginService.login(email, password);
    return res.status(access.status).json(access.message);
};

module.exports = {
    login,
};