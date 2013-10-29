/*global define */
define(['marionette', 'modules/players/ShowPlayerView.hbs'], function (Marionette, template) {

    'use strict';

    return Marionette.ItemView.extend({
		template: template,
		className: 'player',

		initialize: function(){
			console.log("SHOW PLAYER VIEW");
			//this.collection.fetch();
		}
    })
});
