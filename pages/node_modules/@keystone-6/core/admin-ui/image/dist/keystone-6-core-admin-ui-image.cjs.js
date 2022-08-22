'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./keystone-6-core-admin-ui-image.cjs.prod.js");
} else {
  module.exports = require("./keystone-6-core-admin-ui-image.cjs.dev.js");
}
