var Backbone = require('backbone');

module.exports = Backbone.Model.extend({

    defaults: {
        "side" : "us"
    },

    initialize: function(attributes, options){

    },

    urlRoot: function(){

        var matchid = this.get("match_id");
        this.unset("match_id", {silent: true});

        return App.config.apiroot+"/matches/"+matchid+"/events";
    }
});
