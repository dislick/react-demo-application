require('babel-register')();

var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

documentRef = document;

// preprocess css modules to avoid errors in mocha
var hook = require('css-modules-require-hook');
var sass = require('node-sass');

hook({
  extensions: ['.scss'],
  preprocessCss: data => sass.renderSync({ data }).css
});
