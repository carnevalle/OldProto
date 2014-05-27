var Backbone = require('backbone.marionette')

module.exports = Backbone.Marionette.ItemView.extend({
    template: require('../templates/match.scout.input.types'),
    className: "inputcontainer",

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
