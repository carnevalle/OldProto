var Backbone = require('backbone.marionette')

var InputView = require('../views/match.scout.input');

module.exports = InputView.extend({
    template: require('../templates/match.scout.input.options'),
    className: "options row",

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
            value: (isNaN(id)) ? (id === "true") : +id,
        	name: name,
        	type: this.inputType
        });
    },

    onRender: function(){

        this.$el.find('*[data-value="'+this.options.selectedValue+'"]').addClass("active");
    	this.$el.find('*[data-value="'+this.options.deactivateValue+'"]').addClass("inactive").removeClass("fnValueSelect");
        this.$toucharea = this.$el.find(".toucharea");
    },

    onShow: function(){

        this.width = this.$toucharea.outerWidth();
        this.height = this.width * 0.65;
        this.$toucharea.height(this.height);
    },
});
