define([
  "jquery",
  "underscore",
  "kineticjs",
  "hammer.jquery"
  ], function($, _, Kinetic) {


    //console.log("Kinetic: ", Kinetic);

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

        this.$canvascontainer = $('<div/>',{'id':'pitchcanvas', 'class':'canvas'});
        this.$container.append(this.$canvascontainer);

        this.canvas = {
            stage: new Kinetic.Stage({
                container: 'pitchcanvas',
                width: this.width,
                height: this.height
            }),
            layer: new Kinetic.Layer()
        }

        this.canvas.stage.add(this.canvas.layer);

        var all_events = ["touch", "release", "hold", "tap", "doubletap", "dragstart", "drag", "dragend", "dragleft", "dragright", "dragup", "dragdown", "swipe", "swipeleft", "swiperight", "swipeup", "swipedown", "transformstart", "transform", "transformend", "rotate", "pinch", "pinchin", "pinchout"];

        //this.hammertime.on("dragstart", "img", function(e) {
            //return false;
        //});

        var _this = this;


        // this.hammertime.on("dragstart drag dragend", _.bind(function(e) {

        //     console.log(e.type);

        //     var pos = this.getPosition(e.gesture.center.pageX, e.gesture.center.pageY);

        //     if(e.type === "dragstart"){

        //         this.dragline = new Kinetic.Line({
        //             points: [pos.x, pos.y],
        //             stroke: 'rgba(0,0,0,0.5)',
        //             dashArray: [10, 5]
        //         });

        //         this.canvas.layer.add(this.dragline);

        //         this.dragstart = pos;

        //     }else if(e.type === "dragend"){

        //         this.dragstart = pos;
        //     }else{
        //         console.log();

        //         this.dragstart = pos;
        //         console.log(this.dragline.getPoints());
        //         var points = this.dragline.getPoints();

        //         if(points.length === 1){
        //             points.push(pos);
        //         }else{
        //             points[1] = pos;
        //         }


        //         //console.log(points);
        //         //this.dragline.setPoints(this.dragline.getPoints().push(pos));
        //     }

        //     this.canvas.layer.draw();

        // },this));

        this.hammertime.on("touch release dragstart drag dragend", _.bind(function(e) {
            //console.log(e);
            e.gesture.preventDefault();

            var pos = this.getPosition(e.gesture.center.pageX, e.gesture.center.pageY);
            this.$display.text("X="+pos.x+",Y="+pos.y+" ("+e.type+")");

            if(e.type === "touch"){
                this.dragline = new Kinetic.Line({
                    points: [pos.x, pos.y],
                    stroke: 'rgba(0,0,0,0.5)',
                    dashArray: [10, 5]
                });

                this.canvas.layer.add(this.dragline);
                this.dragstart = pos;

                this.addMarker(pos.x, pos.y, "start");

            }else if(e.type === "drag"){

                this.dragend = pos;
                var points = this.dragline.getPoints();

                if(points.length === 1){
                    points.push(pos);
                }else{
                    points[1] = pos;
                }

            }else if(e.type === "dragend"){

                this.dragend = pos;
                var points = this.dragline.getPoints();

                if(points.length === 1){
                    points.push(pos);
                }else{
                    points[1] = pos;
                }

            }else if(e.type === "release"){
                this.addMarker(pos.x, pos.y, "end");
            }

            this.canvas.layer.draw();

        },this));

        this.init();
    }

    Pitch.prototype = {
        init: function(){
            console.log("INIT PITCH");
            console.log(this);
        },

        addMarker: function(x, y, type){
            console.log("add marker: ", x, y, type);

            var color = "";
            if(type === "start"){
                color = "green";
            }else{
                color = "red";
            }

            var circle = new Kinetic.Circle({
                x: x,
                y: y,
                radius: 15,
                fill: color,
                stroke: 'rgba(0,0,0,0.6)',
                strokeWidth: 2,
                listening: false
            });

            this.canvas.layer.add(circle);
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
