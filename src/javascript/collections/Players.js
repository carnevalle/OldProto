var Backbone = require('backbone');
var Player = require('../models/Player');

module.exports = Backbone.Collection.extend({
    model: Player,
    url: function(){
        return App.config.apiroot+"/players";
    },

    comparator: function(model){
        return model.get('number');
    },

    fromNation: function(nation){
        filtered = this.filter(function(player) {
            return player.get("nation") === nation;
        });

        console.log(filtered);

        //this.reset(filtered);
        return new module.exports(filtered);
    }
});
