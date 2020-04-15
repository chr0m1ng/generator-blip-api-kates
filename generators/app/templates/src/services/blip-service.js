const guid = require('uuid/v4');
const { GET } = require('../constants/blip/command-methods');
const BlipClientProvider = require('../providers/blip');

const PING_URI = '/ping';
const CLIENT_PROVIDER = new BlipClientProvider();

const ping = async () => {
    const bot_client = await CLIENT_PROVIDER.getClient();
    const ping_command = {
        id: guid(),
        method: GET,
        uri: PING_URI
    };
    return bot_client.sendCommand(ping_command);
};

module.exports = { ping };
