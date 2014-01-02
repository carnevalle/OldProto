require.config({
    paths: {
        'jquery': '../bower_components/jquery/jquery',
        'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap',
        'backbone': '../bower_components/backbone/backbone',
        'backbone.basicauth': '../bower_components/backbone.basicauth/backbone.basicauth',
        'backbone.wreqr': '../bower_components/backbone.wreqr/lib/amd/backbone.wreqr',
        'backbone.babysitter': '../bower_components/backbone.babysitter/lib/amd/backbone.babysitter',
        'localstorage': '../bower_components/backbone.localStorage/backbone.localStorage',
        'underscore' : '../bower_components/underscore/underscore',
        'lodash' : '../bower_components/lodash/dist/lodash.compat',
        'handlebars': '../bower_components/handlebars.js/dist/handlebars',
        'marionette' : '../bower_components/backbone.marionette/lib/core/amd/backbone.marionette',
        'fastclick' : '../bower_components/fastclick/lib/fastclick',
        'holderjs' : '../bower_components/holderjs/holder',
        'json' : '../bower_components/json2/json2',
        'touchpunch': '../bower_components/jqueryui-touch-punch/jquery.ui.touch-punch',
        'nouislider': '../bower_components/nouislider/jquery.nouislider',
        'swipe': '../bower_components/Swipe/swipe',
        'hammer': '../bower_components/hammerjs/hammer',
        'hammer.jquery': '../bower_components/jquery-hammerjs/jquery.hammer-standalone',
        'play-audio': '../bower_components/play-audio/dist/play-audio',
        'kineticjs': 'vendors/kinetic-v4.7.4.min',
        'howler': 'vendors/howler',
        'tweenlite': '../bower_components/greensock/src/uncompressed/TweenLite',
        'tweencss': '../bower_components/greensock/src/uncompressed/plugins/CSSPlugin',
        'tweenease': '../bower_components/greensock/src/uncompressed/easing/EasePack',
        'gsap': '../bower_components/greensock/src/uncompressed/easing/EasePack',

        // Models
        'team' : 'data/Team',
        'teams' : 'data/Teams',
        'match' : 'data/Match',
        'matches' : 'data/Matches',
        'player' : 'data/Player',
        'players' : 'data/Players',
        'matchreport' : 'data/MatchReport',
        'matchreports' : 'data/MatchReports',
    },
    shim: {
        'jquery' : {
            exports : 'jQuery'
        },
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jQuery'
        },
        'underscore' : {
            exports : '_'
        },
        'handlebars': {
            exports: 'Handlebars'
        },
        'backbone' : {
            deps : ['bootstrap', 'lodash'],
            exports : 'Backbone'
        },
        'marionette' : {
            deps : ['backbone', 'backbone.wreqr', 'backbone.babysitter', 'handlebars'],
            exports : 'Marionette'
        },
        'touchpunch': {
            deps: ['jquery']
        },
        'nouislider' : {
            deps: ['jquery']
        },
        'swipe' : {
            deps: ['jquery']
        },
        'hammer.jquery' : {
            deps: ['jquery', 'hammer']
        },
        'gsap' : {
            deps: ['tweenlite', 'tweencss']
        },        
    }
});
