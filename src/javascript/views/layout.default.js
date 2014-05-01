var Backbone = require('backbone.marionette')

module.exports = Backbone.Marionette.Layout.extend({
  template: require('../templates/layout.default'),

  regions: {
    header: "#header",
    main: "#main"
  }
});
