/*global define */
define(['backbone', 'marionette'], function (Backbone, Marionette) {
    'use strict';

	var App = new Backbone.Marionette.Application({});

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

    return App;
});