define([
    'marionette',
    'proto/dashboard/Dashboard.hbs'
    ], function (Marionette, template) {

    'use strict';

    return Marionette.Layout.extend({

    	template: template,

    	initialize: function(options){
            console.log();
    	},

        regions: {
            teams: "#r-teams",
            matches: "#r-matches"
        },        
    })
});