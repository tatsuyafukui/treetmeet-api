const mysql = require('mysql2');
const util = require('util');

const config = {
    host: '172.17.0.1',
    user: 'tatsuya',
    password: 'Nadenadeboy6/',
    database: 'nomy_development',
    port: 3307,
};

const connection = mysql.createConnection(config);
connection.query = util.promisify(connection.query);

module.exports = connection;
