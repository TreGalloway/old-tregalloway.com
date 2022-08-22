'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./keystone-6-core-fields-types-timestamp-views.cjs.prod.js");
} else {
  module.exports = require("./keystone-6-core-fields-types-timestamp-views.cjs.dev.js");
}
