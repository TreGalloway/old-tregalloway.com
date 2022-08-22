'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./keystone-ui-button.cjs.prod.js");
} else {
  module.exports = require("./keystone-ui-button.cjs.dev.js");
}
