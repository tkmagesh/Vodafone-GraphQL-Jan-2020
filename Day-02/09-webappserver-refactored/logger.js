const chalk = require('chalk');

module.exports = function(req, res, next){
    let logMessage = chalk.greenBright(req.method) + '\t' + chalk.cyan(req.urlObj.pathname);
    const startTime = new Date();
    res.on('finish', () => {
        const endTime = new Date(),
            delta = endTime - startTime
        logMessage += '\t' + chalk.redBright(res.statusCode) + '\t' + chalk.magentaBright(delta) + 'ms';
        console.log(logMessage);
    });
    next();
}