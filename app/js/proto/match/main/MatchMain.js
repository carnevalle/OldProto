/*global define */
define([
    'marionette',
    'jquery',
    'proto/match/main/MatchMain.hbs',
    'proto/match/matchscore/MatchScore',
    'matchevent.create',
    'proto/timeslider/TimeSlider',
    'gsap'
    ], function (Marionette, $, template, MatchScore, MatchEventCreate, TimeSlider) {

    'use strict';

    return Marionette.Layout.extend({
		template: template,

		initialize: function(options){
            this.model = options.model;
		},

        regions: {
            score: "#r-score",
            time: "#r-time",
            tabs: "#r-tabs",
            main: "#r-main"

        },

        onNavClick: function(e){

            console.log("ON NAV CLICK!", e);

            e.preventDefault();

            //this.main.reset();
        },

        onRender: function(){

            console.log("RENDER: ", this);

            this.score.show(new MatchScore({
                model: this.model
            }));

            this.time.show(new TimeSlider());

            this.main.show(new MatchEventCreate({
                model: this.model,
                what: this.options.matchEventTypes,
                who: this.options.players
            }));            

        }
    })
});