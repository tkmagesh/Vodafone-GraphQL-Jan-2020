const querystring = require('querystring'),
    calculator = require('./calculator');
    
module.exports = function(req, res, next){
    if (req.urlObj.pathname === '/calculator') {
        if (req.method === 'GET') {
            const query = querystring.parse(req.urlObj.query);
            const op = query.op,
                x = parseInt(query.x),
                y = parseInt(query.y);
            console.log(op, x, y);
            const result = calculator[op](x, y);

            res.write(result.toString());
            res.end();
            next();
        } else {
            let rawData = '';
            req.on('data', chunk => rawData += chunk);
            req.on('end', () => {
                console.log(rawData);
                const body = querystring.parse(rawData);
                const op = body.op,
                    x = parseInt(body.x),
                    y = parseInt(body.y);
                console.log(op, x, y);
                const result = calculator[op](x, y);
                res.write(result.toString());
                res.end();
                next();
            })
        }
    } else {
        next();
    }
}