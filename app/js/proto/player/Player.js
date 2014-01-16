define([
    'marionette',
    'proto/player/Player.hbs'
    ], function (Marionette, template) {

    'use strict';

    return Marionette.ItemView.extend({
    	template: template
    })
});