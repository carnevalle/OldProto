define([
    'backbone',
    'app',
    'betterteam-model'
    ], function (Backbone, App, BetterTeamModel) {

    'use strict';

    return BetterTeamModel.extend({
        defaults: {
            hometeam: "",
            awayteam: ""
        },
        urlRoot: function(){
            return App.config.apiroot+"/matches";
        }
    });

});
