'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./keystone-ui-icons-icons-Volume2Icon.cjs.prod.js");
} else {
  module.exports = require("./keystone-ui-icons-icons-Volume2Icon.cjs.dev.js");
}
