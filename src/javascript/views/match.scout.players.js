var Backbone = require('backbone.marionette')

var ItemView = Backbone.Marionette.ItemView.extend({
    template: require('../templates/match.scout.players')
});

module.exports = Backbone.Marionette.CollectionView.extend({
    itemView: ItemView,
    className: "players"
});
