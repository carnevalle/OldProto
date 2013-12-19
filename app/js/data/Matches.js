define([
    "backbone",
    "match",
    "app"
    ], function(Backbone, match, App) {

    return Backbone.Collection.extend({
        model: match,
        url: function(){

            return App.config.apiroot+"/matches";

            // if(true){
            //     return "http://api.betterteam.dk/v1/matches";
            // }else{
            //     return "http://localhost:8000/v1/matches";
            // }
        }
    });
});
