const mysql = require('mysql')

const dao = mysql.createConnection({
    host: 'localhost',
    database: 'usuarios',
    user: 'root'
})

module.exports = dao