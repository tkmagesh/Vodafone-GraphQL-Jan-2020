const http = require('http'),
    dataParser = require('./dataParser'),
    serveStatic = require('./serveStatic'),
    serveCalculator = require('./serveCalculator'),
    notFoundHandler = require('./notFoundHandler'),
    port = 8080;

const _middlewares = [ dataParser, serveStatic, serveCalculator, notFoundHandler ];

function execMiddlewares(req, res, middlewares){
    const first = middlewares[0],
        remaining = middlewares.slice(1),
        next = function(){
            execMiddlewares(req, res, remaining);
        };
    if (typeof first === 'function')
        first(req, res, next);
}

const server = http.createServer((req, res) => {
    execMiddlewares(req, res, _middlewares);
});

server.listen(port);
server.on('listening', () => console.log(`Server listening on ${port}..!!`))