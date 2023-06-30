const config = {
  verbose: true,
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['node_modules/(?!axios)'],

  // Specify the path to your Babel configuration file
  // Replace "path/to/.babelrc" with the actual path to your .babelrc file
};

module.exports = config;
