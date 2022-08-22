'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./keystone-ui-segmented-control.cjs.prod.js");
} else {
  module.exports = require("./keystone-ui-segmented-control.cjs.dev.js");
}
