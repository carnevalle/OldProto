define([
    'backbone',
    'app'
    ], function (Backbone, App) {

    'use strict';

    return Backbone.Model.extend({
        defaults: {
            name: "Michael Laudrup",
            birthdate: "",
            positions: []
        },

        urlRoot: function(){
            return App.config.apiroot+"/players";
        }
    });

});
