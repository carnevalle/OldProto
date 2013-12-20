define([
    'marionette',
    'app',
    'matchreport',
    'matchreports',
    'match',
    'matches',
    'player',
    'players',
    'modules/matches/ShowMatchView',
    'modules/players/IndexPlayersView',
    'modules/players/ShowPlayerView',
    'modules/matches/IndexMatchView',
    'modules/matchreport/MatchReport',
    'modules/matchreport/MatchReportLayout',
    'modules/timeslider/TimeSlider',
    'modules/modal/Modal',
    'modules/pitch/PitchView'
], function (
    Marionette,
    App,
    MatchReport,
    MatchReports,
    Match,
    Matches,
    Player,
    Players,
    ShowMatchView,
    IndexPlayersView,
    ShowPlayerView,
    IndexMatchView,
    MatchReportView,
    MatchReportLayout,
    TimeSlider,
    ModalView,
    PitchView
) {

    'use strict';

    return Backbone.Marionette.Controller.extend({
		showIndex: function(){
			console.log('ShowIndex');
			App.getRegion("main").reset();
		},

		showMatch: function(id){

            var match = new Match({
                id: id
            });
            var reports = new MatchReports(undefined, {
                matchid: id
            });
            reports.fetch();

            match.fetch({
                success: function(data){
                    App.getRegion("main").show(new ShowMatchView({
                        model: match,
                        collection: reports
                    }));
                }
            });
		},

        showMatchReport: function(matchid, reportid){

            App.getRegion('header').reset();

            App.getRegion("main").show(new MatchReportLayout());

            /*
            var matchreport = new MatchReport({
                id: reportid,
                match_id: matchid
            });

            matchreport.fetch({
                success: function(model){
                    console.log(model);
                    var layout = new MatchReportView({
                        model: matchreport
                    });

                    App.getRegion("main").show(layout);
                }
            })
            */
        },

		showMatches: function(){
			console.log('ShowMatches');

            var matches = new Matches();

            matches.fetch({
                success: function(){
                    App.getRegion("main").show(new IndexMatchView({
                        collection: matches
                    }));
                }
            })
		},

		showTeam: function(id){
			console.log('ShowTeam');
		},

		showPlayer: function(id){
			console.log('ShowPlayer');

            var player = new Player({
                id: id
            });

            player.fetch({
                success: function(){
                    App.getRegion("main").show(new ShowPlayerView({
                        model: player
                    }));
                }
            })
		},

		showPlayers: function(){
			console.log('ShowPlayers');

            var players = new Players();

            players.fetch({
                success: function(){
                    App.getRegion("main").show(new IndexPlayersView({
                        collection: players
                    }));
                }
            })
		},

        showPitch: function(){

            App.getRegion('header').reset();;

            App.getRegion("main").show(new PitchView({
                model: new Backbone.Model()
            }));
        },

        showModal: function(){
            App.getRegion("main").show(new ModalView({
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
