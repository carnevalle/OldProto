/*global define */
define(['marionette', 'modules/team/TeamView.hbs'], function (Marionette, template) {
    
    'use strict';

    return Marionette.ItemView.extend({
		template: template,
		className: 'team',

		initialize: function(){

		}
    })
});