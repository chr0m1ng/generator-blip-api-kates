const assert = require('yeoman-assert');
const test = require('yeoman-test');
const path = require('path');
const validate = require('../generators/app/validate');

describe('TESTS', () => {

  describe('App Tests', () => {

    before((done) => {
      test
        .run(path.join(__dirname, '../generators/app'))
        .withPrompts({
          project: 'awesome-project',
          describe: 'An awesome project',
          name: 'Roberto Achar',
          email: 'robertoachar@gmail.com',
          username: 'robertoachar'
        })
        .on('end', done);
    });

    it('should create a project', (done) => {
      const files = require('../generators/app/files');

      assert.file(files);

      done();
    });
  });

  describe('Validate Tests', () => {

    it('should return true with name', (done) => {
      const message = validate.validateName('Roberto Achar');

      assert.equal(message, true);

      done();
    });

    it('should return an error without name', (done) => {
      const message = validate.validateName('');

      assert.equal(message, 'You have to provide your name');

      done();
    });

    it('should return true with email', (done) => {
      const message = validate.validateEmail('robertoachar@gmail.com');

      assert.equal(message, true);

      done();
    });

    it('should return an error without email', (done) => {
      const message = validate.validateEmail('');

      assert.equal(message, 'You have to provide your email');

      done();
    });

    it('should return true with username', (done) => {
      const message = validate.validateUsername('robertoachar');

      assert.equal(message, true);

      done();
    });

    it('should return an error without username', (done) => {
      const message = validate.validateUsername('');

      assert.equal(message, 'You have to provide your username');

      done();
    });

  });

});
