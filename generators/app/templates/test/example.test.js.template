const { OK, NO_CONTENT, CREATED, BAD_REQUEST } = require('http-status-codes');
const request = require('supertest');
const App = require('../src/app');
const config = require('../src/config');

const EXAMPLE_BASE_PATH = `${config.api.base_path}/example`;
const ALL_EXAMPLES = [
    {
        id: 1,
        name: 'Gabriel',
        email: 'gabrielr@take.net'
    },
    {
        id: 2,
        name: 'Chr0m1ng',
        email: 'gabrielrsantoss@icloud.com'
    }
];

const server = new App();
let express_app = null;

describe('Test the example controller', () => {
    beforeAll(async (done) => {
        await server.build();
        express_app = server.app;
        done();
    });

    test('It should response with 200 the GET method and return all examples', async (done) => {
        const response = await request(express_app).get(EXAMPLE_BASE_PATH);
        expect(response.statusCode).toBe(OK);
        expect(response.body).toMatchObject(ALL_EXAMPLES);
        done();
    });
    test('It should response with 200 the GET method and return example with id 2', async (done) => {
        const response = await request(express_app).get(
            `${EXAMPLE_BASE_PATH}/2`
        );
        expect(response.statusCode).toBe(OK);
        expect(response.body).toMatchObject(ALL_EXAMPLES[1]);
        done();
    });
    test('It should response with 204 the GET method and return example with id 3', async (done) => {
        const response = await request(express_app).get(
            `${EXAMPLE_BASE_PATH}/3`
        );
        expect(response.statusCode).toBe(NO_CONTENT);
        done();
    });
    test('It should response with 201 the POST method and return the created example', async (done) => {
        const example_to_be_created = {
            id: 3,
            name: 'Gabriel Santos',
            email: 'gabrielrsantoss@outlook.com'
        };
        const response = await request(express_app)
            .post(EXAMPLE_BASE_PATH)
            .send(example_to_be_created);
        expect(response.statusCode).toBe(CREATED);
        expect(response.body).toMatchObject(example_to_be_created);
        done();
    });
    test('It should response with 400 the POST method', async (done) => {
        const bad_example = {
            name: 'Gabriel Santos',
            email: 'gabrielrsantoss@outlook.com'
        };
        const response = await request(express_app)
            .post(EXAMPLE_BASE_PATH)
            .send(bad_example);
        expect(response.statusCode).toBe(BAD_REQUEST);
        done();
    });
    test('It should response with 400 the POST method', async (done) => {
        const bad_example = {
            id: 2,
            name: 'Gabriel Santos',
            email: 'gabrielrsantoss@outlook.com'
        };
        const response = await request(express_app)
            .post(EXAMPLE_BASE_PATH)
            .send(bad_example);
        expect(response.statusCode).toBe(BAD_REQUEST);
        expect(response.text).toBe(
            `example with id ${bad_example.id} already exists`
        );
        done();
    });
    test('It should response with 400 the POST method', async (done) => {
        const bad_example = {
            id: 2,
            name: 'Gabriel Santos',
            email: 'invalid email'
        };
        const response = await request(express_app)
            .post(EXAMPLE_BASE_PATH)
            .send(bad_example);
        expect(response.statusCode).toBe(BAD_REQUEST);
        done();
    });

    afterAll(async (done) => {
        await server.stopApp();
        done();
    });
});
