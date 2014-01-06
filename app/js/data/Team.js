define([
    'backbone',
    'app',
    'betterteam-model'
    ], function (Backbone, App, BetterTeamModel) {

    'use strict';

    return BetterTeamModel.extend({
        defaults: {

        },

        urlRoot: function(){
            return App.config.apiroot+"/teams";
        }
    });

});