"use strict"

const  { check }   = require('express-validator');
const  { ValidationsResult }   = require('../messages/validations');
   
const InitValidationUser = [

    check('user_name').exists().notEmpty().isString().isLength({ max: 255}).escape(),
    check('full_name').exists().notEmpty().isString().isLength({ max: 255}).escape(),
    check('mail').exists().notEmpty().isString().isLength({ max: 255}).escape(),
    check('password').exists().notEmpty().isString().isLength({ max: 255}).escape(),
    check('roles').exists().notEmpty().isArray().escape(),
    check('user_alt').exists().notEmpty().isInt().escape(),
    
    (req, res,next) => {
        ValidationsResult(req,res,next);
    },

];
module.exports = { InitValidationUser } ;
