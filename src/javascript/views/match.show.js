var Backbone = require('backbone.marionette')

module.exports = Backbone.Marionette.ItemView.extend({
    template: require('../templates/match.show'),
    className: 'match'
});
