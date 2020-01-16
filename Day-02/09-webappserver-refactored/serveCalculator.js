const querystring = require('querystring'),
    calculator = require('./calculator');
    
module.exports = function(req, res, next){
    if (req.urlObj.pathname === '/calculator') {
        const data = req.method === 'GET' ? req.query : req.body;
        const op = data.op,
            x = parseInt(data.x),
            y = parseInt(data.y);
        console.log(op, x, y);
        const result = calculator[op](x, y);

        res.write(result.toString());
        res.end();
        next();
    } else {
        next();
    }
}