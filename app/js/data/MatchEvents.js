define([
    "backbone",
    "betterteam-collection",
    "matchevent",
    "app"
    ], function(Backbone, BetterTeamCollection, MatchEvent, App) {

    return BetterTeamCollection.extend({
        model: MatchEvent,

        initialize: function(attributes, options){
            console.log(options);
            this.matchid = options.match_id;
        },

        url: function(){
            console.log("Syncing collection: ", this);

            return App.config.apiroot+"/matches/"+this.matchid+"/events";
        }
    });
});