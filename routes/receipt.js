'use strick'

var express = require('express');
var ReceiptController = require('../controllers/receipt');
var api = express.Router();

const { InitValidationReceipt } = require('../validatings/receipt');

api.post('/receipt/store', InitValidationReceipt, ReceiptController.store);


module.exports = api;