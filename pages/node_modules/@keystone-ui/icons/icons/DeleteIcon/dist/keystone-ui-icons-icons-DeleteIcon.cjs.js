'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./keystone-ui-icons-icons-DeleteIcon.cjs.prod.js");
} else {
  module.exports = require("./keystone-ui-icons-icons-DeleteIcon.cjs.dev.js");
}
