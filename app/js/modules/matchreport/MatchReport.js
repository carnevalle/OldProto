/*global define */
define([
    'marionette',
    'modules/matchreport/MatchReportLayout.hbs',
    'modules/matchreport/MatchReport.hbs',
    'holderjs'
    ], function (Marionette, templateLayout, template, Holder) {

    'use strict';

    return Marionette.ItemView.extend({
		template: template,
		className: 'match',

		initialize: function(){

		},

		events: {

		},

        onRender: function(){


        },

        onDomRefresh: function(){
            Holder.run();
        }
    })
});
