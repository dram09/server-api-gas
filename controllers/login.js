'use strick'

var connect = require('../security/connection');
var Login = require('../models/login');


function login(params,res){
            
    var login = new Login(params);
        login.login(res);
    
}

function logger(params,res){
            
    var login = new Login(params);
        login.logger(res);

}


module.exports = {
    login,
    logger
}