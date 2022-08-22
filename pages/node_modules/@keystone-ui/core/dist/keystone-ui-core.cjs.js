'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./keystone-ui-core.cjs.prod.js");
} else {
  module.exports = require("./keystone-ui-core.cjs.dev.js");
}
