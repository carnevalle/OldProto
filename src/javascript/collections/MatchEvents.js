var Backbone = require('backbone');
var MatchEvent = require('../models/MatchEvent');

module.exports =  Backbone.Collection.extend({
    model: MatchEvent,

    initialize: function(attributes, options){
        this.matchid = options.match_id;
    },

    url: function(){
        return App.config.apiroot+"/matches/"+this.matchid+"/events";
    }
});
