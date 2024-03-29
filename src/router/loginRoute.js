const { Router } = require('express');
const loginController = require('../controllers/login.controller');
const { validateEmailAndPassword } = require('../middlewares/validations');

const route = Router();

route.post('/login', validateEmailAndPassword, loginController.login);

module.exports = route;