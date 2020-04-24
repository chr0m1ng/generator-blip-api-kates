import assert from 'yeoman-assert';
import test from 'yeoman-test';
import path from 'path';

import files from '../generators/app/files';

describe('Generator Tests', () => {
    const prompts = {
        project: 'blip-bot-project',
        description: 'Blip bot api project',
        name: 'Gabriel Santos',
        email: 'gabrielrsantoss@icloud.com'
    };
    beforeAll((done) => {
        test.run(path.join(__dirname, '../generators/app'))
            .withPrompts(prompts)
            .on('end', done);
    });

    it('should create a project', (done) => {
        files.forEach((file) => {
            assert.file(
                file.destination.replace(/<%= project %>/g, prompts.project)
            );
        });

        done();
    });
});
