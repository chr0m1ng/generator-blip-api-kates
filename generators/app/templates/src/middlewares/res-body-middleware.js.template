const mung = require('express-mung');

const addBodyToRes = (body, _, res) => {
    res.body = body;
    return body;
};

module.exports = mung.json(addBodyToRes);
