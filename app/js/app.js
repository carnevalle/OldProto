/*global define */
define([
    'backbone',
    'marionette',
    'underscore',
    'players',
    'player',
    'matches',
    'match',
    'matchreports',
    'matchreport'
    ], function (
        Backbone,
        Marionette,
        _,
        Players,
        Player,
        Matches,
        Match,
        MatchReports,
        MatchReport
    ) {

    'use strict';

	var App = new Backbone.Marionette.Application({});

	App.DS = {
		players: new Players(),
		matches: new Matches(),
        matchreports: new MatchReports(),

        fetchAll: function(){
            this.players.fetch({
                dataType: 'jsonp'
            });
            this.matches.fetch();
            this.matchreports.fetch();
        }
	}

    App.DS.fetchAll();

    /*
	if(App.DS.players.length === 0){
		App.DS.players.fetch({
			success: function(data){
				console.log("FETCH IS COMPLETE!");
				console.log(data);
			}
		});
	}
    */

	App.addRegions({
		header: '#header',
		main: '#main',
		overlay: '#overlay'
	});

	App.on('initialize:before', function() {
		console.log('initialize:before');
	});

	App.on('initialize:after', function() {
		console.log('initialize:after');
	});

	App.on('start', function() {
		console.log('start');
		Backbone.history.start({
			//pushState: true
		});
	});

	Marionette.Region.prototype.open = function(view){
	  this.$el.hide();
	  this.$el.html(view.el);
	  this.$el.fadeIn("fast");
	}

    return App;
});
