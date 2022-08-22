'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./keystone-6-core-fields-types-calendarDay-views.cjs.prod.js");
} else {
  module.exports = require("./keystone-6-core-fields-types-calendarDay-views.cjs.dev.js");
}
