define([
    'backbone',
    'app',
    'betterteam-model'
    ], function (Backbone, App, BetterTeamModel) {

    'use strict';

    return BetterTeamModel.extend({

        defaults: {
            "side" : "us"
        },

        initialize: function(attributes, options){
            console.log("INITIALIZE MODEL!!");
        },

        urlRoot: function(){

            console.log("SAVING MATCH EVENT MODEL!",this);

            var matchid = this.get("match_id");
            this.unset("match_id", {silent: true});

            return App.config.apiroot+"/matches/"+matchid+"/events";
        }
    });

});