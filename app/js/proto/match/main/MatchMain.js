/*global define */
define([
    'marionette',
    'jquery',
    'proto/match/main/MatchMain.hbs',
    'proto/match/matchscore/MatchScore',
    'gsap'
    ], function (Marionette, $, template, MatchScore) {

    'use strict';

    return Marionette.Layout.extend({
		template: template,

		initialize: function(options){
            this.model = options.model;
		},

        regions: {
            score: "#r-score"
        },

        onRender: function(){

            this.score.show(new MatchScore({
                model: this.model
            }));

        }
    })
});