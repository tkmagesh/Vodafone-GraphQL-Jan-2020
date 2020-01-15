const http = require('http'),
    port = 8080;
    /* 
        req -> type IncomingMessage -> Readable Stream
        res -> type ServerResponse -> Writable Stream
    */
const server = http.createServer((req, res) => {
    res.write('<h1>Welcome to Node.js</h1>');
    res.end();
});

server.listen(port);

server.on('listening' , () => console.log(`Server listening on ${port}..!!`))