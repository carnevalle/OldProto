var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
    defaults: {
        hometeam: "",
        awayteam: ""
    },

    initialize: function(attributes, options){
        if(typeof attributes != "undefined"){
            this.set(this.parse(attributes));
        }
    },

    parse: function(response, options){
        response.url = "/m/"+response.id;
        return response;
    },

    urlRoot: function(){
        return App.config.apiroot+"/matches";
    }
});
