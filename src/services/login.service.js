const tokenJwt = require('jsonwebtoken');
const { User } = require('../models');

const login = async (email, password) => {
    const findUser = await User.findOne({ where: { email, password } });
    if (!findUser) {
        return {
            status: 400,
            message: {
                message: 'Invalid fields',
              },
        };
}
    const payload = { data: findUser };
    const token = tokenJwt.sign(payload, process.env.JWT_SECRET);
    return {
        status: 200,
        message: {
            token,
        },
    };
};

module.exports = {
    login,
};