var Backbone = require('backbone.marionette');
var d3 = require('d3');
require('simpleheat');

module.exports = Backbone.Marionette.ItemView.extend({
    template: require('../templates/match.show'),
    className: 'match',


    onShow: function(){


        this.vis = d3.select("#matchevents").append("svg");

        this.renderMatchEvents();

        $(window).resize(_.debounce(_.bind(function(){
            this.resizeHeatmap();
        },this), 150));

        this.heat = simpleheat('canvas');
        this.heat.max(3);
        // this.heat.add([38,20,2]);
        // this.heat.add([38,100,3]);
        // this.heat.add([100,100,0.5]);

        this.resizeHeatmap();
    },

    resizeHeatmap: function(){
        // this.width = this.$el.find(".toucharea").outerWidth(true);
        // this.height = this.width * 0.65;

        this.heat.clear();

        var el = this.$el.find("#heatmap");

        var w = el.outerWidth(true);
        var h = el.outerHeight(true);

        el.find('canvas').attr('width', w);
        el.find('canvas').attr('height',h);

        var matchevents = this.model.get('events');

        _(matchevents).each(_.bind(function(e){

            console.log('adding point: ', w*e.position_start_x/100,h*e.position_start_y/100);


            this.heat.add([w*e.position_start_x/100,h*e.position_start_y/100,1]);

            if(!e.position_end_x && !e.position_end_y){


            }else{

            }

        },this));

        this.heat.draw();

        // this.$el.find(".toucharea").height(this.height);
    },

    renderMatchEvents: function(){
        var matchevents = this.model.get('events');

        _(matchevents).each(_.bind(function(e){
            //console.log(e);

            if(!e.position_end_x && !e.position_end_y){
                var circle = this.vis.append("circle")
                .attr("cx", e.position_start_x+"%")
                .attr("cy", e.position_start_y+"%")
                .attr("r", 7)
                .style("fill", "#2bb673");

                if(!e.success){
                    circle.style("fill", "#d75551");
                }

            }else{

                var arrow = this.vis.append("svg:defs").selectAll("marker")
                    .data(["arrow"])
                  .enter().append("svg:marker")
                    .attr("id", String)
                    .attr("viewBox", "0 -5 10 10")
                    .attr("refX", 10)
                    .attr("refY", 0)
                    .attr("markerWidth", 4)
                    .attr("markerHeight", 4)
                    .attr("orient", "auto")
                    .append("svg:path")
                    .attr("d", "M0,-5L10,0L0,5");
                    //.style("fill", "#2bb673");

                var line = this.vis.append("line")
                .attr("x1", e.position_start_x+"%")
                .attr("y1", e.position_start_y+"%")
                .attr("x2", e.position_end_x+"%")
                .attr("y2", e.position_end_y+"%")
                .attr("marker-end", "url(#arrow)")
                //.style("stroke", "#2bb673")
                .style("stroke-width", "3px");

                if(e.success){
                    line.style("stroke", "#2bb673");
                    arrow.style("fill", "#2bb673");
                    // circle.style("fill", "#d75551");
                }else{
                    line.style("stroke", "#d75551");
                    arrow.style("fill", "#d75551");
                }
            }

        },this));
    }
});
