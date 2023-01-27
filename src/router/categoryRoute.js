const { Router } = require('express');
const categoryController = require('../controllers/category.controller');
const { validateToken } = require('../Auth/validateJWT');

const route = Router();

route.post('/categories', validateToken, categoryController.createCategory);

module.exports = route;