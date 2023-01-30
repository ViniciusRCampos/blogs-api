const postService = require('../services/post.service');

const newPost = async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const { id: userId } = req.user;
    const post = await postService.newPost({ title, content, categoryIds, userId });
    res.status(post.status).json(post.message);
};

module.exports = {
    newPost,
};
