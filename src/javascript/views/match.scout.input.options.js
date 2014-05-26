var Backbone = require('backbone.marionette')

var InputView = require('../views/match.scout.input');

module.exports = InputView.extend({
    template: require('../templates/match.scout.input.options'),
    className: "options",

    hammerEvents: {
    	'tap .fnValueSelect':'onValueSelect'
    },

    onValueSelect: function(e){
    	console.log('on value select!');

		e.preventDefault();
        e.gesture.preventDefault();

        var id = e.currentTarget.dataset.value;
        var name = e.currentTarget.dataset.name;

        console.log(id, name);

        this.$el.find(".fnValueSelect").removeClass("active");
        $(e.currentTarget).addClass("active");

        this.setValue({
        	value: id,
        	title: name,
        	type: this.inputType
        });
    },

    onAfterItemAdded: function(itemView){

    	/*
    	var $el = itemView.$el.find(".fnSelectValue");

        if($el[0].dataset.value == this.options.selectedValue){
        	$el.addClass("active");
        }
        */
    }/*,

    serializeData: function(){
        return {
            title: this.options.title,
            options: this.options.options
        };
    }
    */
});
