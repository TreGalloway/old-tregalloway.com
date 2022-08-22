'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./keystone-ui-options.cjs.prod.js");
} else {
  module.exports = require("./keystone-ui-options.cjs.dev.js");
}
