var mysql = require('mysql');

var createDBConnection = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'admin',
        database: 'casadocodigo_nodejs'
    });
}

module.exports = function () {
    return createDBConnection;
}
