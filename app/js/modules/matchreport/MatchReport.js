/*global define */
define([
    'marionette',
    'modules/matchreport/MatchReport.hbs',
    ], function (Marionette, template, Holder) {

    'use strict';

    return Marionette.ItemView.extend({
		template: template,
		className: 'match',

		initialize: function(){

		},

		events: {
            'click button':'onButtonClick'
		},

        onButtonClick: function(e){
            console.log(e.currentTarget.dataset.type);
        },

        onRender: function(){


        },

        onDomRefresh: function(){

        }
    })
});
