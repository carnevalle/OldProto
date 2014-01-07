var GreenSockAMDPath = "../bower_components/greensock/src/uncompressed";
require.config({
    paths: {
        'jquery': '../bower_components/jquery/jquery',
        'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap',
        'backbone': '../bower_components/backbone/backbone',
        'backbone.basicauth': '../bower_components/backbone.basicauth/backbone.basicauth',
        'backbone.wreqr': '../bower_components/backbone.wreqr/lib/amd/backbone.wreqr',
        'backbone.babysitter': '../bower_components/backbone.babysitter/lib/amd/backbone.babysitter',
        'backbone.hammer': '../bower_components/backbone.hammer/backbone.hammer',
        'underscore' : '../bower_components/underscore/underscore',
        'lodash' : '../bower_components/lodash/dist/lodash.compat',
        'handlebars': '../bower_components/handlebars.js/dist/handlebars',
        'marionette' : '../bower_components/backbone.marionette/lib/core/amd/backbone.marionette',
        'json' : '../bower_components/json2/json2',
        'nouislider': '../bower_components/nouislider/jquery.nouislider',
        'swipe': '../bower_components/Swipe/swipe',
        'hammer.core': '../bower_components/hammerjs/dist/hammer',
        'hammer': '../bower_components/hammerjs/dist/jquery.hammer',
        'kineticjs': 'vendors/kinetic-v4.7.4.min',
        'howler': 'vendors/howler',
        'timelinelite': '../bower_components/greensock/src/uncompressed/TimelineLite',
        'timelinemax': '../bower_components/greensock/src/uncompressed/TimelineMax',
        'tweenlite': '../bower_components/greensock/src/uncompressed/TweenLite',
        'tweenmax': '../bower_components/greensock/src/uncompressed/TweenMax',
        'tweencss': '../bower_components/greensock/src/uncompressed/plugins/CSSPlugin',
        'tweenease': '../bower_components/greensock/src/uncompressed/easing/EasePack',
        'gsap': '../bower_components/greensock/src/uncompressed/easing/EasePack',
        'spinjs': '../bower_components/spinjs/spin',
        'nprogress': '../bower_components/nprogress/nprogress',

        // Models
        'betterteam-collection' : 'data/BetterTeamCollection',
        'betterteam-model' : 'data/BetterTeamModel',
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
        'main' : {
            deps: ['hammer']
        },
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
        'backbone.hammer' : {
            deps: ['jquery','hammer']
        },
        'marionette' : {
            deps : ['handlebars', 'backbone.hammer'],
            exports : 'Marionette'
        },
        'nouislider' : {
            deps: ['jquery']
        },
        'swipe' : {
            deps: ['jquery']
        },
        'hammer' : {
            deps: ['jquery', 'hammer.core']
        },
        'timelinelite' : {
            deps: ['tweenlite', 'tweencss']
        },
        'tweenmax': {
            deps: ['tweenlite']
        },
        'timelinemax' : {
            deps: ['tweenmax', 'tweencss']
        },
        'gsap' : {
            deps: ['timelinelite', 'timelinemax']
        }, 
        'nprogress' : {
            deps: ['jquery']
        },                
    }
});
