const { Router } = require('express');
const httpStatusCodes = require('http-status-codes');
const example_facade = require('../facades/example-facade');

const router = Router();

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
 *       500:
 *         description: "Ops... something wrong happened"
 */
router.get('/', (_, res) => {
    return res.send(example_facade.getAll());
});

/**
 *  @swagger
 * /example/:id:
 *   get:
 *     tags:
 *     - "example"
 *     summary: "Get an example"
 *     description: "Filter all examples and return an example with the given id"
 *     responses:
 *       200:
 *         description: "Ok"
 *       204:
 *         description: "Example not found"
 *       400:
 *         description: "Bad Request"
 *       500:
 *         description: "Ops... something wrong happened"
 */
router.get('/:id', (req, res) => {
    const { id } = req.params;
    return res.send(example_facade.get(id));
});

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
 *              type: "int"
 *           name:
 *              type: "string"
 *           email:
 *              type: "string"
 *     responses:
 *       201:
 *         description: "Example added Successfully"
 *       400:
 *         description: "Bad request"
 *       500:
 *         description: "Ops... something wrong happened"
 */
router.post('/', (req, res) => {
    const example = req.body;
    example_facade.addExample(example);
    return res.sendStatus(httpStatusCodes.CREATED);
});

module.exports = router;
