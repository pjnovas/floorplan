module.exports = {

  app: {
    files: [ 'src/**/*.less', 'dist/<%= pkg.name %>.js' ],
    tasks: [ 'eslint', 'less' ],
    options: {
      atBegin: true
    }
  },

  tests: {
    files: [ 'test/browserified_tests.js' ],
    tasks: [ 'eslint', 'mocha_phantomjs' ],
    options: {
      atBegin: true
    }
  },

};
