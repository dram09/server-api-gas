'use strick'

var express = require('express');
var DepartmentController = require('../controllers/department');
var api = express.Router();

const { InitValidationDepartment } = require('../validatings/department');
const { InitValidationPagination } = require('../validatings/pagination');


api.get('/departments/:current_page/:page_size/:search?', InitValidationPagination, DepartmentController.all);
api.get('/department/find/:id', DepartmentController.find);
api.post('/department/store', InitValidationDepartment, DepartmentController.store);
api.put('/department/update/:id', InitValidationDepartment, DepartmentController.update);
api.delete('/department/destroy/:id/:user_alt', DepartmentController.destroy);

module.exports = api;