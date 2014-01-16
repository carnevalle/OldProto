define([
    'marionette',
    'jquery',
    'app',
    'layouts/FullPageLayout',
    'layouts/MatchLayout',
    'dashboard',
    'dashboard-teams',
    'teamview',
    'playerview',
    'team',
    'teams',
    'match',
    'matches',
    'player',
    'players',
    'nprogress'
], function (
    Marionette,
    $,
    App,
    FullPageLayout,
    MatchLayout,
    Dashboard,
    DashboardTeams,
    TeamView,
    PlayerView,
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
			
			NProgress.start();

			var dashboard = new Dashboard();
			var matches = new Matches();
			var teams = new Teams();

			teams.on("progress", function(collection, e){
				console.log("teams progress: ", e.position / e.total);
			})
			matches.on("progress", function(collection, e){
				console.log("matches progress: ", e.position / e.total);
			})

			$.when(matches.fetch(), teams.fetch())
			.done(function(matchCol, teamCol){
				App.getRegion("main").show(dashboard);
				dashboard.teams.show(new DashboardTeams({
					collection: teams
				}))

			    NProgress.done();
			});
		},

		showMatch: function(id){
            console.log('ShowMatch');

			var match = new Match({id: id});

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

		showMatches: function(){
			console.log('ShowMatches');
		},

		showTeam: function(id){
			console.log('ShowTeam');

			var team = new Team({
				id: id
			})

			team.on("fetch", function(collection, options){
				NProgress.start();
			})

			team.on("progress", function(collection, e){
				NProgress.set(e.position / e.total);
			})

            team.fetch({
                success: function(){
                	
                	NProgress.done();
                	App.getRegion("main").show(new TeamView({
                		model: team
                	}));
                }
            })
		},

		showPlayer: function(id){
			console.log('ShowPlayer');

			var player = new Player({id:id});

			player.on("fetch", function(collection, options){
				NProgress.start();
			})

			player.on("progress", function(collection, e){
				NProgress.set(e.position / e.total);
			})

            player.fetch({
                success: function(){
                	
                	NProgress.done();
                	App.getRegion("main").show(new PlayerView({
                		model: player
                	}));
                }
            })			
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