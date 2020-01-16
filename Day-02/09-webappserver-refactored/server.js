const http = require('http'),
    dataParser = require('./dataParser'),
    serveStatic = require('./serveStatic'),
    serveCalculator = require('./serveCalculator'),
    notFoundHandler = require('./notFoundHandler'),
    port = 8080;

const server = http.createServer((req, res) => {
    dataParser(req);
    console.log(req.method + '\t' + req.urlObj.pathname);
    serveStatic(req, res);
    serveCalculator(req, res);
    notFoundHandler(res);
});
server.listen(port);
server.on('listening', () => console.log(`Server listening on ${port}..!!`))