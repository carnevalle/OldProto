define([
    "backbone",
    "player",
    "app"
    ], function(Backbone, player, App) {

    return Backbone.Collection.extend({
        model: player,
        initialize: function(models, options){
        },
        url: function(){

            return App.config.apiroot+"/players";

            // if(true){
            //     return "http://api.betterteam.dk/v1/players";
            // }else{
            //     return "http://localhost:8000/v1/players";
            // }
        }
    });
});
