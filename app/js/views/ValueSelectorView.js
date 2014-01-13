define([
    'marionette'
    ], function (Marionette) {

    'use strict';

    Marionette.ValueSelectorView = Marionette.ItemView.extend({

		// Ensure the regions are available when the `initialize` method
		// is called.
		constructor: function (options) {
			options = options || {};

			this.value = undefined;
			this.valueType = (options.valueType) ? options.valueType : undefined;

			Marionette.ItemView.prototype.constructor.call(this, options);
		},

		setValue: function(value){
			this.value = value;
			this.trigger("value:selected");

			if(this.valueType){
				BetterTeamApp.trigger("value:"+this.valueType+":selected", this.value, this.valueType);
			}
			
			BetterTeamApp.trigger("value:selected", this.value, this.valueType);
		},

		getValue: function(){
			return this.value;
		},

		reset: function(){
			this.value = undefined;

			if(this.valueType){
				BetterTeamApp.trigger("value:"+this.valueType+":selected", this.valueType);
			}

			BetterTeamApp.trigger("value:reset", this.valueType);

			this.onReset();
		},

		toggle: function(){
			console.log("I want to toggle this bastard!");
		},

		onReset: function(){

		}
    });

    return Marionette;
});