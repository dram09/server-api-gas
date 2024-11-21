'use strick'

var connect = require('../security/connection');

module.exports = class Agreement{

    params;

    constructor(data){
        this.params = data;
    }
   
    store(res){

        var data = this.params.body;
        
        connect.get(function(req){
    
            req.input('ClienteId',data.client_id);
            req.input('DepartamentoId',data.department_id);
            req.input('Mensualidad',data.monthly_payments);
            req.input('FechaInicio',data.start_date);
            req.input('FechaFin',data.end_date);
    
            req.execute("[GuardarConvenio]",function(err,success){
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




