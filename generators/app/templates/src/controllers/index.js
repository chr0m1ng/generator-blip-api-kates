/* eslint-disable global-require */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-dynamic-require */
const { Router } = require('express');
const fs = require('fs');

const CONTROLLERS_PATH = './src/controllers';
const CONTROLLER_SUFFIX = '-controller.js';

const router = Router();

const files = fs.readdirSync(CONTROLLERS_PATH);

const controllers = files.filter((f) => f.includes(CONTROLLER_SUFFIX));

for (const controller of controllers) {
    const suffix_index = controller.lastIndexOf(CONTROLLER_SUFFIX);
    const controller_name = controller
        .substr(0, suffix_index)
        .replace(/[-|_]/gm, '');
    router.use(`/${controller_name}`, require(`./${controller}`));
}

module.exports = router;
