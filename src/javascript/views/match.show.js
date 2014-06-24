var Backbone = require('backbone.marionette');
var d3 = require('d3');

module.exports = Backbone.Marionette.ItemView.extend({
    template: require('../templates/match.show'),
    className: 'match',


    onShow: function(){
        this.width = this.$el.find(".toucharea").outerWidth();
        this.height = this.width * 0.65;

        this.$el.find(".toucharea").height(this.height);

        this.vis = d3.select(".toucharea").append("svg");

        this.renderMatchEvents();
    },

    renderMatchEvents: function(){
        var matchevents = this.model.get('events');

        // var circles = this.vis.selectAll("circle")
        //     .data(matchevents)
        //     .enter()
        //     .append("circle");

        // circles.attr("cx", function (d) { return d.position_start_x+"%"; })
        //     .attr("cy", function (d) { return d.position_start_y+"%"; })
        //     .attr("r", "10")
        //     .style("fill", "#2c3e50");

        _(matchevents).each(_.bind(function(e){
            console.log(e);

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


                // var circle = this.vis.append("circle")
                // .attr("cx", e.position_start_x+"%")
                // .attr("cy", e.position_start_y+"%")
                // .attr("r", 4)
                // .style("fill", "#2bb673");

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
                    .attr("d", "M0,-5L10,0L0,5")
                    .style("fill", "#2bb673");

                var line = this.vis.append("line")
                .attr("x1", e.position_start_x+"%")
                .attr("y1", e.position_start_y+"%")
                .attr("x2", e.position_end_x+"%")
                .attr("y2", e.position_end_y+"%")
                .attr("marker-end", "url(#arrow)")
                .style("stroke", "#2bb673")
                .style("stroke-width", "2px");

                if(!e.success){
                    line.style("stroke", "#d75551");
                    arrow.style("fill", "#d75551");
                    // circle.style("fill", "#d75551");
                }
            }

        },this));
    }
});
