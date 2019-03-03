console.log("Hello! Node.js × TypeScript");
const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
app.get('/', (req, res) => {
    console.log(process.env);
    res.send('API ss');
});
server.listen(3001, () => {
    console.log(`server start port ${3001}`);
    console.log(process.env);
});
//# sourceMappingURL=app.js.map