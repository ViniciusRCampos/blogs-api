const userService = require('../services/user.service');

const newUser = async (req, res) => {
    const {
        displayName,
        email,
        password,
        image,
    } = req.body;

    const createdUser = await userService.newUser(displayName, email, password, image);
    return res.status(createdUser.status).json(createdUser.message);
};

module.exports = {
    newUser,
};