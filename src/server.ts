const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const con = require('./mysqlConnection');
const logger = require('morgan');

const port = process.env.PORT || 3001;

app.use(logger('short'));
app.use((req: any, res: any, next: any) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', async (req: any, res: any) => {
    const result = await con.query('SELECT * from shops');

    const json = {
        shops: result,
    };

    res.json(json);
});

server.listen(port, () => {
    console.log(`server start port ${port}`);
    console.log(process.env.NODE_ENV);
});
