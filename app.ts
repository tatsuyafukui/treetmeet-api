const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req: any, res: any) => {
    console.log(process.env);
    const json = {
        users: [
            { name: 'tatsuya', age: 12 },
            { name: 'yuu', age: 25 },
        ],
    };

    const a = JSON.stringify(json);

    res.send(a);
});

server.listen(3001, () => {
    console.log(`server start port ${3001}`);
    console.log(process.env);
});
