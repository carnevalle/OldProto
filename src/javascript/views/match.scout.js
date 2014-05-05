var Backbone = require('backbone.marionette')

module.exports = Backbone.Marionette.Layout.extend({
    template: require('../templates/match.scout'),
    className: "match scout",

    regions: {
        time: "#match-time",
        top: "#match-top",
        left: "#match-left",
        right: "#match-right"
    },

    initialize: function(options){

        this.options.model = options.model;
    },

    onRender: function(){

        var MatchScoutTimeSliderView = require('../views/match.scout.timeslider');
        var MatchScoutPitchZonesView = require('../views/match.scout.pitch.zones');
        var MatchScoutPlayersView = require('../views/match.scout.players');
        var MatchScoutEventsView = require('../views/match.scout.events');
        var PlayersCollection = require('../collections/Players');
        var MatchEventTypesCollection = require('../collections/MatchEventTypes');

        var players = new PlayersCollection();
        var matchEventTypes = new MatchEventTypesCollection();
        players.fetch();
        matchEventTypes.fetch();

        this.time.show(new MatchScoutTimeSliderView());

        this.top.show(new MatchScoutEventsView({
            collection: matchEventTypes
        }));

        this.left.show(new MatchScoutPlayersView({
            collection: players
        }));

        this.right.show(new MatchScoutPitchZonesView());
    }
});
