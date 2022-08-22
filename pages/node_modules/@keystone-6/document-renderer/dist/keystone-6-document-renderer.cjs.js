'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./keystone-6-document-renderer.cjs.prod.js");
} else {
  module.exports = require("./keystone-6-document-renderer.cjs.dev.js");
}
