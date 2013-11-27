define(["backbone","player","localstorage"], function(Backbone, player) {

    return Backbone.Collection.extend({
    	//localStorage: new Backbone.LocalStorage("betterteam-players"),
        model: player,
        initialize: function(models, options){
        },
        url: function(){
            return "http://localhost:8000/v1/players";
        }
    });
});
