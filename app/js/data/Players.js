define([
    "backbone",
    "betterteam-collection",
    "player",
    "app"
    ], function(Backbone, BetterTeamCollection, player, App) {

    return BetterTeamCollection.extend({
        model: player,
        initialize: function(models, options){
        },
        url: function(){

            return App.config.apiroot+"/players";

            // if(true){
            //     return "http://api.betterteam.dk/v1/players";
            // }else{
            //     return "http://localhost:8000/v1/players";
            // }
        },
        fetch: function(options) {

            var _this = this;

            options.xhr = function() {
                var xhr = $.ajaxSettings.xhr();
                xhr.onprogress = function(e){
                    //console.log("progress: ", e);
                    _this.trigger('progress', _this, e);
                }
                return xhr;
            };

            this.trigger('fetch', this, options);
            return Backbone.Collection.prototype.fetch.call(this, options);
        }
    });
});