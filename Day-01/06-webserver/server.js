const http = require('http'),
    fs = require('fs'),
    path = require('path'),
    url = require('url'),
    port = 8080;

const server = http.createServer((req, res) => {
    const urlObj = url.parse(req.url),
        resourceName = urlObj.pathname === '/' ? '/index.html' : urlObj.pathname,
        resourcePath = path.join(__dirname, resourceName);
    console.log(req.method + '\t' + urlObj.pathname);
    if (!fs.existsSync(resourcePath)){
        res.statusCode = 404;
        res.end();
        return;
    }
    fs.createReadStream(resourcePath).pipe(res);    
});
server.listen(port);
server.on('listening' , () => console.log(`Server listening on ${port}..!!`))