const http = require('http'),
    path = require('path'),
    dataParser = require('./dataParser'),
    logger = require('./logger'),
    serveStatic = require('./serveStatic'),
    serveCalculator = require('./serveCalculator'),
    notFoundHandler = require('./notFoundHandler'),
    app = require('./app'),    
    port = 8080;

const staticFolderPath = path.join(__dirname, 'public')
app.use(dataParser);
app.use(logger);
app.use(serveStatic(staticFolderPath));
app.use(serveCalculator);
app.use(notFoundHandler);


const server = http.createServer(app);

server.listen(port);
server.on('listening', () => console.log(`Server listening on ${port}..!!`))