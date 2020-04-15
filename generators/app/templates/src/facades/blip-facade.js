const blip_service = require('../services/blip-service');

const ping = async () => {
    const command_res = await blip_service.ping();
    return command_res.resource;
};

module.exports = { ping };
