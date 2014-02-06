/*global define */
define([
    'marionette',
    'jquery',
    'underscore',
    'proto/timeslider/TimeSlider.hbs',
    'nouislider',
    'gsap'
    ], function (Marionette, $, _, template) {

    'use strict';

    return Marionette.ItemView.extend({
		template: template,
		className: 'time-slider',

		initialize: function(){
            console.log("TIME SLIDER!");
            this.isOpen = false;
		},

        hammerEvents: {
            'tap':'enableSlider',
            'tap #btn-play':'onPlayClick',
            'tap #btn-pause':'onPauseClick'
        },

        // events: function() {
        //     return window.mobilecheck() ?
        //        {

        //        } :
        //        {
        //          'click #btn-play':'onPlayClick',
        //          'click #btn-pause':'onPauseClick'
        //        }
        // },

        enableSlider: function(e){
            var el = this.$el.find('.time-progress-filled');

            if(this.isOpen){
                //TweenLite.to(el, 0.2, {height: "10px", ease: 'Strong.easeOut'});
                this.isOpen = false;
                this.$el.find('.time-container').hide();
            }else{
                //TweenLite.to(el, 0.2, {height: "30px", ease: 'Strong.easeOut'});
                this.isOpen = true;
                this.$el.find('.time-container').show();
            }
        },

        onPlayClick: function(e){
            this.startClock();
        },

        onPauseClick: function(e){
            this.stopClock();
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
                    console.log("SETVALUE", this.slider.val());
                    if(this.slideAndPlay){
                        this.startClock();
                    }

                    this.slideAndPlay = undefined;

                    TweenLite.to(this.$el.find('.time-progress-filled'), 0.5, {width: this.slider.val()+"%", ease: 'Strong.easeOut'});

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

            this.$el.find('.time-container').hide();
        },
    })
});