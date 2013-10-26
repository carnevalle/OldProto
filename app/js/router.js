define(['marionette', 'controllers/AppController'], function (Marionette, AppController) {
    'use strict';

	return new Backbone.Marionette.AppRouter({
		controller: new AppController(),
		appRoutes: {
			'': 'showIndex',
			'matches(/)': 'showMatches',
			'matches/:id': 'showMatch',
			'players(/)':'showPlayers',
			'players/:id':'showPlayer',
			'teams': 'showTeams',
			'teams/:id': 'showTeam',
			'*notFound': 'notFound'
		}
	});
});