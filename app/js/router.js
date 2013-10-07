define(['marionette', 'controllers/AppController'], function (Marionette, AppController) {
    'use strict';

	return new Backbone.Marionette.AppRouter({
		controller: new AppController(),
		appRoutes: {
			'': 'showIndex',
			'matches': 'showMatches',
			'matches/:id': 'showMatch',
			'teams': 'showTeams',
			'teams/:id': 'showTeam',
			'*notFound': 'notFound'
		}
	});
});