var Backbone = require('backbone.marionette')

module.exports = Backbone.Marionette.ItemView.extend({
    template: require('../templates/match.scout.pitch.zones'),

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
