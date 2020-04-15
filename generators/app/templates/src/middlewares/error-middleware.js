const { INTERNAL_SERVER_ERROR } = require('http-status-codes');

const handleError = (err) => {
    if (err.status) {
        return err;
    }
    return {
        status: INTERNAL_SERVER_ERROR,
        body: err.message
    };
};

const encapsuleReq = (_, res, next) => {
    try {
        return next();
    } catch (err) {
        const error_res = handleError(err);
        return res.status(error_res.status).send(error_res.body);
    }
};

module.exports = encapsuleReq;
