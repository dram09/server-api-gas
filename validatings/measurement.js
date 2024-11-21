"use strict"

const  { check }   = require('express-validator');
const  { ValidationsResult }   = require('../messages/validations');
   
const InitValidationMeasurement = [

    check('department_id').exists().notEmpty().isInt(),
    check('current_reading').exists().notEmpty().isDecimal(),
    check('start_period').exists().notEmpty().isDate(),
    check('end_period').exists().notEmpty().isDate(),
    
    (req, res,next) => {
        ValidationsResult(req,res,next);
    },

];
module.exports = { InitValidationMeasurement } ;
