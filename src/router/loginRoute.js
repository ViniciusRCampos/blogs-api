const { Router } = require('express');
const loginController = require('../controllers/login.controller');
const { validateLogin } = require('../middlewares/validations');

const route = Router();

route.post('/login', validateLogin, loginController.login);

module.exports = route;