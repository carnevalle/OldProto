var Backbone = require('backbone.marionette');
var $ = require('jquery');

module.exports = Backbone.Marionette.ItemView.extend({
    template: require('../templates/header'),

    hammerEvents: {
        "tap #menu" : "toggleMenu"
    },

    toggleMenu: function(){
        $('#st-container').toggleClass("st-menu-open");

        /*
        $('.st-pusher').on('click', function(){
            console.log("REmoving Class");
            $('#st-container').removeClass("st-menu-open");
        });
        */
    }
});
