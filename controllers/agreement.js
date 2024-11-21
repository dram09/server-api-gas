'use strick'

var connect = require('../security/connection');
var Agreement = require('../models/agreement');


function store(params,res){
            
    var agreement = new Agreement(params);
        agreement.store(res);
    
}

module.exports = {
    store
}