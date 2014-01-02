/*global define */
define([
    'backbone',
    'marionette',
    'underscore'
    ], function (
        Backbone,
        Marionette,
        _
    ) {

    'use strict';

	var App = new Backbone.Marionette.Application({});

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

      if(!view.disableFade){
          this.$el.hide();
    	  this.$el.fadeIn("fast");
      }
	}

    App.isLoaded = false;

    return App;
});
