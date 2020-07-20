const { Router } = require('express');
const { getRoutes } = require('./routes');

const router = Router();
const routes = getRoutes();

routes.forEach((route) => {
    router[route.method](route.path, route.middlewares, route.controller);
});

module.exports = router;
