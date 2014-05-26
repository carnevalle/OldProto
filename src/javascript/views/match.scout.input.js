var Backbone = require('backbone.marionette')

module.exports = Backbone.Marionette.ItemView.extend({
    constructor: function(options){

        console.l
    	options = options || {};

		this.value = undefined;
		this.inputType = (options.inputType) ? options.inputType : undefined;

		Backbone.Marionette.ItemView.prototype.constructor.call(this, options);
    },

    setValue: function(value){
        console.log("Setting Value");
    	this.value = value;

    	if(this.inputType){
    		this.trigger('value:'+this.inputType+':selected', this.value, this.valueType);
		}

        this.trigger('value:selected', this.value, this.valueType);
    },

    getValue: function(){
    	return this.value;
    },

    reset: function(){
		this.value = undefined;

		if(this.inputType){
    		this.trigger('value:'+this.inputType+':reset', this.inputType);
		}

		this.trigger('value:reset', this.inputType);
    }
});