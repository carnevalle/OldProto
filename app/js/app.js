/*global define */
define([
    'backbone',
    'marionette',
    'underscore',
    'gsap'
    ], function (
        Backbone,
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

	Marionette.Region.prototype.open = function(view){

        this.$el.html(view.el);

        this.$el.find(".fnSlideTransition").each(function( index ) {
          if(index == 0){
            App.tl.from(this, 0.3, {top:'+=10px', opacity: 0, delay: 0.5, ease: "Power2.easeOut"});
          }else{
            App.tl.from(this, 0.3, {top:'+=10px', opacity: 0, ease: "Power2.easeOut"}, "-=0.2");
          }
        });

	}

    App.isLoaded = false;

    return App;
});
