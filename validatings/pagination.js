"use strict"

const  { check }   = require('express-validator');
const  { ValidationsResult }   = require('../messages/validations');
   
const InitValidationPagination = [

    check('current_page').optional().notEmpty().isInt(),
    check('page_size').optional().notEmpty().isInt(),
    check('search').optional().notEmpty().isString(),

    (req, res,next) => {
        ValidationsResult(req,res,next);
    },

];
module.exports = { InitValidationPagination } ;
