'use strict'

var express = require('express');

var routes_user = require('./routes/user');
var routes_building = require('./routes/building');
var routes_customer = require('./routes/customer');
var routes_receipt = require('./routes/receipt');
var routes_department = require('./routes/department');
var routes_login = require('./routes/login');
var routes_agreement = require('./routes/agreement');

var app = express();

//middleware
app.use(express.urlencoded({extended:false}));
app.use(express.json());


// cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
 
    next();
});

// routes
app.use('/api',routes_user);
app.use('/api',routes_customer);
app.use('/api',routes_receipt)
app.use('/api',routes_building);
app.use('/api',routes_department);
app.use('/api',routes_login);
app.use('/api',routes_agreement);
//app.use('/api',{routes_user,routes_customer}),

// exports
module.exports = app;