var Backbone = require('backbone');
var Marionette = require('backbone.marionette')

var ItemView = Backbone.Marionette.ItemView.extend({
    template: require('../templates/teams.index.item'),

    initialize: function () {
        console.log("initialize teams item view");
    }
});

module.exports = Backbone.Marionette.CompositeView.extend({
    template: require('../templates/teams.index'),
    itemView: ItemView,
    itemViewContainer: '.items'
});
