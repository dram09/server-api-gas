'use strick'

var express = require('express');
var BuildingController = require('../controllers/building');
var api = express.Router();

const { InitValidationBuilding } = require('../validatings/building');
const { InitValidationPagination } = require('../validatings/pagination');


api.get('/buildings/:current_page/:page_size/:search?', InitValidationPagination, BuildingController.all);
api.get('/building/find/:id', BuildingController.find);
api.post('/building/store', InitValidationBuilding, BuildingController.store);
api.put('/building/update/:id', InitValidationBuilding, BuildingController.update);
api.delete('/building/destroy/:id/:user_alt', BuildingController.destroy);

module.exports = api;