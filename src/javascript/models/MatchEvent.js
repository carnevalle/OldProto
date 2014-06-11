var Backbone = require('backbone');

module.exports = Backbone.Model.extend({

    defaults: {
        /*'player_owner':-1,
        'player_target':-1,
        'position_start_x':-1,
        'position_start_y':-1,
        'position_end_x':-1,
        'position_end_y':-1,
        'time':-1
        */
    },

    initialize: function(attributes, options){

    },

    urlRoot: function(){

        var matchid = this.get("match_id");
        console.log("Set Match ID; ", matchid, this.toJSON());
        this.unset("match_id", {silent: true});



        return App.config.apiroot+"/matches/"+matchid+"/events";
    }
});
