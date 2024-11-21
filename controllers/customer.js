'use strick'

var connect = require('../security/connection');
var Customer = require('../models/customer');

function login(params,res)
{
    var customer = new Customer(params);
    customer.login(res);
}

function all(params,res){
    
    var customer = new Customer(params);
    customer.all(res);
}

function find(params,res){
    
    var customer = new Customer(params);
    customer.find(res);

}
function filter(params,res){
    
    var customer = new Customer(params);
    customer.filter(res);
    
}
function store(params,res){
        
    var customer = new Customer(params);
    customer.store(res);
}

function update(params,res){
            
    var customer = new Customer(params);
    customer.update(res);
    
}

function destroy(params,res){
            
    var customer = new Customer(params);
    customer.destroy(res);
    
}


module.exports = {
    login,
    all,
    find,
    filter,
    store,
    update,
    destroy
}