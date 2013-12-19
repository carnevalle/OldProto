/*global define */
define([
    'marionette',
    'jquery',
    'underscore',
    'modules/matchreport/MatchReport.hbs',
    'tweenlite',
    'tweencss',
    'tweenease',
    'nouislider',
    'bootstrap',
    'swipe'
    ], function (Marionette, $, _, template) {

    'use strict';

    return Marionette.ItemView.extend({
		template: template,
		className: 'match',

		initialize: function(){
            $('body').keyup(_.bind(this.onKeyPress, this));
		},

        events: function() {
            return window.mobilecheck() ?
               {
                 'touchstart .btn-scout':'onButtonClick'
               } :
               {
                 'click .btn-scout':'onButtonClick',
                 'click #btn-play':'onPlayClick',
                 'click #btn-pause':'onPauseClick'
               }
        },

        onKeyPress: function(e){

            if (e.keyCode === 37) {
                // left
                this.swipe.prev();

            } else if(e.keyCode === 38) {
                // up

            } else if(e.keyCode === 39) {
                // right
                this.swipe.next();

            } else if(e.keyCode === 40) {
                // left
            }
        },

        onPlayClick: function(e){
            this.startClock();
        },

        onPauseClick: function(e){
            this.stopClock();
        },

        onButtonClick: function(e){

            this.model.save();

            /*
            var el = $(e.currentTarget);
            var key = e.currentTarget.dataset.type;
            var observations = this.model.get('observations');

            observations[key].count++;

            el.find(".count").text(observations[key].count);

            TweenLite.fromTo(el.find(".count"), .2, {scaleX:1.5, scaleY:1.5}, {scaleX:1, scaleY:1});

            console.log(observations[key].count);

            this.model.set(observations);
            this.model.save();
            console.log(this.model.toJSON());
            */
        },

        startClock: function(){

            var sliderVal = Math.floor(this.slider.val());

            if(typeof this.interval === "undefined"){

                $("#btn-play").addClass('hidden');
                $("#btn-pause").removeClass('hidden');

                this.interval = setInterval(_.bind(function(){
                    var sliderVal = Math.floor(this.slider.val());
                    sliderVal += 1;
                    console.log(sliderVal);

                    this.slider.val(Math.min(sliderVal,90), true);

                    if(sliderVal == 90){
                        this.stopClock();
                    }

                },this),1000);

            }
        },

        stopClock: function(){
            console.log("Stopping Clock");

            $("#btn-pause").addClass('hidden');
            $("#btn-play").removeClass('hidden');
            this.interval = clearInterval(this.interval);
        },

        onRender: function(){
            //TweenLite.to(this.$el.find(".topmenu"), .5, {height:200, ease:Power1.easeOut});
            this.slider = this.$el.find('.noUiSlider').noUiSlider({
                handles: 1,
                step: 1,
                range: [0,90],
                start: 0,
                connect: "lower",
                serialization: {
                    to: [this.$el.find("#time-display span"), 'html'],
                    resolution: 1
                },
                set: _.bind(function(){
                    if(this.slideAndPlay){
                        this.startClock();
                    }

                    this.slideAndPlay = undefined;

                    //this.$el.find("#clock").text(this.slider.val());
                }, this),
                slide: _.bind(function(){
                    if(typeof this.interval != "undefined"){
                        this.slideAndPlay = true;
                        this.stopClock();
                    }else if(typeof this.slideAndPlay === "undefined"){
                        this.slideAndPlay = false;
                    }
                }, this),
                change: _.bind(function(){
                    console.log("Slider CHANGE callback");
                }, this)
            });
        },

        onDomRefresh: function(){

            this.swipe = new Swipe(document.getElementById('slider'), {
                // auto: 1000,
                speed: 100,
                callback: function(index, elem) {
                    console.log("SWIPING!");
                },
                transitionEnd: function(index, elem) {
                    console.log("SWIPING!");
                }
            });

            // this.$el.find('#slider').Swipe({
            //     auto: 1000,
            //     callback: function(index, elem) {
            //         console.log("SWIPING!");
            //     },
            //     transitionEnd: function(index, elem) {
            //         console.log("SWIPING!");
            //     }
            // });
        }
    })
});
