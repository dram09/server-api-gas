"use strict"

const  { check }   = require('express-validator');
const  { ValidationsResult }   = require('../messages/validations');
   
const InitValidationAgreement = [

    check('client_id').exists().notEmpty().isInt(),
    check('department_id').exists().notEmpty().isInt(),
    check('monthly_payments').exists().notEmpty().isDecimal(),
    check('start_date').exists().notEmpty().isDate(),
    check('end_date').exists().notEmpty().isDate(),
    
    (req, res,next) => {
        ValidationsResult(req,res,next);
    },

];
module.exports = { InitValidationAgreement } ;
