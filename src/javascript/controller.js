var Backbone = require('backbone.marionette');
var $ = require('jquery');

var Team = require('./models/Team');
var Player = require('./models/Player');
var Match = require('./models/Match');
var MatchEvent = require('./models/MatchEvent');

var TeamCollection = require('./collections/Teams');
var PlayerCollection = require('./collections/Players');
var MatchCollection = require('./collections/Matches');
var MatchEventCollection = require('./collections/MatchEvents');
var MatchEventTypeCollection = require('./collections/MatchEventTypes');

module.exports = Backbone.Marionette.Controller.extend({
    showRoot: function(){
        console.log("ShowRoot");


        var teams = new TeamCollection();
        var TeamsIndexView = require('./views/teams.index');

        $.when(teams.fetch())
        .done(function(teamCol){

            console.log(App.layout);

            App.layout.main.show(new TeamsIndexView({
                collection: teams
            }));
        });
    },
    showIndex: function(){
        console.log('showIndex');

        var matches = new MatchCollection();
        var IndexView = require('./views/index');

        $.when(matches.fetch())
        .done(function(){

            console.log(App.layout);

            App.layout.main.show(new IndexView({
                collection: matches
            }));
        });
    },
    showTeam: function(id){
        console.log('showTeam: ', id);

        var team = new Team({
            id: id
        })

        var TeamShowView = require('./views/team.show');

        team.fetch({
            success: function(data){
                App.layout.main.show(new TeamShowView({
                    model: team
                }));
            }
        })
    },

    createMatch: function(){
        var MatchCreateView = require('./views/match.create');

        App.layout.main.show(new MatchCreateView({
            model: new Match()
        }));

    },

    showMatch: function(id){
        console.log('showMatch: ', id);

        var match = new Match({
            id: id
        });

        var MatchShowView = require('./views/match.show');

        match.fetch({
            success: function(data){
                App.layout.main.show(new MatchShowView({
                    model: match
                }));
            }
        })
    },
    scoutMatch: function(id){
        console.log("scout match!");

        var match = new Match({
            id: id
        });

        var players = new PlayerCollection();
        var matchEventTypes = new MatchEventTypeCollection();

        //players.fetch();
        //matchEventTypes.fetch();

        var MatchScoutView = require("./views/match.scout");

        $.when(match.fetch(), matchEventTypes.fetch(), players.fetch())
        .done(function(){

            App.layout.main.show(new MatchScoutView({
                model: match,
                players: players,
                matchEventTypes: matchEventTypes
            }));

        });

        /*
        match.fetch({
            success: function(data){
                App.layout.main.show(new MatchScoutView({
                    model: match
                }));
            }
        })
        */
    },

    createPlayer: function(){
        console.log("Create Player");
    },

    showPlayer: function(id){
        console.log('showPlayer: ', id);

        var player = new Player({
            id:id
        });

        var PlayerShowView = require('./views/player.show');

        player.fetch({
            success: function(data){
                App.layout.main.show(new PlayerShowView({
                    model: player
                }));
            }
        })
    },
    notFound: function(){
        console.log("Route Not Found");
    }
})
