/* eslint-disable global-require */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-dynamic-require */
const fs = require('fs');

const ROUTES_PATH = './src/routes';
const ROUTES_SUFFIX = '-routes.js';

let routes = null;

const getRoutes = () => {
    if (routes) {
        return routes;
    }

    const files = fs.readdirSync(ROUTES_PATH);
    const routes_files = files.filter((f) => f.includes(ROUTES_SUFFIX));

    routes = routes_files.reduce((acc, routes_file) => {
        const file_path = `./${routes_file}`;
        const file_routes = require(file_path);
        return [...acc, ...file_routes];
    }, []);

    return routes;
};

module.exports = { getRoutes };
