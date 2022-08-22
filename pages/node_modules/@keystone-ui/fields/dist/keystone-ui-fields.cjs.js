'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./keystone-ui-fields.cjs.prod.js");
} else {
  module.exports = require("./keystone-ui-fields.cjs.dev.js");
}
