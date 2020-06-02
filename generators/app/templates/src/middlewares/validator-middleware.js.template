const { BadRequestError } = require('../models/errors');
const { getRoutes } = require('../routes/routes');
const config = require('../config');

const routes = getRoutes();

const getRoute = (path, method) => {
    return routes.find(
        (r) =>
            `${config.api.base_path}${r.path}` === path &&
            r.method === method.toLowerCase()
    );
};

const getValidator = (path, method) => {
    const route = getRoute(path, method);
    if (route) {
        return route.validator ? route.validator : null;
    }
    return null;
};

const validateReqBody = (req, _, next) => {
    const validator = getValidator(req.path, req.method);
    if (validator !== null) {
        Object.entries(validator).forEach(([location, schema]) => {
            try {
                schema.validateSync(req[location]);
            } catch (error) {
                return next(new BadRequestError(error.message));
            }
        });
    }
    return next();
};

module.exports = validateReqBody;
