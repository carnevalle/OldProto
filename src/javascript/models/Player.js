var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
    urlRoot: function(){
        return App.config.apiroot+"/players";
    }
});
