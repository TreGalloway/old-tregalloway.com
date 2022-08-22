'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./keystone-ui-modals.cjs.prod.js");
} else {
  module.exports = require("./keystone-ui-modals.cjs.dev.js");
}
