const { Router } = require('express');
const postController = require('../controllers/post.controller');
const { validateToken } = require('../Auth/validateJWT');
const { validatePost, validatePostCategoryId } = require('../middlewares/validations');

const route = Router();

// route.get('/post', validateToken, postController.getAllPosts);
route.post('/post', validateToken, validatePost, validatePostCategoryId, postController.newPost);

module.exports = route;