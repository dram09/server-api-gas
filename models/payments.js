'use strick'

var connect = require('../security/connection');

module.exports = class Payments{

    params;

    constructor(data){
        this.params = data;
    }
   
    store(res){

        var data = this.params.body;
        
        connect.get(function(req){
    
            req.input('ClienteID',data.client_id);
            req.input('MontoPago',data.amount_pay);
    
            req.execute("[GuardarPagoCliente]",function(err,success){
                if(err){ 
                    return res.send({error: err.originalError});
                }
                else{
                    return res.send({result: success.recordset[0]});
                }
            });
        });
    }

};




