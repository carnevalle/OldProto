define([
    'marionette',
    'app',
    'matchreport',
    'matchreports',
    'match',
    'modules/matches/ShowMatchView',
    'modules/players/IndexPlayersView',
    'modules/players/ShowPlayerView',
    'modules/matches/IndexMatchView',
    'modules/matchreport/MatchReport',
    'modules/modal/Modal'
], function (
    Marionette,
    App,
    MatchReport,
    MatchReports,
    Match,
    ShowMatchView,
    IndexPlayersView,
    ShowPlayerView,
    IndexMatchView,
    MatchReportView,
    ModalView
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
