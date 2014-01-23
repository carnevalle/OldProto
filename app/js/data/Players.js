define([
    "backbone",
    "betterteam-collection",
    "player",
    "app"
    ], function(Backbone, BetterTeamCollection, Player, App) {

    return BetterTeamCollection.extend({
        model: Player,
        url: function(){

            return App.config.apiroot+"/players";
        }
    });
});