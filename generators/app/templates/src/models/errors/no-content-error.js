const { NO_CONTENT } = require('http-status-codes');

const NoContentError = class extends Error {
    constructor(message = '', ...args) {
        super(message, ...args);
        this.message = `No content was found: ${message}`;
        this.status = NO_CONTENT;
    }
};

module.exports = NoContentError;
