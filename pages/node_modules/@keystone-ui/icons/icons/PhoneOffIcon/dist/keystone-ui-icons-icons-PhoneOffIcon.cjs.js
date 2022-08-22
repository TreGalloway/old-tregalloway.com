'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./keystone-ui-icons-icons-PhoneOffIcon.cjs.prod.js");
} else {
  module.exports = require("./keystone-ui-icons-icons-PhoneOffIcon.cjs.dev.js");
}
