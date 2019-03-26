const mysql = require('mysql2');
const util = require('util');

let config;

if(process.env.NODE_ENV === 'production') {
    config = {
        host: 'us-cdbr-iron-east-03.cleardb.net',
        user: 'b07e1a3c9d9bc2',
        password: '186a20eb',
        database: 'heroku_f4a8afa3e1ece67',
        port: 3306,
    };
}else {
    config = {
        host: '172.17.0.1',
        user: 'tatsuya',
        password: 'Nadenadeboy6/',
        database: 'nomy_development',
        port: 3307,
    };
}

const connection = mysql.createConnection(config);
connection.query = util.promisify(connection.query);

module.exports = connection;
