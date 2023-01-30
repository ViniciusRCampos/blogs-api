const { Category } = require('../models');

const validateEmailAndPassword = (req, res, Next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json(
            { 
                message: 'Some required fields are missing',
            },
        );
    }
    Next();
};

const validatePost = (req, res, Next) => {
    const { title, content, categoryIds } = req.body;
    if (!title || !content || !categoryIds) {
        return res.status(400).json(
            { 
                message: 'Some required fields are missing',
            },
        );
    }
    Next();
};

const validatePostCategoryId = async (req, res, Next) => {
    const { categoryIds } = req.body;
    const ids = await Category.findAll();
    const validIds = ids.map((row) => {
        const { dataValues: { id } } = row;
        return id;
    });

    for (let i = 0; i < categoryIds.length; i += 1) {
        if (!validIds.includes(categoryIds[i])) {
            return res.status(400).json(
                { 
                    message: 'one or more "categoryIds" not found',
                },
            );
    }
}
Next();
};
module.exports = {
    validateEmailAndPassword,
    validatePost,
    validatePostCategoryId,
};