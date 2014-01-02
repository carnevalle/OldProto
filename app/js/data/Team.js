define([
    'backbone',
    'app'
    ], function (Backbone, App) {

    'use strict';

    return Backbone.Model.extend({
        defaults: {

        },

        urlRoot: function(){
            return App.config.apiroot+"/teams";
        }
    });

});