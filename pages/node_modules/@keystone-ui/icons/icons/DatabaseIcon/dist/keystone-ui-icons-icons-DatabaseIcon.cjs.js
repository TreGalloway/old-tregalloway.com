'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./keystone-ui-icons-icons-DatabaseIcon.cjs.prod.js");
} else {
  module.exports = require("./keystone-ui-icons-icons-DatabaseIcon.cjs.dev.js");
}
