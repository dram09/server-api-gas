'use strick'

var sql =  require('mssql');
var connect = require('../security/connection');

module.exports = class Receipt {

    params;

    constructor(data) {
        this.params = data;
    }

    store(res) {

        var data = this.params.body;

        connect.get(function (req) {

            req.input('ClienteId', data.customer_id);
            req.input('Folio', data.fol);
            req.input('MedicionAnterior', data.previous_measurement);
            req.input('MedicionActual', data.current_measurement);
            req.input('ConsumoM3', data.consumption_m);
            req.input('MontoConsumo', data.amount_consumption);
            req.input('ConsumoLT', data.consumption_lt);
            req.input('DeudaAcumulada', data.accumulated_debt);
            req.input('Intereses', data.interests);
            req.input('PagoConvenio', data.agreement_payment);
            req.input('MesFacturado', data.billed_month);
            req.input('ConceptoServicioExtraordinario', data.extraordinary_service_concept);
            req.input('MontoServicioExtraordinario', data.amount_service_concept);
            req.input('Honorarios', data.fee);
            req.input('FechaRecibo', data.date_received);
            req.input('InicioPeriodo', data.start_period);
            req.input('FinPeriodo', data.end_period);
            req.input('PrecioLt', data.price_lt);
      
            req.execute("[RegistrarReciboPorValidar]", function (err, success) {

                if (err) {
                    return res.send({ error: err.originalError });
                }
                else {
                    return res.send({ rows: success.recordset[0] });
                }
            });
        });
    }
};




