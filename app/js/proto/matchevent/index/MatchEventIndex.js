define([
    'marionette',
    'proto/matchevent/index/MatchEventIndexItemView.hbs'
    ], function (Marionette, itemViewTemplate) {

    'use strict';


	var ItemView = Marionette.ItemView.extend({
    	template: itemViewTemplate
    })


    return Marionette.CollectionView.extend({
    	itemView: ItemView,

    	initialize: function(){
    		console.log("this.collection: ",this.collection);
    	}
    })
});