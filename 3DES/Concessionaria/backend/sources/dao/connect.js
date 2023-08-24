const mysql = require('mysql')

const connect = mysql.createConnection({
    host: 'host',
    database: 'concessionaria',
    user: 'root'
})

module.exports = connect