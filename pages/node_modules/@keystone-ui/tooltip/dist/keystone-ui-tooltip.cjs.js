'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./keystone-ui-tooltip.cjs.prod.js");
} else {
  module.exports = require("./keystone-ui-tooltip.cjs.dev.js");
}
