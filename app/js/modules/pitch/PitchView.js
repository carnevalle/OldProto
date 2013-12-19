/*global define */
define([
    'marionette',
    'app',
    'modules/pitch/PitchView.hbs',
    'pitch'
    ], function (Marionette, App, template, Pitch) {

    'use strict';

    return Marionette.ItemView.extend({
		template: template,
		className: 'footballpitch-wrapper',

		initialize: function(){
            console.log("INIT!");
		},

        onRender: function(){

        },

        onDomRefresh: function(){
            console.log("DOM REFRESH!");
            var self = this;
            new Pitch(this.$el);
        }
    })
});
