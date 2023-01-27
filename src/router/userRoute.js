const { Router } = require('express');
const userController = require('../controllers/user.controller');
const { validateEmailAndPassword } = require('../middlewares/validations');

const route = Router();

route.post('/user', validateEmailAndPassword, userController.newUser);

module.exports = route;