const WebsocketTransport = require('lime-transport-websocket');
const blip_sdk = require('blip-sdk');
const { bot } = require('../config');

let instance = null;

class BlipClientProvider {
    constructor() {
        if (!instance) {
            instance = this;
        }
        return instance;
    }

    async _setupClient() {
        const client = new blip_sdk.ClientBuilder()
            .withIdentifier(bot.identifier)
            .withAccessKey(bot.access_key)
            .withRoutingRule('instance')
            .withInstance(bot.identifier)
            .withTransportFactory(() => new WebsocketTransport())
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

    async stopClient() {
        if (this.client) {
            await this.client.close();
        }
    }
}

module.exports = BlipClientProvider;
