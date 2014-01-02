define([
	'marionette', 
	//'controllers/AppController',
	'controllers/ProtoController',
], function (
	Marionette, 
	//AppController,
	ProtoController
) {
    'use strict';

	return new Backbone.Marionette.AppRouter({
		//controller: new AppController(),
		controller: new ProtoController(),
		appRoutes: {
			'': 'showRoot',
			'dashboard': 'showDashboard',
			'matches(/)': 'showMatches',
            'matches/:id': 'showMatch',
			//'matches/:matchid/report/:reportid': 'showMatchReport',
			'players(/)':'showPlayers',
			'players/:id':'showPlayer',
			'teams': 'showTeams',
            'teams/:id': 'showTeam',
            //'modal(/)': 'showModal',
			//'pitch(/)': 'showPitch',
			'*notFound': 'notFound'
		}
	});
});
