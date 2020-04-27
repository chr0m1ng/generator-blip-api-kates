const blip_facade = require('../facades/blip-facade');

class HealthCheckController {
    async ping(_, res) {
        return res.send(await blip_facade.ping());
    }
}

module.exports = new HealthCheckController();
