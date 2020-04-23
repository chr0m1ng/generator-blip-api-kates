const example_service = require('../services/example-service');
const { NoContentError, BadRequestError } = require('../models/errors');

const getAll = () => example_service.getExample();

const get = (id) => {
    const all_examples = getAll();
    const example = all_examples.find((e) => e.id === id);
    if (example) {
        return example;
    }
    throw new NoContentError(`get example with id ${id}`);
};

const addExample = (example) => {
    const all_examples = getAll();
    const found_example = all_examples.find((e) => e.id === example.id);
    if (found_example) {
        throw new BadRequestError(
            `example with id ${example.id} already exists`
        );
    }
    return example_service.addExample(example);
};

module.exports = { getAll, get, addExample };
