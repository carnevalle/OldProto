define([
    "backbone",
    "betterteam-collection",
    "team",
    "app"
    ], function(Backbone, BetterTeamCollection, TeamModel, App) {

    return BetterTeamCollection.extend({
        model: TeamModel,
        initialize: function(models, options){

        },
        url: function(){

            return App.config.apiroot+"/teams";

        }
    });
});