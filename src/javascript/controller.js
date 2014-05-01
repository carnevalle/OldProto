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


console.log(Backbone);

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



        /*
        $.when(teams.fetch())
        .done(function(teamCol){
            console.log(teamCol);
        });
        */
    },
    showIndex: function(){
        console.log('showIndex');
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
