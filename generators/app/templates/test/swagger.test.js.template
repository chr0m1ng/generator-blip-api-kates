const { OK } = require('http-status-codes');
const request = require('supertest');
const App = require('../src/app');
const config = require('../src/config');

const server = new App();
let express_app = null;

describe('Test the swagger path', () => {
    beforeAll(async (done) => {
        await server.build();
        express_app = server.app;
        done();
    });
    test('It should response with 200 the GET method', async (done) => {
        const response = await request(express_app).get(
            config.api.swagger_path
        );
        expect(response.statusCode).toBe(OK);
        done();
    });
    afterAll(async (done) => {
        await server.stopApp();
        done();
    });
});
