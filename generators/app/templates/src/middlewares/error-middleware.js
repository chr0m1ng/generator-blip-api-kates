const { INTERNAL_SERVER_ERROR } = require('http-status-codes');

const handleError = (err) => {
    if (err.status) {
        return err;
    }
    return {
        ...err,
        status: INTERNAL_SERVER_ERROR
    };
};

const encapsuleReq = (err, _, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    const error_res = handleError(err);
    return res.status(error_res.status).send(error_res.message);
};

module.exports = encapsuleReq;
