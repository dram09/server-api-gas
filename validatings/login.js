"use strict"

const  { check }   = require('express-validator');
const  { ValidationsResult }   = require('../messages/validations');
   
const InitValidationLogin = [

    check('user').exists().notEmpty().isString(),
    check('password').exists().notEmpty().isString(),
    (req, res,next) => {
        ValidationsResult(req,res,next);
    },

];
module.exports = { InitValidationLogin } ;
