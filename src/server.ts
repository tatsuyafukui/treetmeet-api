const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const con = require('./mysqlConnection');
const passport = require('passport');

app.use(passport.initialize());
app.use(express.logger());
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

server.listen(3001, () => {
    console.log(`server start port ${3001}`);
    // console.log(process.env);
});
