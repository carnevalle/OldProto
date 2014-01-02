define([
    "backbone",
    "team",
    "app"
    ], function(Backbone, TeamModel, App) {

    return Backbone.Collection.extend({
        model: TeamModel,
        initialize: function(models, options){

        },
        url: function(){

            return App.config.apiroot+"/teams";

        }
    });
});