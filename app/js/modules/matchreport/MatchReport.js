/*global define */
define(['marionette', 'modules/matchreport/MatchReport.hbs'], function (Marionette, template) {

    'use strict';

    return Marionette.ItemView.extend({
		template: template,
		className: 'match',

		initialize: function(){

		},

		events: {

		}
    })
});
