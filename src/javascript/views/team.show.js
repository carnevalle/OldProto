var Backbone = require('backbone.marionette')

module.exports = Backbone.Marionette.ItemView.extend({
    template: require('../templates/team.show'),

    initialize: function () {
        console.log("initialize teams item view");
    }
});
