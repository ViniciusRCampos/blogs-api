const { BlogPost, Category, PostCategory } = require('../models');

const newPost = async ({ title, content, categoryIds, userId }) => {
    const verifyId = await Category.findAndCountAll({ where: { id: categoryIds } });

    if (verifyId.count !== categoryIds.length) {
        return { status: 400,
        message: { message: 'one or more "categoryIds" not found',
        } };
}

  const post = await BlogPost.create({ title,
    content,
    userId, 
    published: Date.now(),
    updated: Date.now() });

    const promises = categoryIds.map(async (categoryId) => {
        await PostCategory.create({ postId: post.id, categoryId });
    });

    await Promise.all(promises);

    return { status: 201, message: post.dataValues };
};

module.exports = {
    newPost,
};