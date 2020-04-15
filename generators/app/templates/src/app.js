/* eslint-disable import/no-unresolved */
const swagger_ui = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const express = require('express');
const package_info = require('../package.json');
const router = require('./controllers');
const BlipClientProvider = require('./providers/blip');
const errorMiddleware = require('./middlewares/error-middleware');

const SWAGGER_API_PATH = '/';
const BASE_API_PATH = '/api/v1';
const CONTROLLERS_PATH = './src/controllers/*.js';
const DEFAULT_PORT = 3333;
const PORT = process.env.PORT || DEFAULT_PORT;

const App = class {
    constructor() {
        this.server = express();
    }

    async build() {
        this.setupPreRoutesMiddlewares();
        this.setupRoutes();
        this.setupPosRoutesMiddlewares();
        await this.setupBlipClient();
    }

    start() {
        this.server.listen(PORT, () => {
            console.log(`server listening on port: ${PORT}`);
        });
    }

    setupPreRoutesMiddlewares() {
        this.server.use(express.json());
    }

    setupPosRoutesMiddlewares() {
        this.server.use(errorMiddleware);
        this.setupSwagger();
    }

    setupSwagger() {
        const options = {
            swaggerDefinition: {
                info: {
                    title: package_info.name,
                    version: package_info.version,
                    description: package_info.description
                },
                basePath: BASE_API_PATH
            },
            apis: [CONTROLLERS_PATH]
        };
        const specs = swaggerJsDoc(options);
        this.server.use(
            SWAGGER_API_PATH,
            swagger_ui.serve,
            swagger_ui.setup(specs)
        );
    }

    setupRoutes() {
        this.server.use(BASE_API_PATH, router);
    }

    async setupBlipClient() {
        this.blip_client_provider = new BlipClientProvider();
        await this.blip_client_provider.getClient();
    }
};

module.exports = App;
