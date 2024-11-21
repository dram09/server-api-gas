"use strict"

const  { check }   = require('express-validator');
const  { ValidationsResult }   = require('../messages/validations');
   
const InitValidationCustomer = [

    check('department_id').exists().notEmpty().isInt().escape(),
    check('full_name').exists().notEmpty().isString().isLength({ max: 255}).escape(),
    check('phone').exists().notEmpty().isString().isLength({ max: 50}).escape(),
    check('cellular').exists().notEmpty().isString().isLength({ max: 50}).escape(),
    check('mail').exists().notEmpty().isString().isLength({max: 255}).escape(),
    check('balance_favor').exists().notEmpty().isDecimal().escape(),
    check('inherited_debt').exists().notEmpty().isDecimal().escape(),
    check('accumulated_debt').exists().notEmpty().isDecimal().escape(),
    check('user_alt').exists().notEmpty().isInt().escape(),
    
    (req, res,next) => {
        ValidationsResult(req,res,next);
    },

];
module.exports = { InitValidationCustomer } ;
