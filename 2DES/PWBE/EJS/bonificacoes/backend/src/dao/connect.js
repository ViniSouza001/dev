const mysql = require('mysql');
const con = mysql.createConnection({
    database: 'bonificacoes',
    user: 'root',
    host: 'localhost'
});

module.exports = con;