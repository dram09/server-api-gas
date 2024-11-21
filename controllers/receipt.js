'use strick'

var connect = require('../security/connection');
var Receipt = require('../models/receipt');

function store(params,res){

    var receipt = new Receipt(params);
    receipt.store(res);
}

module.exports = {
    store
}