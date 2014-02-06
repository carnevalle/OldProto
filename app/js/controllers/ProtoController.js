define([
    'marionette',
    'jquery',
    'app',
    'layouts/FullPageLayout',
    'match.main',
    'matchevent.create',
    'dashboard',
    'dashboard-teams',
    'teamview',
    'playerview',
    'proto/option-chooser/OptionChooser',
    'team',
    'teams',
    'match',
    'matches',
    'player',
    'players',
    'matcheventtypes',
    'nprogress'
], function (
    Marionette,
    $,
    App,
    FullPageLayout,
    MatchMain,
    MatchEventCreate,
    Dashboard,
    DashboardTeams,
    TeamView,
    PlayerView,
    OptionChooser,
    Team,
    Teams,
    Match,
    Matches,
    Player,
    Players,
    MatchEventTypes
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

			// teams.on("progress", function(collection, e){
			// 	console.log("teams progress: ", e.position / e.total);
			// })
			// matches.on("progress", function(collection, e){
			// 	console.log("matches progress: ", e.position / e.total);
			// })

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
			var matcheventtypes = new MatchEventTypes();
			var players = new Players();

			NProgress.start();

			$.when(match.fetch(), matcheventtypes.fetch(), players.fetch())
			.done(function(){
                
				App.getRegion("main").show(new MatchMain({
					model: match,
					matchEventTypes: matcheventtypes.toJSON(),
					players: players.toJSON()
				}));

                /*
                var matchEventCreateView = new MatchEventCreate({
                    model: match
                })

				App.getRegion("main").show(matchEventCreateView);

                matchEventCreateView.what.show(new OptionChooser({
				    valueType: 'what',
				    title: "Registrer Hvad",
				    options: matcheventtypes.toJSON()
				}));

				matchEventCreateView.who.show(new OptionChooser({
				    valueType: 'who',
				    title: "Registrer Hvem",
				    options: players.toJSON()
				}));
				*/

			    NProgress.done();
			});
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