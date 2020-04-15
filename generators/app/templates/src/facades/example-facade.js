const example_service = require('../services/example-service');
const { NoContentError, BadRequestError } = require('../models/errors');

const getAll = () => example_service.getExample();

const get = (id) => {
    const all_examples = getAll();
    const filtered_examples = all_examples.filter((e) => e.id == id);
    if (filtered_examples.length > 0) {
        return filtered_examples[0];
    }
    throw new NoContentError(`get example with id ${id}`);
};

const addExample = (example) => {
    const all_examples = getAll();
    const filtered_examples = all_examples.filter((e) => e.id == example.id);
    if (filtered_examples.length > 0) {
        throw new BadRequestError(
            `example with id ${example.id} already exists`
        );
    }
    example_service.addExample(example);
};

module.exports = { getAll, get, addExample };
