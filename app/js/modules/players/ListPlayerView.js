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

        onRender: function(){
            this.$el.hide();
            this.$el.fadeIn("fast");
        },

		deletePlayer: function(){

			var _this = this;

			this.$el.fadeOut("fast");

			setTimeout(function(){

                if(confirm("Player deleted. You want to undo?")){
				    _this.$el.show();
                }else{
                    _this.model.destroy();
                }

			}, 300);
		}
    })
});
