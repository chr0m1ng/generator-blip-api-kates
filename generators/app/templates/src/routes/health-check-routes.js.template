const { constants } = require('http2');
const Route = require('../models/route');
const healthCheckController = require('../controllers/health-check-controller');

const routes = [];

/**
 *  @swagger
 * /healthcheck:
 *   get:
 *     tags:
 *     - "healthcheck"
 *     summary: "Ping"
 *     description: "Ping the BLiP bot"
 *     responses:
 *       200:
 *         description: "Ok"
 */
routes.push(
    new Route(
        '/healthcheck',
        constants.HTTP2_METHOD_GET,
        healthCheckController.ping
    )
);

module.exports = routes;
