var Backbone = require('backbone');
var Player = require('../models/Player');

module.exports = Backbone.Collection.extend({
    model: Player,
    url: function(){
        return App.config.apiroot+"/players";
    }
});
