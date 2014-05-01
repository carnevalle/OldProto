var Backbone = require('backbone');

var PlayerCollection = require('../collections/Players');
var MatchCollection = require('../collections/Matches');

module.exports = Backbone.Model.extend({
    defaults: {

    },

    parse: function(response, options){
        response.url = "/t/"+response.id;

        response.players = new PlayerCollection(response.players).toJSON();
        response.matches = new MatchCollection(response.matches).toJSON();

        return response;
    },

    urlRoot: function(){
        return App.config.apiroot+"/teams";
    }
});
