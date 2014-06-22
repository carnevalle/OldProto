var Backbone = require('backbone.marionette')

module.exports = Backbone.Marionette.ItemView.extend({
    template: require('../templates/match.scout.input.types'),
    className: "inputcontainer row",

    events:{
        'tap .btn':'onClick'
    },

    onClick: function(e){
        console.log(e);

        var index = e.currentTarget.dataset.index;

        this.trigger('inputtype:navigate', parseInt(index));
    },

    setCurrent: function(id){
        console.log('Setting Current To ', id);
        this.$el.find('.active').removeClass('active');
        var el = this.$el.find('#input-'+id);
        el.removeClass('pending');
        el.addClass('active');
    },

    clearCurrent: function(){
        this.$el.find('.active').removeClass('active');
    },

    setValue: function(id, value){
        var el = this.$el.find('#input-'+id);
        el.removeClass('pending');

        el.find('.name').text(value);
    },

    reset: function(){
        var el = this.$el.find('.btn');
        el.addClass('pending');
        el.find('.name').html('&nbsp;');
    }
});
