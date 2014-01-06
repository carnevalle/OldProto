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

            // if(true){
            //     return "http://api.betterteam.dk/v1/matches/";
            // }else{
            //     return "http://localhost:8000/v1/matches/";
            // }
        }
    });

});
