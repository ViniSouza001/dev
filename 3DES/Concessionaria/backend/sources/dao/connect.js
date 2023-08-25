const mysql = require('mysql')

const connect = mysql.createConnection({
    host: 'localhost',
    database: 'concessionaria',
    user: 'root'
})

module.exports = connect