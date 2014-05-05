var Backbone = require('backbone.marionette');
var TweenLite = require('tweenlite');

module.exports = Backbone.Marionette.ItemView.extend({
    template: require('../templates/match.scout.timeslider'),
    value: 0,
    minValue: 0,
    maxValue: 90,
    isOpen: false,

    initialize: function(options){
        if(options){
            this.value = options.value;
        }

        console.log("value Slider Value: ", this.value);

    },

    hammerEvents: {
        'tap .timeslider' : 'toggle'
    },

    toggle: function(){
        if(this.isOpen){
            this.close();
        }else{
            this.open();
        }
    },

    open: function(){
        TweenLite.to(this.$el.find('.timeprogress'), 0.25, {height: "20px", ease: "Power2.easeOut"});
        this.isOpen = true;
    },

    close: function(){
        TweenLite.to(this.$el.find('.timeprogress'), 0.25, {height: "5px", ease: "Power2.easeOut"});
        this.isOpen = false;
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
