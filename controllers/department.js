'use strick'

var connect = require('../security/connection');
var Department = require('../models/department');

function all(params,res){
    
    var department = new Department(params);
    department.all(res);
}

function find(params,res){
    
    var department = new Department(params);
    department.find(res);

}
function store(params,res){
        
    var department = new Department(params);
    department.store(res);
}

function update(params,res){
            
    var department = new Department(params);
    department.update(res);
    
}

function destroy(params,res){
            
    var department = new Department(params);
    department.destroy(res);
    
}


module.exports = {
    all,
    find,
    store,
    update,
    destroy
}