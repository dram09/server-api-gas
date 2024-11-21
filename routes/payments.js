'use strick'

var express = require('express');
var PaymentsController = require('../controllers/payments');
var api = express.Router();

const { InitValidationPayments } = require('../validatings/payments');

api.post('/store/customer-payment', InitValidationPayments, PaymentsController.store);


module.exports = api;