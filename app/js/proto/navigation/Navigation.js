/*global define */
define(['marionette', 'proto/navigation/Navigation.hbs'], function (Marionette, template) {

    'use strict';

    return Marionette.Layout.extend({
		template: template
    })
});
