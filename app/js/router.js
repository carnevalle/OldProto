define(['marionette', 'controllers/AppController'], function (Marionette, AppController) {
    'use strict';

	return new Backbone.Marionette.AppRouter({
		controller: new AppController(),
		appRoutes: {
			'': 'showIndex',
			'matches(/)': 'showMatches',
            'matches/:id': 'showMatch',
			'matches/:matchid/report/:reportid': 'showMatchReport',
			'players(/)':'showPlayers',
			'players/:id':'showPlayer',
			'teams': 'showTeams',
            'teams/:id': 'showTeam',
            'modal(/)': 'showModal',
			'pitch(/)': 'showPitch',
			'*notFound': 'notFound'
		}
	});
});
