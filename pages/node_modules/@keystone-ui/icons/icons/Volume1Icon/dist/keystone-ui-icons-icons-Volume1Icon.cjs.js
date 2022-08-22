'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./keystone-ui-icons-icons-Volume1Icon.cjs.prod.js");
} else {
  module.exports = require("./keystone-ui-icons-icons-Volume1Icon.cjs.dev.js");
}
