define([
    'valueselectorview',
    'proto/option-chooser/OptionChooser.hbs',
    'gsap'
    ], function (Marionette, template) {

    'use strict';

    return Marionette.ValueSelectorView.extend({
    	template: template,

    	initialize: function(){
            //this.valueType = "field-position";
    	},

        hammerEvents: {
            'touch .fnTouchArea':'onTouch'
        }     
    })
});