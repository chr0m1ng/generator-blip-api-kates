# Generator BLiP API Kates

> Yeoman generator for a API using BLiP and ready to Kubernetes and helm.

[![NPM Version][npm-badge]][npm-url]
[![Downloads][npm-downloads-badge]][npm-downloads-url]
[![Travis Status][travis-badge]][travis-url]
[![CircleCI Status][circleci-badge]][circleci-url]
[![AppVeyor Status][appveyor-badge]][appveyor-url]
[![Coveralls Status][coveralls-badge]][coveralls-url]
[![License][license-badge]][license-url]

## File Structure

Assuming your folder is called `blip-bot-project`.
Whatever name you choose will replace all occurrences of that string in the project

```js
 📁blip-bot-project
 |__📁charts
    |__📁blip-bot-project
    |   |__📁templates
    |   |   |__📃{_helpers.tpl}
    |   |   |__📃{autoscale.yaml}
    |   |   |__📃{deployment.yaml}
    |   |   |__📃{ingress.yaml}
    |   |   |__📃{secrets.yaml}
    |   |   |__📃{service.yaml}
    |   |__📃{.helmignore}
    |   |__📃{Chart.yaml}
    |   |__📃{values.yaml}
 |__📁src
    |__📁config // The app config
    |   |__📃{default.json}
    |   |__📃{index.js}
    |   |   |__📃{...}
    |__📁controllers // The controllers
    |   |__📃{example-controller.js}
    |   |__📃{health-check-controller.js}
    |__📁facades // The facades
    |   |__📃{blip-facade.js}
    |   |__📃{example-facade.js}
    |__📁middlewares // The middlewares
    |   |__📃{error-middleware.js}
    |   |__📃{logger-middleware.js}
    |   |__📃{res-body-middleware.js}
    |   |__📃{validator-middleware.js}
    |__📁models // The models
    |   |__📁errors // The error models
    |   |   |__📃{bad-request-error.js}
    |   |   |__📃{index.js}
    |   |   |__📃{no-content-error.js}
    |   |__📃{route.js}
    |__📁providers // The providers
    |   |__📃{blip-provider.js}
    |   |__📃{logger-provider.js}
    |__📁routes // The routes
    |   |__📃{example-routes.js}
    |   |__📃{health-check-routes.js}
    |   |__📃{index.js}
    |   |__📃{routes.js}
    |__📁services // The services
    |   |__📃{blip-service.js}
    |   |__📃{example-service.js}
    |__📁validators // The schema validators
    |   |__📃{example-validator.js}
    |__📃{app.js} // The app startup config
    |__📃{server.js}
|__📁test // The tests
|   |__📃{example.test.js}
|   |__📃{health-check.test.js}
|   |__📃{swagger.test.js}
|__⚙️.editorconfig
|__⚙️.eslintignore
|__⚙️.eslintrc.json
|__⚙️.gitattributes
|__⚙️.gitignore
|__⚙️.prettierrc
|__⚙️LICENSE
|__⚙️package.json
|__⚙️README.md
|__🐋Dockerfile
```

## Usage

### Generate without install Yeoman

```bash
# Create a directory for your project && Change into directory
$ mkdir my-api-name && cd my-api-name

# Generate a project
$ npm init yo generator-blip-api-kates
```

### Generate installing Yeoman

-   Install Yeoman

```bash
$ npm install -g yo
```

-   Install Generator

```bash
$ npm install -g generator-blip-api-kates
```

-   Creating a project

```bash
# Create a directory for your project && Change into directory
$ take my-api-name
# Or
$ mkdir my-api-name && cd my-api-name

# Generate a project
$ yo blip-api-kates
```

-   Running project

| Action                                   | Usage               |
|------------------------------------------|---------------------|
| Starting development mode                | `npm start`         |
| Linting code                             | `npm run lint`      |
| Running unit tests                       | `npm run jest`      |
| Running lint + tests                     | `npm test`          |
| Running code coverage                    | `npm run coverage`  |
| Sending coverage results to Coveralls.io | `npm run coveralls` |

## Development

### Prerequisites

-   Install [Node.js](https://nodejs.org)
-   Install [npm](https://www.npmjs.com/)
-   Install Yeoman CLI

```bash
$ npm install -g yo
```

### Clone the repo

```bash
$ git clone https://github.com/chr0m1ng/generator-blip-api-kates.git
```

### Run generator

```bash
# Change into directory
$ cd generator-blip-api-kates

# Link generator
$ npm link

# Run generator
$ yo blip-api-kates
```

## Author

-   [Gabriel Santos](https://twitter.com/alitalvez)

This generator was created based on original [oss generator](https://github.com/robertoachar/generator-blip-api-kates) created by [Roberto Achar](https://twitter.com/robertoachar) .

## License

[MIT](https://github.com/chr0m1ng/generator-blip-api-kates/blob/master/LICENSE)

[npm-badge]: https://img.shields.io/npm/v/generator-blip-api-kates.svg
[npm-url]: https://www.npmjs.com/package/generator-blip-api-kates
[npm-downloads-badge]: https://img.shields.io/npm/dt/generator-blip-api-kates.svg
[npm-downloads-url]: https://www.npmjs.com/package/generator-blip-api-kates
[travis-badge]: https://travis-ci.org/chr0m1ng/generator-blip-api-kates.svg?branch=master
[travis-url]: https://travis-ci.org/chr0m1ng/generator-blip-api-kates
[circleci-badge]: https://circleci.com/gh/chr0m1ng/generator-blip-api-kates/tree/master.svg?style=shield
[circleci-url]: https://circleci.com/gh/chr0m1ng/generator-blip-api-kates
[appveyor-badge]: https://ci.appveyor.com/api/projects/status/github/chr0m1ng/generator-blip-api-kates?branch=master&svg=true
[appveyor-url]: https://ci.appveyor.com/project/chr0m1ng/generator-blip-api-kates
[coveralls-badge]: https://coveralls.io/repos/github/chr0m1ng/generator-blip-api-kates/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/chr0m1ng/generator-blip-api-kates?branch=master
[license-badge]: https://img.shields.io/github/license/chr0m1ng/generator-blip-api-kates.svg
[license-url]: https://opensource.org/licenses/MIT
