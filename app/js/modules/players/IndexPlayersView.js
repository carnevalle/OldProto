/*global define */
define(['marionette', 'jquery', 'modules/players/IndexPlayersView.hbs', 'modules/players/ListPlayerView'], function (Marionette, $, template, PlayerView) {

    'use strict';

    return Marionette.CompositeView.extend({
		template: template,
		className: 'team',
		itemView: PlayerView,
		itemViewContainer: '#playerlist',

		initialize: function(){
			console.log("TEAM VIEW");
			//this.collection.fetch();
		},

		events: {
			//"click .btn-save":"addPlayer",
			//'keydown :input': 'addPlayer',
			//"click .btn-delete":"deletePlayer",
			"submit #create-player-form" : "addPlayer"
		},

		deletePlayer: function(e){
			console.log(e.currentTarget.dataset.playerid);

			var playerid = e.currentTarget.dataset.playerid;
			var model = this.collection.get(playerid);
			model.destroy();

		},

		addPlayer: function(e){
			e.preventDefault();

			var $form = this.$el.find('#create-player-form');
			var data = $form.serializeObject();

			console.log( data );

			$form.each(function(){
			    this.reset();
			});

			if(data.name.length === 0){
				return;
			}

			console.log("Saving Player: ", data);
    		this.collection.create(data, {
                wait: true
            })
		}
    })
});
