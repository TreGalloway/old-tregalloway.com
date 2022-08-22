'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./keystone-6-core-admin-ui-utils.cjs.prod.js");
} else {
  module.exports = require("./keystone-6-core-admin-ui-utils.cjs.dev.js");
}
