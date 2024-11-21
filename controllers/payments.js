'use strick'

var connect = require('../security/connection');
var Payments = require('../models/payments');


function store(params,res){
            
    var payments = new Payments(params);
    payments.store(res);
    
}

module.exports = {
    store
}