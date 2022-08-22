'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./keystone-6-core-scripts-cli.cjs.prod.js");
} else {
  module.exports = require("./keystone-6-core-scripts-cli.cjs.dev.js");
}
