/*global define */
define(['marionette', 'modules/matches/IndexMatchView.hbs', 'modules/matches/ListMatchView.hbs'], function (Marionette, template, matchlistTemplate) {
    
    'use strict';

    var MatchView = Marionette.ItemView.extend({
    	template: matchlistTemplate,
    	className: 'player',
		tagName: 'tr'
    })

	return Marionette.CompositeView.extend({
		template: template,
		className: 'matches',
		itemView: MatchView,
		itemViewContainer: '#matchlist',

		initialize: function(){
			console.log("MATCH VIEW");
			//this.collection.fetch();
		},

		events: {
			"submit #create-match-form" : "createMatch"
		},

		createMatch: function(e){
			e.preventDefault();
			var $form = this.$el.find('#create-match-form');
			var data = $form.serializeObject();

			$form.each(function(){
			    this.reset();
			});

			console.log(data);
			this.collection.create(data);
		}
    })
});