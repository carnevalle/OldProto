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

        console.log("initialize");

        console.log(options);


        if(typeof options.selectedValue != 'undefined'){
            this.startpos = options.selectedValue.startpos;
            this.endpos = options.selectedValue.endpos;
            this.drawOnShow = true;
        }else{
            this.startpos = this.getPosition(0,0);
            this.endpos = this.getPosition(0,0);
        }
    },

    onTap: function(e){

        var pos = this.getPosition(e.gesture.center.pageX, e.gesture.center.pageY);

        this.showEndPin = false;

        if(e.type === "touch"){

            this.startpos = pos;

            /*
            if(typeof this.startpos === 'undefined'){
                this.startpos = pos;
            }else{
                this.endpos = pos;
            }
            */

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
                        startpos: this.startpos,
                        endpos: this.endpos
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
        this.layer.clear();

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
        this.stage = new Kinetic.Stage({
            // container: this.el,
            container: this.$el.find('#pitchcanvas')[0],
            width: this.$el.width(),
            height: 400
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
