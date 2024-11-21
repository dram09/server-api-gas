"use strict"

const  { check }   = require('express-validator');
const  { ValidationsResult }   = require('../messages/validations');
   
const InitValidationReceipt = [

    check('customer_id').exists().notEmpty().isInt().escape(),
    check('fol').exists().notEmpty().isString().isLength({ max: 255}).escape(),
    check('previous_measurement').exists().notEmpty().isDecimal().escape(),
    check('current_measurement').exists().notEmpty().isDecimal().escape(),
    check('consumption_m').exists().notEmpty().isDecimal().escape(),
    check('amount_consumption').exists().notEmpty().isDecimal().escape(),
    check('consumption_lt').exists().notEmpty().isDecimal().escape(),
    check('accumulated_debt').exists().notEmpty().isDecimal().escape(),
    check('interests').exists().notEmpty().isDecimal().escape(),
    check('agreement_payment').exists().notEmpty().isDecimal().escape(),
    check('billed_month').exists().notEmpty().isDecimal().escape(),
    check('extraordinary_service_concept').exists().notEmpty().isDecimal().escape(),
    check('amount_service_concept').exists().notEmpty().isDecimal().escape(),
    check('fee').exists().notEmpty().isDecimal().escape(),
    check('date_received').exists().notEmpty().isString().escape(),
    check('start_period').exists().notEmpty().isString().escape(),
    check('end_period').exists().notEmpty().isString().escape(),
    check('price_lt').exists().notEmpty().isDecimal().escape(),

    (req, res,next) => {
        ValidationsResult(req,res,next);
    },

];
module.exports = { InitValidationReceipt } ;
