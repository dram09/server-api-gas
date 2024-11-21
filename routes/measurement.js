'use strick'

var express = require('express');
var MeasurementController = require('../controllers/measurement');
var api = express.Router();

const { InitValidationMeasurement } = require('../validatings/measurement');

api.post('/store/consumption-measurement', InitValidationMeasurement, MeasurementController.store);


module.exports = api;