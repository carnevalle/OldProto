define(["backbone","player","localstorage"], function(Backbone, player) {

    return Backbone.Collection.extend({
    	localStorage: new Backbone.LocalStorage("betterteam-players"),
        model: player
    });
});