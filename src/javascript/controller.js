Backbone = require('backbone');

Team = require('./models/Team');
Player = require('./models/Player');
Match = require('./models/Match');
MatchEvent = require('./models/MatchEvent');

TeamCollection = require('./collections/Teams');
PlayerCollection = require('./collections/Players');
MatchCollection = require('./collections/Matches');
MatchEventCollection = require('./collections/MatchEvents');

module.exports = Backbone.Marionette.Controller.extend({
    showRoot: function(){
        console.log("ShowRoot");

        var teams = new TeamCollection();

        $.when(teams.fetch())
        .done(function(teamCol){
            console.log(teamCol);
        });
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
