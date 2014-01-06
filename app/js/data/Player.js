define([
    'backbone',
    'app',
    'betterteam-model'
    ], function (Backbone, App, BetterTeamModel) {

    'use strict';

    return BetterTeamModel.extend({
        defaults: {
            name: "Michael Laudrup",
            birthdate: "",
            positions: []
        },

        urlRoot: function(){
            return App.config.apiroot+"/players";
        }
    });

});