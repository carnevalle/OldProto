var Backbone = require('backbone');

module.exports = Backbone.Model.extend({

    initialize: function(attributes, options){
        this.set(this.parse(attributes));
    },

    parse: function(response, options){
        response.url = "/p/"+response.id;
        return response;
    },

    urlRoot: function(){
        return App.config.apiroot+"/players";
    }
});
