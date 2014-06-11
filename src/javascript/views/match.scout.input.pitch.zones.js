var Backbone = require('backbone.marionette')
var InputView = require('../views/match.scout.input');

module.exports = InputView.extend({
    template: require('../templates/match.scout.pitch.zones'),

    hammerEvents: {
        'tap .fnValueSelect':'onValueSelect'
    },

    initialize: function(options){

        this.rows = 3;
        this.columns = 5;
    },

    onValueSelect: function(e){
        e.preventDefault();
        e.gesture.preventDefault();

        var id = e.currentTarget.dataset.value;
        var name = e.currentTarget.dataset.name;

        var row = e.currentTarget.dataset.row;
        var column = e.currentTarget.dataset.column;

        this.$el.find(".fnValueSelect").removeClass("active");
        $(e.currentTarget).addClass("active");

        var x = ((parseInt(column) + 0.5)/this.columns)*100;
        var y = ((parseInt(row) + 0.5)/this.rows)*100;

        // console.log( ((x-0.5)/this.columns) * 100, ((y-0.5)/this.rows)*100);
        console.log(x,y);

        this.setValue({
            value: {
                position_start_x: x,
                position_start_y: y
            },
            name: name,
            type: this.inputType
        });
    },

    render: function(){
        var zones = this.buildZones();

        this.$el.html(this.template({zones: zones}));
    },

    buildZones: function(){

        var zoneCounter = 1;
        var zones = [];

        for(var c = 0; c < this.columns; c++){
            //var cols = [];
            for(var r = 0; r < this.rows; r++){

                if(zones[r] === undefined){
                    zones[r] = [];
                }

                zones[r].push({
                    name: "Zone "+zoneCounter,
                    id: zoneCounter,
                    row: r,
                    column: c
                });
                zoneCounter++;
            }
        }

        return zones;
    }
});
