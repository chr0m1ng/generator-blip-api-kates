const files = [
    {
        template: 'charts/{project}/templates/_helpers.tpl.template',
        destination: 'charts/<%= project %>/templates/_helpers.tpl'
    },
    {
        template: 'charts/{project}/templates/autoscale.yaml.template',
        destination: 'charts/<%= project %>/templates/autoscale.yaml'
    },
    {
        template: 'charts/{project}/templates/deployment.yaml.template',
        destination: 'charts/<%= project %>/templates/deployment.yaml'
    },
    {
        template: 'charts/{project}/templates/ingress.yaml.template',
        destination: 'charts/<%= project %>/templates/ingress.yaml'
    },
    {
        template: 'charts/{project}/templates/NOTES.txt.template',
        destination: 'charts/<%= project %>/templates/NOTES.txt'
    },
    {
        template: 'charts/{project}/templates/secrets.yaml.template',
        destination: 'charts/<%= project %>/templates/secrets.yaml'
    },
    {
        template: 'charts/{project}/templates/service.yaml.template',
        destination: 'charts/<%= project %>/templates/service.yaml'
    },
    {
        template: 'charts/{project}/.helmignore.template',
        destination: 'charts/<%= project %>/.helmignore'
    },
    {
        template: 'charts/{project}/Chart.yaml.template',
        destination: 'charts/<%= project %>/Chart.yaml'
    },
    {
        template: 'charts/{project}/values.yaml.template',
        destination: 'charts/<%= project %>/values.yaml'
    },
    {
        template: 'src/config/default.json.template',
        destination: 'src/config/default.json'
    },
    {
        template: 'src/config/index.js.template',
        destination: 'src/config/index.js'
    },
    {
        template: 'src/constants/blip/command-methods.js.template',
        destination: 'src/constants/blip/command-methods.js'
    },
    {
        template: 'src/controllers/example-controller.js.template',
        destination: 'src/controllers/example-controller.js'
    },
    {
        template: 'src/controllers/health-check-controller.js.template',
        destination: 'src/controllers/health-check-controller.js'
    },
    {
        template: 'src/facades/blip-facade.js.template',
        destination: 'src/facades/blip-facade.js'
    },
    {
        template: 'src/facades/example-facade.js.template',
        destination: 'src/facades/example-facade.js'
    },
    {
        template: 'src/middlewares/error-middleware.js.template',
        destination: 'src/middlewares/error-middleware.js'
    },
    {
        template: 'src/middlewares/logger-middleware.js.template',
        destination: 'src/middlewares/logger-middleware.js'
    },
    {
        template: 'src/middlewares/res-body-middleware.js.template',
        destination: 'src/middlewares/res-body-middleware.js'
    },
    {
        template: 'src/middlewares/validator-middleware.js.template',
        destination: 'src/middlewares/validator-middleware.js'
    },
    {
        template: 'src/models/errors/bad-request-error.js.template',
        destination: 'src/models/errors/bad-request-error.js'
    },
    {
        template: 'src/models/errors/index.js.template',
        destination: 'src/models/errors/index.js'
    },
    {
        template: 'src/models/errors/no-content-error.js.template',
        destination: 'src/models/errors/no-content-error.js'
    },
    {
        template: 'src/models/route.js.template',
        destination: 'src/models/route.js'
    },
    {
        template: 'src/providers/blip-provider.js.template',
        destination: 'src/providers/blip-provider.js'
    },
    {
        template: 'src/providers/logger-provider.js.template',
        destination: 'src/providers/logger-provider.js'
    },
    {
        template: 'src/routes/example-routes.js.template',
        destination: 'src/routes/example-routes.js'
    },
    {
        template: 'src/routes/health-check-routes.js.template',
        destination: 'src/routes/health-check-routes.js'
    },
    {
        template: 'src/routes/index.js.template',
        destination: 'src/routes/index.js'
    },
    {
        template: 'src/routes/routes.js.template',
        destination: 'src/routes/routes.js'
    },
    {
        template: 'src/services/blip-service.js.template',
        destination: 'src/services/blip-service.js'
    },
    {
        template: 'src/services/example-service.js.template',
        destination: 'src/services/example-service.js'
    },
    {
        template: 'src/validators/example-validators.js.template',
        destination: 'src/validators/example-validators.js'
    },
    {
        template: 'src/app.js.template',
        destination: 'src/app.js'
    },
    {
        template: 'src/server.js.template',
        destination: 'src/server.js'
    },
    {
        template: 'test/example.test.js.template',
        destination: 'test/example.test.js'
    },
    {
        template: 'test/health-check.test.js.template',
        destination: 'test/health-check.test.js'
    },
    {
        template: 'test/swagger.test.js.template',
        destination: 'test/swagger.test.js'
    },
    {
        template: '.editorconfig.template',
        destination: '.editorconfig'
    },
    {
        template: '.eslintignore.template',
        destination: '.eslintignore'
    },
    {
        template: '.eslintrc.json.template',
        destination: '.eslintrc.json'
    },
    {
        template: '.gitattributes.template',
        destination: '.gitattributes'
    },
    {
        template: '.gitignore.template',
        destination: '.gitignore'
    },
    {
        template: '.prettierrc.template',
        destination: '.prettierrc'
    },
    {
        template: 'LICENSE.template',
        destination: 'LICENSE'
    },
    {
        template: 'package.json.template',
        destination: 'package.json'
    },
    {
        template: 'README.md.template',
        destination: 'README.md'
    }
];

export default files;
