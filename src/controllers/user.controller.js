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

const getAllUser = async (_req, res) => {
    const allUser = await userService.getAllUser();
    return res.status(allUser.status).json(allUser.message);
};

module.exports = {
    newUser,
    getAllUser,
};