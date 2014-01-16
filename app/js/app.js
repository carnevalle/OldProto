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

	Marionette.Region.prototype.open = function(view){

        this.$el.html(view.el);

        this.$el.find(".fnIntroTransition").each(function( index ) {
          if(index == 0){
            App.tl.from(this, 0.3, {top:'+=10px', opacity: 0, delay: 0.05, ease: "Power2.easeOut"});
          }else{
            App.tl.from(this, 0.3, {top:'+=10px', opacity: 0, ease: "Power2.easeOut"}, "-=0.2");
          }
        });

	}

    App.isLoaded = false;

    return App;
});
