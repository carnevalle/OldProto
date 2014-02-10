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
        value: 0,
        minValue: 0,
        maxValue: 90,

		initialize: function(options){
            if(options){
                this.value = options.value;
            }

            console.log("value Slider Value: ", this.value);

		},

        hammerEvents: {

        },

        setValue: function(value){

            var progress = Math.min(this.value, this.maxValue) / this.maxValue * 100;

            console.log(progress);

            console.log(this.$el.find('.timeprogress'));

            TweenLite.to(this.$el.find('.timeprogress'), 1, {width: progress+"%", ease:Linear.easeNone});
        },

        getValue: function(value){

        },

        onPlayClick: function(e){
            this.startClock();
        },

        onPauseClick: function(e){
            this.stopClock();
        },

        startClock: function(){

            if(typeof this.interval === "undefined"){

                this.interval = setInterval(_.bind(function(){

                    console.log("Updating Clock");

                    this.value += 1;
                    this.value = Math.min(this.value, this.maxValue);

                    this.setValue(this.value);

                    if(this.value === this.maxValue){
                        this.stopClock();
                    }

                    /*
                    var sliderVal = Math.floor(this.slider.val());
                    sliderVal += 1;
                    console.log(sliderVal);

                    this.slider.val(Math.min(sliderVal,90), true);

                    if(sliderVal == 90){
                        this.stopClock();
                    }
                    */

                },this),1000);

            }
        },

        stopClock: function(){
            this.interval = clearInterval(this.interval);
        },

        onRender: function(){
            this.setValue(this.value);
            this.startClock();
        }
    })
});