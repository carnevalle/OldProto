define([
    "backbone",
    "betterteam-collection",
    "matcheventtype",
    "app"
    ], function(Backbone, BetterTeamCollection, MatchEventType, App) {

    return BetterTeamCollection.extend({
        model: MatchEventType,
        url: function(){

            return App.config.apiroot+"/matcheventtypes";
        }
    });
});