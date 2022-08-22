'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./keystone-ui-icons-icons-ScissorsIcon.cjs.prod.js");
} else {
  module.exports = require("./keystone-ui-icons-icons-ScissorsIcon.cjs.dev.js");
}
