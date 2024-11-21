'use strick'

var sql =  require('mssql');
var connect = require('../security/connection');

module.exports = class Building {

    params;

    constructor(data) {
        this.params = data;
    }

    all(res) {

        var data = this.params.params;

        connect.get(function (req) {

            req.input('PaginaActual', data.current_page);
            req.input('TamanoPagina', data.page_size);
            req.input('Buscador', data.search);

            req.execute("[ObtenerEdificiosPaginados]", function (err, success) {

                if (err) {
                    return res.send({ error: err.originalError });
                }
                else {
                    return res.send({ rows: success.recordset });
                }
            });
        });
    }

    find(res) {
        {
            var data = this.params.params;

            connect.get(function (req) {

                req.input('Id', data.id);

                req.execute("[ObtenerEdificioPorId]", function (err, success) {
                    if (err) {
                        return res.send({ error: err.originalError });
                    }
                    else {
                         return res.send({rows: success.recordset[0]});
                    }
                });
            });
        }
    }

    store(res) {

        var data = this.params.body;

        connect.get(function (req) {

            req.input('Codigo', data.code);
            req.input('NombreTpv', data.name_tpv);
            req.input('Honorarios', data.fee);
            req.input('UsuarioAlt', data.user_alt);
      
            req.execute("[CrearEdificio]", function (err, success) {

                if (err) {
                    return res.send({ error: err.originalError });
                }
                else {
                    return res.send({ rows: success.recordset[0] });
                }
            });
        });
    }

    update(res) {

        var id = this.params.params.id;
        var data = this.params.body;
      
        connect.get(function (req) {


            req.input('Id', id);
            req.input('Codigo', data.code);
            req.input('NombreTpv', data.name_tpv);
            req.input('Honorarios', data.fee);
            req.input('UsuarioMod', data.user_alt);

            req.execute("[ActualizarEdificio]", function (err, success) {
                if (err) {
                    return res.send({ error: err.originalError });
                }
                else {
                    return res.send({ rows: success.recordset[0] });
                }
            });
        });
    }

    destroy(res) {

        var data = this.params.params;

        connect.get(function (req) {

            req.input('Id', data.id);
            req.input('UsuarioMod', data.user_alt);

            req.execute("[EliminarEdificio]", function (err, success) {
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




