"use strict"

const  { check }   = require('express-validator');
const  { ValidationsResult }   = require('../messages/validations');
   
const InitValidationPayments = [

    check('client_id').exists().notEmpty().isInt(),
    check('amount_pay').exists().notEmpty().isDecimal(),

    (req, res,next) => {
        ValidationsResult(req,res,next);
    },

];
module.exports = { InitValidationPayments } ;
