const { INTERNAL_SERVER_ERROR } = require('http-status-codes');
const LoggerProvider = require('../providers/logger-provider');

const logger_provider = new LoggerProvider();

const logError = (err, req, res) => {
    const logger = logger_provider.getLogger();
    const log_res = {
        status: res.statusCode,
        body: res.body
    };
    const log_req = {
        path: req.url,
        method: req.method,
        headers: req.headers,
        body: req.body,
        params: req.params,
        query: req.query
    };
    const log_err = {
        message: err.message,
        stack: err.stack
    };
    logger.error(
        {
            req: log_req,
            res: log_res,
            err: log_err
        },
        err.message
    );
};

const handleError = (err) => {
    if (err.status) {
        return err;
    }
    return {
        ...err,
        status: INTERNAL_SERVER_ERROR
    };
};

const encapsuleRoute = (err, req, res, next) => {
    if (res.headersSent) {
        logError(err, req, res);
        return next(err);
    }
    const error_res = handleError(err);

    logError(err, req, res);

    return res.status(error_res.status).send(error_res.message);
};

module.exports = encapsuleRoute;
