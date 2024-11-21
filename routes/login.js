'use strick'

var express = require('express');
var LoginController = require('../controllers/login');
var api = express.Router();

const { InitValidationLogin } = require('../validatings/login');
const { InitValidationLogger } = require('../validatings/logger');

api.post('/login', InitValidationLogin, LoginController.login);
api.post('/logger', InitValidationLogger, LoginController.logger);


module.exports = api;