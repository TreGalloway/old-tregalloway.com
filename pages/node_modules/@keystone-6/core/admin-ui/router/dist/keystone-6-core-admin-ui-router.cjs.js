'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./keystone-6-core-admin-ui-router.cjs.prod.js");
} else {
  module.exports = require("./keystone-6-core-admin-ui-router.cjs.dev.js");
}
