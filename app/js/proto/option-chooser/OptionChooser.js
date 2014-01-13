define([
    'valueselectorview',
    'underscore',
    'proto/option-chooser/OptionChooser.hbs',
    'gsap'
    ], function (Marionette, _, template) {

    'use strict';

    return Marionette.ValueSelectorView.extend({
    	template: template,

    	initialize: function(options){

            console.log(options.options);
            //this.valueType = "field-position";
    	},

        hammerEvents: {
            'touch .fnTouch':'onTouch'
        },

        onTouch: function(e){

            e.stopPropagation();

            BetterTeamApp.trigger("BetterTeamSound", "click");
            var id = e.currentTarget.dataset.value;
            var value = _.find(this.options.options, function(option){
                return option.id == id;
            })

            this.setValue(value);
        },

        serializeData: function(){
            return {
                title: this.options.title,
                options: this.options.options
            };
        }
    })
});