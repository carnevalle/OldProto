var Backbone = require('backbone.marionette')

module.exports = Backbone.Marionette.ItemView.extend({
    template: require('../templates/match.scout.input.types'),
    className: "inputcontainer",

    events:{
        'tap .btn-select':'onClick'
    },

    onClick: function(e){
        console.log(e);

        var index = e.currentTarget.dataset.index;

        this.trigger('inputtype:navigate', parseInt(index));
    },

    setCurrent: function(id){
        console.log('Setting Current To ', id);
        this.$el.find('.current').removeClass('current');
        var el = this.$el.find('#input-'+id);
        el.removeClass('pending');
        el.addClass('current');
    },

    clearCurrent: function(){
        this.$el.find('.current').removeClass('current');
    },

    setValue: function(id, value){
        var el = this.$el.find('#input-'+id);
        el.removeClass('pending');

        el.find('.name').text(value);
    },

    reset: function(){
        var el = this.$el.find('.btn-select');
        el.addClass('pending');
        el.find('.name').html('&nbsp;');
    }
});
