/*global define */
define([
    'backbone',
    'backbone.hammer',
    'marionette',
    'underscore',
    'gsap',
    'howler'
    ], function (
        Backbone,
        undefined,
        Marionette,
        _
    ) {

    'use strict';

	var App = new Backbone.Marionette.Application({});

    App.tl = new TimelineLite();

    App.config = {
        apiroot: function(){
            if(window.location.host === "localhost:9100"){
                return "http://localhost:8000/v1";
            }else{
                return "http://api.betterteam.dk/v1";
            }
        }()
    }

	App.addRegions({
		header: '#header',
		main: '#main',
		overlay: '#overlay'
	});

	App.on('start', function() {
		Backbone.history.start({
			//pushState: true
		});
	});

    App.sounds = {
        click: new Howl({
            urls: ['sound/tap-hollow.mp3']
        }),
        slide: new Howl({
            urls: ['sound/slide-metal.mp3']
        }),
    }

    App.on("BetterTeamSound", function(id){
        this.sounds[id].play();

    })

    App.isLoaded = false;

    return App;
});
