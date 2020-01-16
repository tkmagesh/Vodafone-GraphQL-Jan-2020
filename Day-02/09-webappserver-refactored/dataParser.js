const url = require('url');

module.exports = function(req){
    const urlObj = url.parse(req.url);
    req['urlObj'] = urlObj;
}