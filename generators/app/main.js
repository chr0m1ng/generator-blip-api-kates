import Generator from 'yeoman-generator';

import files from './files';
import { validateEmail, validateName } from './validate';

class BlipApiGenerator extends Generator {
    initializing() {
        this.log('Blip Api Kates Generator');
        this.log(
            "Made by Gabriel Rodrigues and based on Robert Achar's generator"
        );
        this.log();
    }

    prompting() {
        const done = this.async();

        const prompts = [
            {
                type: 'input',
                name: 'project',
                message: 'What is the name of your project?',
                default: 'blip-api'
            },
            {
                type: 'input',
                name: 'description',
                message: 'What is the description of your project?',
                default: 'An BLiP bot api project'
            },
            {
                type: 'input',
                name: 'name',
                message: 'What is your name?',
                validate: validateName,
                store: true
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email?',
                validate: validateEmail,
                store: true
            }
        ];

        this.prompt(prompts).then((props) => {
            this.props = props;
            done();
        });
    }

    writing() {
        this.log();
        this.log('🚀  Generating project...');
        this.log();

        const { project, description, name, email } = this.props;
        const templates = {
            project,
            description,
            name,
            email,
            year: new Date().getFullYear()
        };

        files.forEach((file) => {
            this.fs.copyTpl(
                this.templatePath(file.template),
                this.destinationPath(file.destination),
                templates
            );
        });
    }

    install() {
        this.log();
        this.log('📦  Installing dev dependencies...');
        this.log();

        this.npmInstall(
            [
                '@types/jest',
                'coveralls',
                'eslint',
                'eslint-config-airbnb',
                'eslint-config-airbnb-base',
                'eslint-config-prettier',
                'eslint-plugin-import',
                'eslint-plugin-prettier',
                'jest',
                'prettier',
                'superagent',
                'supertest'
            ],
            { 'save-dev': true }
        );

        this.log();
        this.log('...⌛  installing dependencies  📦...');
        this.log();

        this.npmInstall([
            'blip-sdk',
            'bunyan',
            'bunyan-seq',
            'express',
            'express-mung',
            'express-unless',
            'http-status-codes',
            'lime-js',
            'lime-transport-websocket',
            'swagger-jsdoc',
            'swagger-ui-express',
            'uuid',
            'yup'
        ]);
    }

    end() {
        this.log();
        this.log('🎉  Successfully generated!');
    }
}

export default BlipApiGenerator;
