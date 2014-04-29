var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
    defaults: {
        hometeam: "",
        awayteam: ""
    },
    urlRoot: function(){
        return App.config.apiroot+"/matches";
    }
});
