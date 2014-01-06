define([
    'marionette',
    'app',
    'layouts/FullPageLayout',
    'layouts/MatchLayout',
    'modules/dashboard/Dashboard',
    'team',
    'teams',
    'match',
    'matches',
    'player',
    'players',
    'nprogress'
], function (
    Marionette,
    App,
    FullPageLayout,
    MatchLayout,
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
			
			var match = new Match({id: 1});

			match.on("fetch", function(collection, options){
				NProgress.start();
			})

			match.on("progress", function(collection, e){
				NProgress.set(e.position / e.total);
			})

            match.fetch({
                success: function(){
                	
                	NProgress.done();
                	App.getRegion("main").show(new MatchLayout({
                		model: match
                	}));
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