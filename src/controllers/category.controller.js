const postService = require('../services/category.service');

const createCategory = async (req, res) => {
    const { name } = req.body;
    const newCategory = await postService.createCategory({ name });
    res.status(newCategory.status).json(newCategory.message);
};

const getAllCategories = async (_req, res) => {
    const allCategories = await postService.getAllCategories();
    res.status(allCategories.status).json(allCategories.message);
};

module.exports = {
    createCategory,
    getAllCategories,
};