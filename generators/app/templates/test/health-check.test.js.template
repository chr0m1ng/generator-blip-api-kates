const { OK } = require('http-status-codes');
const request = require('supertest');
const App = require('../src/app');
const config = require('../src/config');

const HEALTH_CHECK_PATH = `${config.api.base_path}/healthcheck`;

const server = new App();
let express_app = null;

describe('Test the helth check', () => {
    beforeAll(async (done) => {
        await server.build();
        express_app = server.app;
        done();
    });
    test('It should response with 200 the GET method', async (done) => {
        const response = await request(express_app).get(HEALTH_CHECK_PATH);
        expect(response.statusCode).toBe(OK);
        done();
    });
    afterAll(async (done) => {
        await server.stopApp();
        done();
    });
});
