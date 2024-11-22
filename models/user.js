'use strick'

var sql =  require('mssql');
var connect = require('../security/connection');

module.exports = class User {

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

            req.execute("[ObtenerUsuariosConPaginacion]", function (err, success) {

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

                req.execute("[LeerUsuario]", function (err, success) {
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

            const table_roles = new sql.Table('IntList');
                  table_roles.columns.add("RolId", sql.Int());

            data.roles.forEach(key => {
                table_roles.rows.add(key);
            });

            req.input('NombreUsuario', data.user_name);
            req.input('NombreCompleto', data.full_name);
            req.input('Correo', data.mail);
            req.input('Password', data.password);
            req.input('Roles', sql.TVP,table_roles);
            req.input('UsuarioAlt', data.user_alt);
      
            req.execute("[RegistrarUsuario]", function (err, success) {

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

            const table_roles = new sql.Table('IntList');
                  table_roles.columns.add("RolId", sql.Int());

            data.roles.forEach(key => {
                table_roles.rows.add(key);
            });

            req.input('UsuarioId', id);
            req.input('NombreUsuario', data.user_name);
            req.input('NombreCompleto', data.full_name);
            req.input('Correo', data.mail);
            req.input('Password', data.password);
            req.input('ChangePassword', false);
            req.input('Roles', sql.TVP, table_roles);
            req.input('UsuarioMod', data.user_alt);

            req.execute("[ActualizarUsuario]", function (err, success) {
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

            req.execute("[EliminarUsuario]", function (err, success) {
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




