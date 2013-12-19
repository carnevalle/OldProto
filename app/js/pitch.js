define([
  "jquery",
  "underscore",
  "kineticjs",
  "hammer.jquery"
  ], function($, _, Kinetic) {


    console.log("Kinetic: ", Kinetic);

    var Pitch = function(container, options) {

        var defaults = {
          toucharea: ".toucharea"
        };

        this.options = _.extend({}, defaults, options);
        this.markers = [];

        //this.$container = $(this.options.selector || document.createElement('div'));
        this.$container = container;
        this.$toucharea = this.$container.find(this.options.toucharea);
        this.hammertime = this.$container.hammer({ drag_lock_to_axis: true });

        // this.offsetX = this.$container.offset().left;
        // this.offsetY = this.$container.offset().top;
        this.width = this.$container.width();
        this.height = this.$container.height();

        this.$display = $(document.createElement('div'));
        this.$display.addClass("display");
        this.$container.append(this.$display);

        // this.$canvas = $('<canvas/>',{'id':'pitchcanvas'})
        // .width(this.width)
        // .height(this.height);

        this.$canvas = $('<div/>',{'id':'pitchcanvas', 'class':'canvas'});
        this.$container.append(this.$canvas);

        this.stage = new Kinetic.Stage({
            container: 'pitchcanvas',
            width: this.width,
            height: this.height
        });

        var layer = new Kinetic.Layer({
            id: "layer"
        });

      var circle = new Kinetic.Circle({
        x: this.stage.getWidth() / 2,
        y: this.stage.getHeight() / 2,
        radius: 70,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4
      });


        this.stage.add(layer);

        var all_events = ["touch", "release", "hold", "tap", "doubletap", "dragstart", "drag", "dragend", "dragleft", "dragright", "dragup", "dragdown", "swipe", "swipeleft", "swiperight", "swipeup", "swipedown", "transformstart", "transform", "transformend", "rotate", "pinch", "pinchin", "pinchout"];

        this.hammertime.on("dragstart", "img", function(e) {
            return false;
        });

        var _this = this;
        //this.hammertime.on(all_events.join(" "), function(e) {
        this.hammertime.on("touch release dragstart drag dragend", function(e) {

            e.gesture.preventDefault();

            console.log(e);
            console.log(_this.getNormalizedPosition(e.gesture.center.pageX, e.gesture.center.pageY))

            var pos = _this.getPosition(e.gesture.center.pageX, e.gesture.center.pageY);

            _this.$display.text("X="+pos.x+",Y="+pos.y+" ("+e.type+")");

            if(e.type === "touch"){
                _this.addMarker(pos.x, pos.y, "start");
            }else if(e.type === "release"){
                _this.addMarker(pos.x, pos.y, "end");
            }

        });

        this.init();
    }

    Pitch.prototype = {
        init: function(){
            console.log("INIT PITCH");
            console.log(this);
        },

        addMarker: function(x, y, type){
            console.log("add marker: ", x, y, type);

            var circle = new Kinetic.Circle({
                x: x,
                y: y,
                radius: 70,
                fill: 'red',
                stroke: 'black',
                strokeWidth: 4
            });

            this.stage.getLayer('layer').add(circle);

            /*
            var marker = $(document.createElement('div'));
            marker.addClass("marker");
            marker.addClass(type);
            marker.css({ "top": y+"%", "left": x+"%" });

            this.markers.push(marker);
            this.$container.append(marker);

            return marker;
            */
        },

        getPosition: function(x, y){

            x = x-this.$container.offset().left;
            y = y-this.$container.offset().top;

            return {
                x: x,
                y: y
            }
        },

        getNormalizedPosition: function(x, y){

            var pos = this.getPosition(x,y);

            pos.x = Math.round(pos.x / this.$container.width() * 100);
            pos.y = Math.round(pos.y / this.$container.height() * 100);

            // Clamping numbers 0-100
            pos.x = Math.min(Math.max(pos.x, 0),100);
            pos.y = Math.min(Math.max(pos.y, 0),100);

            return pos;
        }
    }

    return Pitch
});
