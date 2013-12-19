define([
    'backbone',
    'app'
    ], function (Backbone, App) {

    'use strict';

    return Backbone.Model.extend({
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
