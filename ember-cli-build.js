'use strict';
// app.import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
var nodeSass = require("node-sass");

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
    sassOptions: {
      implementation: nodeSass,
    },
//     outputPaths: {
//       app: {
//         css: {
//           'stylesheet': '/assets/stylesheet.css'
//         }
//       }
//     }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
