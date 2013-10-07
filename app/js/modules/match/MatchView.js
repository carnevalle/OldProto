/*global define */
define(['marionette', 'modules/match/MatchView.hbs'], function (Marionette, template) {
    
    'use strict';

    return Marionette.ItemView.extend({
		template: template,
		className: 'match',

		initialize: function(){

		},

		events: {
			"click #pitch":"pitch"
		},

		pitch: function(e){
			console.log("YEAH!");
		}
    })
});