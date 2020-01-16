const path = require('path'),
    fs = require('fs');

const staticResExtns = ['.html', '.css', '.js', '.jpg', '.png', '.ico', '.txt', '.json', '.xml'];

function isStatic(resourceName) {
    const resExtn = path.extname(resourceName);
    return staticResExtns.indexOf(resExtn) >= 0;
}

module.exports = function(req, res, next){
    const resourceName = req.urlObj.pathname === '/' ? '/index.html' : req.urlObj.pathname;
    if (isStatic(resourceName)) {
        const resourcePath = path.join(__dirname, resourceName);
        if (!fs.existsSync(resourcePath)) {
            res.statusCode = 404;
            res.end();
            return;
        }
        const stream = fs.createReadStream(resourcePath).pipe(res);
        stream.on('end', _ => next());
        /* const stream = fs.createReadStream(resourcePath);
        stream.on('data', chunk => res.write(chunk));
        stream.on('end',_ => res.end()); */

        /* const fileContents = fs.readFileSync(resourcePath);
        res.write(fileContents);
        res.end(); */
    } else {
        next();
    }
}