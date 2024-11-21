'use strick'

var sql =  require('mssql');
var connect = require('../security/connection');

module.exports = class Customer {

    params;

    constructor(data) {
        this.params = data;
    }

    login(res)
    {

        var data = this.params.params;

        connect.get(function (req) {

            req.input('Referencia', data.reference);

            req.execute("[IniciarSesionCliente]", function (err, success) {

                if (err) {
                    return res.send({ error: err.originalError });
                }
                else {
                    return res.send({ rows: success.recordset[0] });
                }
            });
        });
    }
    all(res) {

        var data = this.params.params;

        connect.get(function (req) {

            req.input('PaginaActual', data.current_page);
            req.input('TamanoPagina', data.page_size);
            req.input('Buscador', data.search);

            req.execute("[ObtenerClientesPaginados]", function (err, success) {

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

                req.execute("[ObtenerClientePorId]", function (err, success) {
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
    filter(res) {

        var data = this.params.params;

        connect.get(function (req) {

            req.input('Referencia', data.reference);
    
            req.execute("[ObtenerInformacionClientePorReferencia]", function (err, success) {
                
                if (err) {
                    return res.send({ error: err.originalError });
                }
                else {
                    return res.send({ rows: success.recordset[0] });
                }
            });
        });
    }
    store(res) {

        var data = this.params.body;

        connect.get(function (req) {

            req.input('DepartamentoId', data.department_id);
            req.input('NombreCompleto', data.full_name);
            req.input('Telefono', data.phone);
            req.input('Celular', data.cellular);
            req.input('Correo', data.mail);
            req.input('SaldoFavor', data.balance_favor);
            req.input('DeudaHeredada', data.inherited_debt);
            req.input('DeudaAcumulada', data.accumulated_debt);
            req.input('UsuarioAlt', data.user_alt);
      
            req.execute("[CrearCliente]", function (err, success) {

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
            req.input('DepartamentoId', data.department_id);
            req.input('NombreCompleto', data.full_name);
            req.input('Telefono', data.phone);
            req.input('Celular', data.cellular);
            req.input('Correo', data.mail);
            req.input('SaldoFavor', data.balance_favor);
            req.input('DeudaHeredada', data.inherited_debt);
            req.input('DeudaAcumulada', data.accumulated_debt);
            req.input('UsuarioMod', data.user_alt);

            req.execute("[ActualizarCliente]", function (err, success) {
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

            req.execute("[EliminarCliente]", function (err, success) {
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