const { constants } = require('http2');
const Route = require('../models/route');
const exampleController = require('../controllers/example-controller');
const { add_example_body_schema } = require('../validators/example-validators');

const routes = [];

/**
 *  @swagger
 * /example:
 *   get:
 *     tags:
 *     - "example"
 *     summary: "Get all examples"
 *     description: "Get all given service examples"
 *     responses:
 *       200:
 *         description: "Ok"
 */
routes.push(
    new Route('/example', constants.HTTP2_METHOD_GET, exampleController.getAll)
);
/**
 *  @swagger
 * /example/{id}:
 *   get:
 *     tags:
 *     - "example"
 *     summary: "Get an example"
 *     description: "Filter all examples and return an example with the given id"
 *     parameters:
 *     - in: "path"
 *       name: "id"
 *       description: "The id to lookup"
 *       required: true
 *     responses:
 *       200:
 *         description: "Ok"
 *       204:
 *         description: "Example not found"
 *       400:
 *         description: "Bad Request"
 */
routes.push(
    new Route('/example/:id', constants.HTTP2_METHOD_GET, exampleController.get)
);
/**
 *  @swagger
 * /example:
 *   post:
 *     tags:
 *     - "example"
 *     summary: "Add a new example"
 *     description: "Add the given example"
 *     parameters:
 *     - in: "body"
 *       name: "body"
 *       description: "The example to be added"
 *       required: true
 *       schema:
 *         type: "object"
 *         properties:
 *           id:
 *              type: "integer"
 *           name:
 *              type: "string"
 *           email:
 *              type: "string"
 *     responses:
 *       201:
 *         description: "Example added Successfully"
 *       400:
 *         description: "Bad request"
 */
routes.push(
    new Route(
        '/example',
        constants.HTTP2_METHOD_POST,
        exampleController.addExample,
        { body: add_example_body_schema }
    )
);

module.exports = routes;
