const { Router } = require('express');
const controller = require('../controller/User.controller');

const user = Router();

user.post('/', controller.validateLogin);

module.exports = user;