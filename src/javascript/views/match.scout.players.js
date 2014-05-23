var Backbone = require('backbone.marionette')

var ItemView = Backbone.Marionette.ItemView.extend({
    template: require('../templates/match.scout.players')
});

module.exports = Backbone.Marionette.CollectionView.extend({
    itemView: ItemView,
    className: "players",

    onAfterItemAdded: function(itemView){
    	var $el = itemView.$el.find(".fnSelectValue");

        if($el[0].dataset.value == this.options.selectedValue){
        	$el.addClass("active");
        }
    }
});
