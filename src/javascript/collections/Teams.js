var Backbone = require('backbone');
var Team = require('../models/Team');

module.exports = Backbone.Collection.extend({
    model: Team,

    url: function(){
        return App.config.apiroot+"/teams";
    }
});
