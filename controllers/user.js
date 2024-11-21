'use strick'

var connect = require('../security/connection');
var User = require('../models/user');

function all(params,res){
    
    var user = new User(params);
    user.all(res);
}

function find(params,res){
    
    var user = new User(params);
    user.find(res);

}
function store(params,res){
        
    var user = new User(params);
    user.store(res);
}

function update(params,res){
            
    var user = new User(params);
    user.update(res);
    
}

function destroy(params,res){
            
    var user = new User(params);
    user.destroy(res);
    
}


module.exports = {
    all,
    find,
    store,
    update,
    destroy
}