'use strick'

var connect = require('../security/connection');
var Building = require('../models/building');

function all(params,res){
    
    var building = new Building(params);
    building.all(res);
}

function find(params,res){
    
    var building = new Building(params);
    building.find(res);

}
function store(params,res){
        
    var building = new Building(params);
    building.store(res);
}

function update(params,res){
            
    var building = new Building(params);
    building.update(res);
    
}

function destroy(params,res){
            
    var building = new Building(params);
    building.destroy(res);
    
}


module.exports = {
    all,
    find,
    store,
    update,
    destroy
}