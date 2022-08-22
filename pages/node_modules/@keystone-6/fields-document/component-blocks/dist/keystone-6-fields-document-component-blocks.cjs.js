'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./keystone-6-fields-document-component-blocks.cjs.prod.js");
} else {
  module.exports = require("./keystone-6-fields-document-component-blocks.cjs.dev.js");
}
