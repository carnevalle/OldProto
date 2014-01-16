define([
    'marionette',
    'proto/team/Team.hbs'
    ], function (Marionette, template) {

    'use strict';

    return Marionette.ItemView.extend({
    	template: template
    })
});