'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./keystone-ui-icons-icons-RewindIcon.cjs.prod.js");
} else {
  module.exports = require("./keystone-ui-icons-icons-RewindIcon.cjs.dev.js");
}
