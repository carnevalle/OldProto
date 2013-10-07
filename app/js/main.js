require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
        backbone: '../bower_components/backbone/backbone',
        underscore : '../bower_components/underscore/underscore',
        handlebars: '../bower_components/handlebars.js/dist/handlebars',
        marionette : '../bower_components/backbone.marionette/lib/backbone.marionette',
        fastclick : '../bower_components/fastclick/lib/fastclick'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jQuery'
        },
        jquery : {
            exports : 'jQuery'
        },
        underscore : {
            exports : '_'
        },
        handlebars: {
            exports: 'Handlebars'
        },
        backbone : {
            deps : ['bootstrap', 'underscore'],
            exports : 'Backbone'
        },
        marionette : {
            deps : ['backbone', 'handlebars'],
            exports : 'Marionette'
        }
    }
});

require(['jquery', 'fastclick', 'app', 'router', 'modules/navigation/Navigation'], function ($, FastClick, App, router, Navigation) {
    
    'use strict';
    
    $(function() {
        FastClick.attach(document.body);
    });

    App.router = router;

    App.addInitializer(function(options){
        App.getRegion('header').show(new Navigation());
    });

    App.start();
});