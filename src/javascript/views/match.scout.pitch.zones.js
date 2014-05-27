var Backbone = require('backbone.marionette')

var InputView = require('../views/match.scout.input');

module.exports = InputView.extend({
    template: require('../templates/match.scout.pitch.zones'),

    hammerEvents: {
        'tap .fnValueSelect':'onValueSelect'
    },

    onValueSelect: function(e){
        e.preventDefault();
        e.gesture.preventDefault();

        var id = e.currentTarget.dataset.value;
        var name = e.currentTarget.dataset.name;

        this.$el.find(".fnValueSelect").removeClass("active");
        $(e.currentTarget).addClass("active");

        this.setValue({
            id: id,
            name: name,
            type: this.inputType
        });
    },

    render: function(){
        var zones = this.buildZones();

        console.log("Zones: ",zones);

        this.$el.html(this.template({zones: zones}));
    },

    buildZones: function(){

        var zoneCounter = 1;
        var zones = [];

        for(var c = 0; c < 5; c++){
            //var cols = [];
            for(var r = 0; r < 3; r++){

                if(zones[r] === undefined){
                    zones[r] = [];
                }

                zones[r].push({
                    name: "Zone "+zoneCounter,
                    id: zoneCounter
                });
                zoneCounter++;
            }
        }

        return zones;
    }
});
