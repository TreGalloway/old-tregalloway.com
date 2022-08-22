'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./keystone-6-fields-document.cjs.prod.js");
} else {
  module.exports = require("./keystone-6-fields-document.cjs.dev.js");
}
