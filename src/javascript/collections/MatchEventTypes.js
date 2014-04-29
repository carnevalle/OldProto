var Backbone = require('backbone');
var MatchEventType = require('../models/MatchEventType');

module.exports = Backbone.Collection.extend({
    model: MatchEventType,
    url: function(){
        return App.config.apiroot+"/matcheventtypes";
    }
});
