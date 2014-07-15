var Backbone = require('backbone.marionette');
var TweenLite = require('tweenlite');

module.exports = Backbone.Marionette.ItemView.extend({
    template: require('../templates/match.scout.timeslider'),
    value: null,
    minValue: 0,
    maxValue: 90,
    isOpen: false,

    initialize: function(options){
        if(options && options.value){
            this.value = options.value;
        }

        console.log("value Slider Value: ", this.value);

    },

    hammerEvents: {
        'tap .slider' : 'setTime',
        'drag .slider' : 'setTime'
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

    setTime: function(e){
        e.gesture.preventDefault();

        var x = e.gesture.center.pageX-this.$slider.offset().left;
        var position = Math.min(x / this.$slider.width(), 1);

        this.value = Math.round(this.maxValue*position);

        if(e.type === "drag"){
            this.$progressbar.width((position*100)+"%");
        }else{
            TweenLite.to(this.$progressbar, 0.25, {width: (position*100)+"%", ease:Linear.easeNone});
        }

        this.$timetxt.html(this.value+"&prime;");
    },

    setValue: function(value){

        var progress = Math.min(this.value, this.maxValue) / this.maxValue * 100;

        console.log(progress);

        console.log(this.$el.find('.timeprogress'));

        TweenLite.to(this.$el.find('.timeprogress'), 1, {width: progress+"%", ease:Linear.easeNone});
    },

    getValue: function(){
        return this.value;
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
        this.$slider = this.$el.find(".slider");
        this.$progressbar = this.$el.find(".meter span");
        this.$timetxt = this.$el.find(".time");
        //this.setValue(this.value);
        //this.startClock();
    }
})
