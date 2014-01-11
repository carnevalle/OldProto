define([
    'marionette'
    ], function (Marionette) {

    'use strict';

    Marionette.ValueSelectorView = Marionette.ItemView.extend({

		// Ensure the regions are available when the `initialize` method
		// is called.
		constructor: function (options) {
			options = options || {};

			console.log("Options: ", options);

			Marionette.ItemView.prototype.constructor.call(this, options);
		},
    });

    return Marionette;
});