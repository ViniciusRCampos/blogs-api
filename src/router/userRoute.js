const { Router } = require('express');
const { validateToken } = require('../Auth/validateJWT');
const userController = require('../controllers/user.controller');
const { validateEmailAndPassword } = require('../middlewares/validations');

const route = Router();

route.get('/user', validateToken, userController.getAllUser);
route.get('/user/:id', validateToken, userController.getById);
route.post('/user', validateEmailAndPassword, userController.newUser);

module.exports = route;