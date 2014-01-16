define([
    'valueselectorview',
    'proto/position-chooser/PositionChooser.hbs',
    'gsap'
    ], function (Marionette, template) {

    'use strict';

    return Marionette.ValueSelectorView.extend({
    	template: template,

    	initialize: function(){
    		this.$toucharea = $(document.createElement('div'));

            //this.valueType = "field-position";
    	},

        hammerEvents: {
            'touch .fnTouchArea':'onTouch'
        },

        onTouch: function(e){
        	e.gesture.preventDefault();

            BetterTeamApp.trigger("BetterTeamSound", "click");

        	var pos = this.getPosition(e.gesture.center.pageX, e.gesture.center.pageY);
        	var posNormalized = this.getNormalizedPosition(e.gesture.center.pageX, e.gesture.center.pageY);

        	this.$el.find(".selected-value").text(posNormalized);

        	var marker = this.$el.find(".positionMarker");
            marker.show();
            //marker.css({ top: pos.y-marker.height()/2+"px", left: pos.x-marker.width()/2+"px"});
        	marker.css({ 
                top: posNormalized.y+"%", 
                left: posNormalized.x+"%",
                marginLeft: -marker.width()/2+"px",
                marginTop: -marker.height()/2+"px"
            });
        	//TweenLite.to(marker, 0.1, {top: pos.y-marker.height()/2, left: pos.x-marker.width()/2});
        	TweenLite.from(marker, 0.1, {opacity: 0, scaleX: 2, scaleY: 2});
        	marker.text(posNormalized);
        	console.log("TOUCHING: ", pos, posNormalized);
            this.setValue(posNormalized);

        },

        onRender: function(){
        	this.$toucharea = this.$el.find('.fnTouchArea');
        },

        onReset: function(){
            var marker = this.$el.find(".positionMarker");
            marker.hide();
            this.$el.find(".selected-value").text("");
        },

        getPosition: function(x, y){

            x = x-this.$toucharea.offset().left;
            y = y-this.$toucharea.offset().top;

            return {
                x: x,
                y: y,
                toString: function(){
                	return "X: "+this.x+", Y: "+this.y;
                }
            }
        },

        getNormalizedPosition: function(x, y){

            var pos = this.getPosition(x,y);

            pos.x = Math.round(pos.x / this.$toucharea.width() * 100);
            pos.y = Math.round(pos.y / this.$toucharea.height() * 100);

            // Clamping numbers 0-100
            pos.x = Math.min(Math.max(pos.x, 0),100);
            pos.y = Math.min(Math.max(pos.y, 0),100);

            return pos;
        }        
    })
});