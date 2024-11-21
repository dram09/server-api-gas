'use strick'

var express = require('express');
var CustomerController = require('../controllers/customer');
var api = express.Router();

const { InitValidationCustomer } = require('../validatings/customer');
const { InitValidationPagination } = require('../validatings/pagination');

api.get('/customer/:reference',CustomerController.filter);

api.get('/login/customer/:reference', CustomerController.login);
api.get('/customers/:current_page/:page_size/:search?', InitValidationPagination, CustomerController.all);
api.get('/customer/find/:id', CustomerController.find);
api.post('/customer/store', InitValidationCustomer, CustomerController.store);
api.put('/customer/update/:id', InitValidationCustomer, CustomerController.update);
api.delete('/customer/destroy/:id/:user_alt', CustomerController.destroy);


module.exports = api;