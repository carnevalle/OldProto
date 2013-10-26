define(['marionette', 'app', 'modules/matches/MatchView', 'modules/players/IndexPlayersView', 'modules/players/ShowPlayerView', 'modules/matches/IndexMatchView'], function (Marionette, App, MatchView, IndexPlayersView, ShowPlayerView, IndexMatchView) {
    'use strict';

    return Backbone.Marionette.Controller.extend({
		showIndex: function(){
			console.log('ShowIndex');
			App.getRegion("main").reset();
		},

		showMatch: function(id){
			console.log('ShowMatch');
			App.getRegion("main").show(new MatchView({
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