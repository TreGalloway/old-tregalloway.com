'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./keystone-ui-icons-icons-CircleIcon.cjs.prod.js");
} else {
  module.exports = require("./keystone-ui-icons-icons-CircleIcon.cjs.dev.js");
}
