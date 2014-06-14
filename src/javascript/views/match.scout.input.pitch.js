var Backbone = require('backbone.marionette')

var InputView = require('../views/match.scout.input');
var Kinetic = require('kinetic');

module.exports = InputView.extend({
    template: require('../templates/match.scout.pitch'),

    hammerEvents: {
        'touch #pitchcanvas':'onTap',
        'drag #pitchcanvas':'onTap',
        'release #pitchcanvas':'onTap'
    },

    initialize: function(options){


    },

    onTap: function(e){

        e.gesture.preventDefault();

        var pos = this.getPosition(e.gesture.center.pageX, e.gesture.center.pageY);

        this.showEndPin = false;

        if(e.type === "touch"){

            this.startpos = pos;

        }else if(e.type === "drag"){

            this.endpos = pos;

        }else if(e.type === "dragend"){

            this.endpos = pos;

        }else if(e.type === "release"){
            this.endpos = pos;
            this.draw();

            setTimeout(_.bind(function(){
                var normalizedStartPos = this.getNormalizedPosition(this.startpos);
                var normalizedSEndPos = this.getNormalizedPosition(this.endpos);

                this.setValue({
                    name: normalizedStartPos.x+","+normalizedStartPos.y+" => "+normalizedSEndPos.x+","+normalizedSEndPos.y,
                    value:{
                        position_start_x: this.startpos.x,
                        position_start_y: this.startpos.y,
                        position_end_x: this.endpos.x,
                        position_end_y: this.endpos.y
                    },
                    type: this.inputType
                });
            },this),10);
            //this.addMarker(pos.x, pos.y, "end");
        }

        //var throttled = _.bind(_.throttle(this.draw, 500),this);
        //throttled();
    },

    doTap: function(e){
        console.log("EVENT: ", e);

        //_.bind(_.throttle(this.draw, 500),this)();
    },

    draw: function(){
        this.layer.removeChildren();

        this.line = new Kinetic.Line({
            points: [this.startpos.x,this.startpos.y,this.endpos.x,this.endpos.y],
            stroke: 'white',
            strokeWidth: 1,
            lineJoin: 'round',
            dash: [10, 5]
        });
        this.layer.add(this.line);

        this.startpin = new Kinetic.Circle({
            x: this.startpos.x,
            y: this.startpos.y,
            radius: 5,
            fill: 'green',
            stroke: 'black',
            strokeWidth: 1
        });
        this.layer.add(this.startpin);

        this.endpin = new Kinetic.Circle({
            x: this.endpos.x,
            y: this.endpos.y,
            radius: 5,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 1
        });
        this.layer.add(this.endpin);
        this.layer.draw();
    },

    onShow: function(){

        this.width = this.$el.width();
        this.height = 400;

        if(typeof this.options.selectedValue != 'undefined'){
            this.startpos = this.convertNormalizedPosition(this.options.selectedValue.position_start_x, this.options.selectedValue.position_start_y);
            this.endpos = this.convertNormalizedPosition(this.options.selectedValue.position_end_x, this.options.selectedValue.position_end_y);
            this.drawOnShow = true;
        }else{
            this.startpos = this.getPosition(0,0);
            this.endpos = this.getPosition(0,0);
        }

        this.stage = new Kinetic.Stage({
            // container: this.el,
            container: this.$el.find('#pitchcanvas')[0],
            width: this.width,
            height: this.height
        });

        this.layer = new Kinetic.Layer();
        this.stage.add(this.layer);

        if(this.drawOnShow){
            this.draw();
        }

    },

    getPosition: function(x, y){

        x = x-this.$el.offset().left;
        y = y-this.$el.offset().top;

        return {
            x: x,
            y: y
        }
    },

    convertNormalizedPosition: function(x, y){
        return {
            x: this.width * x / 100,
            y: this.height * y / 100
        }
    },

    getNormalizedPosition: function(point){

        //var pos = this.getPosition(x,y);

        point.x = Math.round(point.x / this.$el.find('#pitchcanvas').width() * 100);
        point.y = Math.round(point.y / this.$el.find('#pitchcanvas').height() * 100);

        // Clamping numbers 0-100
        point.x = Math.min(Math.max(point.x, 0),100);
        point.y = Math.min(Math.max(point.y, 0),100);

        return point;
    }
});
