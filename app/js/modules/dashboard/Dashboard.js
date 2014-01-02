/*global define */
define([
    'marionette',
    'app',
    'modules/dashboard/Dashboard.hbs',
    'howler'
    ], function (Marionette, App, template, Howler) {

    'use strict';

    return Marionette.ItemView.extend({
		template: template,
		className: 'dashboard',

		initialize: function(){
            console.log("INIT DASHBOARD!");

            this.sound = new Howl({
              urls: ['sound/click3.wav']
            })
		},

        events: function() {
            return window.mobilecheck() ?
               {
                 'touchstart .btbtn':'onButtonClick'
               } :
               {
                 'click .btbtn':'onButtonClick'
               }
        },

        onButtonClick: function(){
            console.log("ON onButtonClick");
            
            this.sound.play();
        }
    })
});
