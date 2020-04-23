const unless = require('express-unless');
const LoggerProvider = require('../providers/logger-provider');

const logger_provider = new LoggerProvider();

const UNLESS_PATHS = ['.js', '.css', '.html', '.png', 'swagger'];

const ROOT_PATH = '/';

const shouldNotLogPath = (req) => {
    const { path } = req;
    return (
        Boolean(UNLESS_PATHS.find((up) => path.includes(up))) ||
        path === ROOT_PATH
    );
};

const getReqLogProperties = (req) => ({
    path: req.path,
    method: req.method,
    headers: req.headers,
    body: req.body,
    params: req.params,
    query: req.query
});

const getResLogProperties = (res) => ({
    status: res.statusCode,
    body: res.body
});

const logReq = (req) => {
    const logger = logger_provider.getLogger();
    const log_req = getReqLogProperties(req);
    logger.info(
        {
            req: log_req
        },
        `Request received: ${log_req.path}`
    );
};

const logRes = (req, res) => {
    const logger = logger_provider.getLogger();
    const log_res = getResLogProperties(res);
    const log_req = getReqLogProperties(req);
    logger.info(
        {
            req: log_req,
            res: log_res
        },
        `Response sent: ${log_req.path}`
    );
};

const requestLogger = (req, _, next) => {
    logReq(req);
    return next();
};

const responseLogger = (req, res, next) => {
    res.path = req.path;
    res.on('finish', () => logRes({ ...req, path: res.path }, res));
    return next();
};

requestLogger.unless = unless;
responseLogger.unless = unless;

module.exports = { requestLogger, responseLogger, shouldNotLogPath };
