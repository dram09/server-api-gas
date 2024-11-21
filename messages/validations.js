"use strict"

const { validationResult }  = require('express-validator');

const ValidationsResult = (req,res,next) => {
    try {
        validationResult(req).throw();
        return next();
      } catch (e) {
        return res.status(400).send({ errors: e.mapped() });
      }
};

module.exports = { ValidationsResult } ;