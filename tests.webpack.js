/**
 * Configuration base on:
 * https://www.codementor.io/reactjs/tutorial/test-reactjs-components-karma-webpack
 * http://kentor.me/posts/testing-react-and-flux-applications-with-karma-and-webpack/
 */

// Polyfill all for testing browser
require('core-js');


// Create a Webpack require context so we can dynamically require our
// project's modules. Exclude test files in this context.
var projectContext = require.context('./scripts', true, /^((?!__tests__).)*.js?$/);

// Extract the module ids that Webpack uses to track modules.
var projectModuleIds = projectContext.keys().map(module =>
  String(projectContext.resolve(module)));

beforeEach(() => {
  // Remove our modules from the require cache before each test case.
  projectModuleIds.forEach(id => delete require.cache[id]);

  /**
   * Automatically mock the built in setTimeout and setInterval functions.
   */
  jasmine.clock().install();
});

afterEach(() => {
  jasmine.clock().uninstall();
});

// Load each test using webpack's dynamic require with contexts.
var context = require.context('./scripts', true, /-test\.js?$/);
context.keys().forEach(context);
