'use strick'

var connect = require('../security/connection');

module.exports = class Measurement{

    params;

    constructor(data){
        this.params = data;
    }
   
    store(res){

        var data = this.params.body;
        
        connect.get(function(req){
    
            req.input('DepartamentoId',data.department_id);
            req.input('LecturaActual',data.current_reading);
            req.input('InicioPeriodo',data.start_period);
            req.input('FinPeriodo',data.end_period);
    
            req.execute("[RegistrarMedicionConsumo]",function(err,success){
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




