'use strick'

var express = require('express');
var UserController = require('../controllers/user');
var api = express.Router();

const { InitValidationUser } = require('../validatings/user');
const { InitValidationPagination } = require('../validatings/pagination');


api.get('/users/:current_page/:page_size/:search?', InitValidationPagination, UserController.all);
api.get('/user/find/:id', UserController.find);
api.post('/user/store', InitValidationUser, UserController.store);
api.put('/user/update/:id', InitValidationUser, UserController.update);
api.delete('/user/destroy/:id', UserController.destroy);

module.exports = api;