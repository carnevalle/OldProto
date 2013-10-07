define(['marionette', 'app', 'modules/match/MatchView', 'modules/team/TeamView'], function (Marionette, App, MatchView, TeamView) {
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
		},		

		showTeam: function(id){
			console.log('ShowTeam');
			App.getRegion("main").show(new TeamView({
				model: new Backbone.Model()
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