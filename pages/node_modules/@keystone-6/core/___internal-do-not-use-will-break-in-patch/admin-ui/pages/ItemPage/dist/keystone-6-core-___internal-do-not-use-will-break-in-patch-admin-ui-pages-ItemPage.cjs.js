'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./keystone-6-core-___internal-do-not-use-will-break-in-patch-admin-ui-pages-ItemPage.cjs.prod.js");
} else {
  module.exports = require("./keystone-6-core-___internal-do-not-use-will-break-in-patch-admin-ui-pages-ItemPage.cjs.dev.js");
}
