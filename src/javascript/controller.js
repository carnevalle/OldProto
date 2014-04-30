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
            console.log(teamCol);

            App.getRegion("app").show(new TeamsIndexView({
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

        team.fetch({
            success: function(data){
                console.log(data.toJSON());
            }
        })
    },
    showMatch: function(id){
        console.log('showMatch: ', id);

        var match = new Match({
            id: id
        });

        match.fetch({
            success: function(data){
                console.log(data.toJSON());
            }
        })
    },
    showPlayer: function(id){
        console.log('showPlayer: ', id);

        var player = new Player({
            id:id
        });

        player.fetch({
            success: function(data){
                console.log(data.toJSON());
            }
        })
    },
    notFound: function(){
        console.log("Route Not Found");
    }
})
