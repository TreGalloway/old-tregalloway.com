'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./keystone-6-core-admin-ui-context.cjs.prod.js");
} else {
  module.exports = require("./keystone-6-core-admin-ui-context.cjs.dev.js");
}
