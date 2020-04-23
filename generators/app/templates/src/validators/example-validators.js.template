const yup = require('yup');

const add_example_body_schema = yup.object().shape({
    id: yup
        .number()
        .required()
        .positive()
        .integer(),
    name: yup.string().required(),
    email: yup
        .string()
        .email()
        .required()
});

module.exports = { add_example_body_schema };
