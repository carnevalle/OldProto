define([
    'backbone',
    'app',
    'betterteam-model'
    ], function (Backbone, App, BetterTeamModel) {

    'use strict';

    return BetterTeamModel.extend({
        urlRoot: function(){
            return App.config.apiroot+"/matcheventtypes";
        }
    });

});