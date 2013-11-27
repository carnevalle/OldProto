define(['backbone'], function (Backbone) {

    'use strict';

    return Backbone.Model.extend({
        defaults: {
            matchid: "",
            observations: {
                bolderobring: {
                    name: "Bolderobring",
                    count: 0,
                    type: 'positive'
                },
                cross: {
                    name: "Indlæg",
                    count: 0,
                    type: 'positive'
                },
                shotFor: {
                    name: "Skud For",
                    count: 0,
                    type: 'positive'
                },
                foulFor: {
                    name: "Frispark For",
                    count: 0,
                    type: 'positive'
                },
                shotAgainst: {
                    name: "Skud Imod",
                    count: 0,
                    type: 'negative'
                },
                foulAgainst: {
                    name: "Frispark Imod",
                    count: 0,
                    type: 'negative'
                },
                cornerFor: {
                    name: "Hjørne For",
                    count: 0,
                    type: 'positive'
                },
                cornerAgainst: {
                    name: "Hjørne Imod",
                    count: 0,
                    type: 'negative'
                },
                offsideFor: {
                    name: "Offside For",
                    count: 0,
                    type: 'positive'
                },
                offsideAgainst: {
                    name: "Offside Imod",
                    count: 0,
                    type: 'negative'
                },
            }
        },

        urlRoot: function(){
            return "http://localhost:8000/v1/matches/"+this.get("match_id")+"/reports";
        }
    });

});
