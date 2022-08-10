const { Router } = require('express');
const { validateLoginController } = require('../controller/User.controller');

const admin = Router();

admin.get('/manage', validateLoginController);

module.exports = admin;