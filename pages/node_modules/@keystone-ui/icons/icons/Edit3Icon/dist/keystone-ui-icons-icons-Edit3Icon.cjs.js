'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./keystone-ui-icons-icons-Edit3Icon.cjs.prod.js");
} else {
  module.exports = require("./keystone-ui-icons-icons-Edit3Icon.cjs.dev.js");
}
