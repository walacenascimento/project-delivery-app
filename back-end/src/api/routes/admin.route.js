const { Router } = require('express');
const { validateLoginController } = require('../controller/CreateUser.controller');

const admin = Router();

admin.get('/', validateLoginController);


module.exports = admin;