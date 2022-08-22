'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./keystone-6-core-admin-ui-apollo.cjs.prod.js");
} else {
  module.exports = require("./keystone-6-core-admin-ui-apollo.cjs.dev.js");
}
