'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./keystone-ui-notice.cjs.prod.js");
} else {
  module.exports = require("./keystone-ui-notice.cjs.dev.js");
}
