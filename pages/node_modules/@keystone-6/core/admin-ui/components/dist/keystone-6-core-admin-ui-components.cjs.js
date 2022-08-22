'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./keystone-6-core-admin-ui-components.cjs.prod.js");
} else {
  module.exports = require("./keystone-6-core-admin-ui-components.cjs.dev.js");
}
