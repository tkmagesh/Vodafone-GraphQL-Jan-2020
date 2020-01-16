const _middlewares = [];

function execMiddlewares(req, res, middlewares) {
    const first = middlewares[0],
        remaining = middlewares.slice(1),
        next = function () {
            execMiddlewares(req, res, remaining);
        };
    if (typeof first === 'function')
        first(req, res, next);
}

function app(req, res){
    execMiddlewares(req, res, _middlewares);
}

app['use'] = function(middleware){
    _middlewares.push(middleware);
}

module.exports = app;