define([
    'marionette',
    'app',
    'layouts/FullPageLayout',
    'modules/dashboard/Dashboard',
    'team',
    'teams',
    'match',
    'matches',
    'player',
    'players',    
], function (
    Marionette,
    App,
    FullPageLayout,
    Dashboard,
    Team,
    Teams,
    Match,
    Matches,
    Player,
    Players    
) {

    'use strict';

    return Backbone.Marionette.Controller.extend({
		showRoot: function(){
			console.log('ShowRoot');

			if(!App.isLoaded){
				App.getRegion("main").show(new FullPageLayout());
				App.isLoaded = true;
			}else{
				App.router.navigate('dashboard', true);
			}
			
		},

		showDashboard: function(){
			console.log('ShowDashboard');

			var teams = new Teams();

            teams.fetch({
                success: function(){
                	App.getRegion("main").show(new Dashboard());

                	console.log(teams);

                	/*
                    App.getRegion("main").show(new IndexPlayersView({
                        collection: players
                    }));
					*/
                }
            })
		},

		showMatch: function(id){
            console.log('ShowMatch');
		},

		showMatches: function(){
			console.log('ShowMatches');
		},

		showTeam: function(id){
			console.log('ShowTeam');
		},

		showPlayer: function(id){
			console.log('ShowPlayer');
		},

		showPlayers: function(){
			console.log('ShowPlayers');
		},

		showTeams: function(){
			console.log('ShowTeams');
		},

		notFound: function(){
			console.log("Route Not Found");
		}
    });
});