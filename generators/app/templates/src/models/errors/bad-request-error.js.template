const { BAD_REQUEST } = require('http-status-codes');

class BadRequestError extends Error {
    constructor(message) {
        super(message);
        this.status = BAD_REQUEST;
    }
}

module.exports = BadRequestError;
