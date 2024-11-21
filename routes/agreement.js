'use strick'

var express = require('express');
var AgreementController = require('../controllers/agreement');
var api = express.Router();

const { InitValidationAgreement } = require('../validatings/agreement');

api.post('/store/agreement', InitValidationAgreement, AgreementController.store);


module.exports = api;