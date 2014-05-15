var Backbone = require('backbone.marionette')

var ItemView = Backbone.Marionette.ItemView.extend({
    template: require('../templates/match.scout.events')
});

module.exports = Backbone.Marionette.CollectionView.extend({
    itemView: ItemView,
    className: "events",

    onAfterItemAdded: function(itemView){

        if(itemView.el.dataset.value){

        }

        console.log(itemView.el);
    }
});
