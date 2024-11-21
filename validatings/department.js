"use strict"

const  { check }   = require('express-validator');
const  { ValidationsResult }   = require('../messages/validations');
   
const InitValidationDepartment = [

    check('reference').exists().notEmpty().isString().isLength({ max: 255}).escape(),
    check('department').exists().notEmpty().isString().isLength({ max: 255}).escape(),
    check('building').exists().notEmpty().isString().isLength({ max: 255}).escape(),
    check('building_id').exists().notEmpty().isInt().escape(),
    check('user_alt').exists().notEmpty().isInt().escape(),
    
    (req, res,next) => {
        ValidationsResult(req,res,next);
    },

];
module.exports = { InitValidationDepartment } ;
