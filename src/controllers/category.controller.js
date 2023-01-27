const postService = require('../services/category.service');

const createCategory = async (req, res) => {
    const { name } = req.body;
    const newCategory = await postService.createCategory({ name });
    res.status(newCategory.status).json(newCategory.message);
};

module.exports = {
    createCategory,
};