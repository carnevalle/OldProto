define(['backbone'], function (Backbone) {

    'use strict';

    return Backbone.Model.extend({
        defaults: {
            hometeam: "",
            awayteam: ""
        },
        urlRoot: function(){
            return "http://localhost:8000/v1/matches/";
        }
    });

});
