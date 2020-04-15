const { BAD_REQUEST } = require('http-status-codes');

const BadRequestError = class extends Error {
    constructor(message = '', ...args) {
        super(message, ...args);
        this.message = `Bad request error: ${message}`;
        this.status = BAD_REQUEST;
    }
};

module.exports = BadRequestError;
