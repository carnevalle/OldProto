define([
    'marionette',
    'app',
    'matchreports',
    'modules/matches/ShowMatchView',
    'modules/players/IndexPlayersView',
    'modules/players/ShowPlayerView',
    'modules/matches/IndexMatchView',
    'modules/matchreport/MatchReport'
], function (
    Marionette,
    App,
    MatchReports,
    ShowMatchView,
    IndexPlayersView,
    ShowPlayerView,
    IndexMatchView,
    MatchReport
) {

    'use strict';

    return Backbone.Marionette.Controller.extend({
		showIndex: function(){
			console.log('ShowIndex');
			App.getRegion("main").reset();
		},

		showMatch: function(id){

            var reports = new MatchReports(App.DS.matchreports.belongsToMatch(id));

			App.getRegion("main").show(new ShowMatchView({
				model: App.DS.matches.get({id:id}),
                collection: reports
			}));
		},

        showMatchReport: function(matchid, reportid){
            console.log('ShowMatchReport: ', matchid, reportid);
            App.getRegion("main").show(new MatchReport({
                model: new Backbone.Model()
            }));
        },

		showMatches: function(){
			console.log('ShowMatches');
			App.getRegion("main").show(new IndexMatchView({
				collection: App.DS.matches
			}));
		},

		showTeam: function(id){
			console.log('ShowTeam');
		},

		showPlayer: function(id){
			console.log('ShowPlayer');
			App.getRegion("main").show(new ShowPlayerView({
				model: App.DS.players.get({id:id})
			}));
		},

		showPlayers: function(){
			console.log('ShowPlayers');
			App.getRegion("main").show(new IndexPlayersView({
				collection: App.DS.players
			}));
		},

		showTeams: function(){
			console.log('ShowTeams');
		},

		notFound: function(){
			console.log("Route Not Found");
		}
    });
});
