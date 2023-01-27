const Joi = require('joi');
const { Category } = require('../models');

const categorySchemas = Joi.object({
    name: Joi.string().required(),
});

const createCategory = async ({ name }) => {
const validate = categorySchemas.validate({ name });
if (validate.error) {
    return {
        status: 400,
        message: { message: validate.error.message },
    };
}
const newCategory = await Category.create({ name });
return {
    status: 201,
    message: newCategory.dataValues,
};
};

const getAllCategories = async () => {
    const allCategories = await Category.findAll();
    return {
        status: 200,
        message: allCategories,
    };
};

module.exports = {
    createCategory,
    getAllCategories,
};