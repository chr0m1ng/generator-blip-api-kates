const httpStatusCodes = require('http-status-codes');
const example_facade = require('../facades/example-facade');

class ExampleController {
    getAll(_, res) {
        return res.send(example_facade.getAll());
    }

    get(req, res) {
        let { id } = req.params;
        id = parseInt(id);
        return res.send(example_facade.get(id));
    }

    addExample(req, res) {
        const example = req.body;
        return res
            .status(httpStatusCodes.CREATED)
            .send(example_facade.addExample(example));
    }
}

module.exports = new ExampleController();
