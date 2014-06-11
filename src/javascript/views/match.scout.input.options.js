var Backbone = require('backbone.marionette')

var InputView = require('../views/match.scout.input');

module.exports = InputView.extend({
    template: require('../templates/match.scout.input.options'),
    className: "options",

    hammerEvents: {
    	'tap .fnValueSelect':'onValueSelect'
    },

    onValueSelect: function(e){
        console.log("ON VALUE SELECT");

		e.preventDefault();
        e.gesture.preventDefault();

        var id = e.currentTarget.dataset.value;
        var name = e.currentTarget.dataset.name;

        this.$el.find(".fnValueSelect").removeClass("active");
        $(e.currentTarget).addClass("active");

        this.setValue({
        	value: parseInt(id),
        	name: name,
        	type: this.inputType
        });
    },

    onRender: function(){

        this.$el.find('*[data-value="'+this.options.selectedValue+'"]').addClass("active");
    	this.$el.find('*[data-value="'+this.options.deactivateValue+'"]').addClass("inactive").removeClass("fnValueSelect");

    }
});
