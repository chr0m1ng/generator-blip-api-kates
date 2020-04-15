const Websocket_transport = require('lime-transport-websocket');
const blip_sdk = require('blip-sdk');
const config = require('../config');

let instance = null;

const BlipClientProvider = class {
    constructor() {
        if (!instance) {
            instance = this;
        }
        return instance;
    }

    async _setupClient() {
        const client = new blip_sdk.ClientBuilder()
            .withIdentifier(config.bot.identifier)
            .withAccessKey(config.bot.accessKey)
            .withRoutingRule('instance')
            .withInstance(config.bot.identifier)
            .withTransportFactory(() => new Websocket_transport())
            .build();
        await client.connect();

        this.client = client;
    }

    async getClient() {
        if (!this.client) {
            // eslint-disable-next-line no-underscore-dangle
            await this._setupClient();
        }
        return this.client;
    }
};

module.exports = BlipClientProvider;
