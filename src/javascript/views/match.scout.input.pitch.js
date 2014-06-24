var Backbone = require('backbone.marionette')

var InputView = require('../views/match.scout.input');
var d3 = require('d3');

module.exports = InputView.extend({
    template: require('../templates/match.scout.pitch'),
    className: 'pitch',

    hammerEvents: {
        'touch #toucharea':'onTap',
        'drag #toucharea':'onTap',
        'release #toucharea':'onTap'
    },

    initialize: function(options){
    },

    onTap: function(e){

        e.gesture.preventDefault();

        var pos = this.getPosition(e.gesture.center.pageX, e.gesture.center.pageY);

        this.showEndPin = false;

        if(e.type === "touch"){

            this.startpos = pos;
            this.endpos = pos;

        }else if(e.type === "drag"){

            this.endpos = pos;

        }else if(e.type === "dragend"){

            this.endpos = pos;

        }else if(e.type === "release"){
            this.endpos = pos;
            //this.draw();

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

        }
        this.draw();

        console.log(this.startpos, this.endpos);

        //var throttled = _.bind(_.throttle(this.draw, 500),this);
        //throttled();
    },

    doTap: function(e){
        console.log("EVENT: ", e);

        //_.bind(_.throttle(this.draw, 500),this)();
    },

    draw: function(){

        line.attr("x1", this.startpos.x)
            .attr("y1", this.startpos.y)
            .attr("x2", this.endpos.x)
            .attr("y2", this.endpos.y);
    },

    onRender: function(){
        this.$canvas = this.$el.find("#pitchcanvas");
        this.$toucharea = this.$el.find(".toucharea");
    },

    // onDomRefresh: function(){
    //     console.log("ON DOM REFRESH!!");
    //     console.log(this.$el.width(), this.$el.height());
    // },

    onShow: function(){

        // console.log("OnShow!");
        // console.log(this.$toucharea.width(), this.$toucharea.innerWidth(), this.$toucharea.outerWidth(true), this.$toucharea.css( "width" ), this.$toucharea.offset());

        this.width = this.$toucharea.outerWidth();//-15;
        this.height = this.width * 0.65;

        this.$toucharea.height(this.height);

        if(typeof this.options.selectedValue != 'undefined'){
            this.startpos = this.convertNormalizedPosition(this.options.selectedValue.position_start_x, this.options.selectedValue.position_start_y);
            this.endpos = this.convertNormalizedPosition(this.options.selectedValue.position_end_x, this.options.selectedValue.position_end_y);
            this.drawOnShow = true;
        }else{
            this.startpos = this.getPosition(0,0);
            this.endpos = this.getPosition(0,0);
        }

        this.line;

        this.vis = d3.select(".toucharea").append("svg");
            // .on("mousedown", mousedown)
            // .on("mouseup", mouseup);

        line = this.vis.append("line")
            .attr("x1", 0)
            .attr("y1", 0)
            .attr("x2", 0)
            .attr("y2", 0)
            .style("stroke", "white")
            .style("stroke-dasharray", "10px")
            .style("stroke-width", "2px");


        if(this.drawOnShow){
            this.draw();
        }


    },

    getPosition: function(x, y){

        x = x-this.$toucharea.offset().left;
        y = y-this.$toucharea.offset().top;

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

        point.x = Math.round(point.x / this.width * 100);
        point.y = Math.round(point.y / this.height * 100);

        // Clamping numbers 0-100
        point.x = Math.min(Math.max(point.x, 0),100);
        point.y = Math.min(Math.max(point.y, 0),100);

        return point;
    }
});
