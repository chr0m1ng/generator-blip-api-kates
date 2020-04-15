const { Router } = require('express');
const blip_facade = require('../facades/blip-facade');

const router = Router();

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
 *       500:
 *         description: "Ops... something wrong happened"
 */
router.get('/', async (_, res) => {
    return res.send(await blip_facade.ping());
});

module.exports = router;
