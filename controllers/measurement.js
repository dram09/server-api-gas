'use strick'

var connect = require('../security/connection');
var Measurement = require('../models/measurement');


function store(params,res){
            
    var measurement = new Measurement(params);
        measurement.store(res);
    
}

module.exports = {
    store
}