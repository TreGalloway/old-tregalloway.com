'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./keystone-ui-icons-icons-CornerDownRightIcon.cjs.prod.js");
} else {
  module.exports = require("./keystone-ui-icons-icons-CornerDownRightIcon.cjs.dev.js");
}
