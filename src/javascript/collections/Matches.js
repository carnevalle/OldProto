var Backbone = require('backbone');
var Match = require('../models/Match');

module.exports = Backbone.Collection.extend({
    model: Match,
    url: function(){
        return App.config.apiroot+"/matches";
    }
});
