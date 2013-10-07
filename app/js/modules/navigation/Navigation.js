/*global define */
define(['marionette', 'modules/navigation/Navigation.hbs'], function (Marionette, template) {
    
    'use strict';


    return Marionette.Layout.extend({
		template: template,
		className: 'header',

		initialize: function(){

		},

		onRender: function(e){
			this.$el.find('.dropdown-toggle').dropdown();
		}
    })
});