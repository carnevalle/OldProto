Backbone = require('backbone');

module.exports = Backbone.Model.extend({
    defaults: {

    },

    urlRoot: function(){
        return App.config.apiroot+"/teams";
    }
});
