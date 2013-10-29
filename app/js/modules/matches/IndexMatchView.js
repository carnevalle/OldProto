/*global define */
define(['marionette', 'modules/matches/IndexMatchView.hbs', 'modules/matches/ListMatchView.hbs'], function (Marionette, template, matchlistTemplate) {

    'use strict';

    var MatchView = Marionette.ItemView.extend({
    	template: matchlistTemplate,
    	className: 'player',
		tagName: 'tr',

        events: {
            "click .btn-delete":"deleteMatch"
        },

        onRender: function(){
            this.$el.hide();
            this.$el.fadeIn("fast");
        },

        deleteMatch: function(){

            var _this = this;

            this.$el.fadeOut("fast");

            setTimeout(function(){
                // if(confirm("Match deleted. You want to undo?")){
                //     _this.$el.show();
                // }else{
                //     _this.model.destroy();
                // }
                _this.model.destroy();
            }, 300);
        }

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

			console.log("Saving match: ", data);
			this.collection.create(data, {
                wait: true,
                success: function(match){
                    console.log("MATCH IS SAVED! ", match);
                    match.trigger("change");
                }
            });
		}
    })
});
