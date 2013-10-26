require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
        backbone: '../bower_components/backbone/backbone',
        localstorage: '../bower_components/backbone.localStorage/backbone.localStorage',
        underscore : '../bower_components/underscore/underscore',
        handlebars: '../bower_components/handlebars.js/dist/handlebars',
        marionette : '../bower_components/backbone.marionette/lib/backbone.marionette',
        fastclick : '../bower_components/fastclick/lib/fastclick',
        // json : '../bower_components/json2/json2',
        pushmenu : 'vendors/mlpushmenu',
        classie : 'vendors/classie',
        dimenu : 'vendors/jquery.dimenu',

        // Models
        match : 'data/Match',
        matches : 'data/Matches',
        player : 'data/Player',
        players : 'data/Players',
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
        },
        // json : {
        //     deps : ['jquery']
        // },
        dimenu : {
            deps : ['jquery']
        }
    }
});

require(['jquery', 'fastclick', 'app', 'router', 'modules/navigation/Navigation'], function ($, FastClick, App, router, Navigation) {
    
    'use strict';
    
    $.fn.serializeObject = function()
    {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function() {

            var name = this.name.replace("[]","");

            if (o[name] !== undefined) {
                if (!o[name].push) {
                    o[name] = [o[name]];
                }
                o[name].push(this.value || '');
            } else {
                o[name] = this.value || '';
            }
        });
        return o;
    };
    
    $(function() {
        FastClick.attach(document.body);
    });

    App.router = router;

    App.addInitializer(function(options){
        App.getRegion('header').show(new Navigation());
    });

    App.start();
});