"use strict"

const  { check }   = require('express-validator');
const  { ValidationsResult }   = require('../messages/validations');
   
const InitValidationLogger = [

    check('user').exists().notEmpty().isString(),
    check('password').exists().notEmpty().isString(),
    check('user_alt').exists().notEmpty().isNumeric(),
    (req, res,next) => {
        ValidationsResult(req,res,next);
    },

];
module.exports = { InitValidationLogger } ;
