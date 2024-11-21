"use strict"

const  { check }   = require('express-validator');
const  { ValidationsResult }   = require('../messages/validations');
   
const InitValidationBuilding = [

    check('code').exists().notEmpty().isString().isLength({ max: 255}).escape(),
    check('name_tpv').exists().notEmpty().isString().isLength({ max: 255}).escape(),
    check('fee').exists().notEmpty().isDecimal().escape(),
    check('user_alt').exists().notEmpty().isInt().escape(),
    
    (req, res,next) => {
        ValidationsResult(req,res,next);
    },

];
module.exports = { InitValidationBuilding } ;
