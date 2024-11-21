'use strick'

var sql =  require('mssql');
var connect = require('../security/connection');

module.exports = class Department {

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

            req.execute("[ObtenerDepartamentosPaginados]", function (err, success) {

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

                req.execute("[ObtenerDepartamentoPorId]", function (err, success) {
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

            req.input('Referencia', data.reference);
            req.input('Departamento', data.department);
            req.input('Edificio', data.building);
            req.input('EdificioId', data.building_id);
            req.input('UsuarioAlt', data.user_alt);
      
            req.execute("[CrearDepartamento]", function (err, success) {

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
            req.input('Referencia', data.reference);
            req.input('Departamento', data.department);
            req.input('Edificio', data.building);
            req.input('EdificioId', data.building_id);
            req.input('UsuarioMod', data.user_alt);

            req.execute("[ActualizarDepartamento]", function (err, success) {
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

            req.execute("[EliminarDepartamento]", function (err, success) {
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




