var Backbone = require('backbone.marionette')

module.exports = Backbone.Marionette.Layout.extend({
    template: require('../templates/match.scout'),
    className: "match scout",

    regions: {
        top: "#match-top",
        left: "#match-left",
        right: "#match-right"
    },

    initialize: function(options){

        this.options.model = options.model;
    },

    onRender: function(){
        console.log(this);

        var MatchScoutPlayersView = require('../views/match.scout.players');
        var MatchScoutEventsView = require('../views/match.scout.events');
        var PlayersCollection = require('../collections/Players');
        var MatchEventTypesCollection = require('../collections/MatchEventTypes');

        var players = new PlayersCollection();
        var matchEventTypes = new MatchEventTypesCollection();
        players.fetch();
        matchEventTypes.fetch();

        this.left.show(new MatchScoutPlayersView({
            collection: players
        }));

        this.top.show(new MatchScoutEventsView({
            collection: matchEventTypes
        }));
    }
});
