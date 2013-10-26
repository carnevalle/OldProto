/*global define */
define(['marionette', 'modules/players/ListPlayerView.hbs'], function (Marionette, template) {
    
    'use strict';

    return Marionette.ItemView.extend({
		template: template,
		className: 'player',
		tagName: 'tr',

		initialize: function(){

		},

		events: {
			"click .btn-delete":"deletePlayer"
		},

		deletePlayer: function(){

			var _this = this;

			this.$el.fadeOut("fast");

			setTimeout(function(){
				_this.model.destroy();
			}, 300);
		}
    })
});