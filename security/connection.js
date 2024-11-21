var sql = require('mssql');

function Connect()
{
    this.pool = null;

    this.start = function(){
        this.pool = {
            server:'gas-serv.database.windows.net',
            database: 'gas-db',
            user:'admin-gas',
            password:'Ticz13568',
            //port:1433
        }
        return sql.connect(this.pool);
    }

    this.get = function(callback){

        var cn = new sql.ConnectionPool(this.pool,function(err,conection){
            var req = new sql.Request(cn);
            callback(req);
        }); 
    }
}
module.exports = new Connect();

    
 

