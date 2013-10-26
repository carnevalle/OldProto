define(["backbone","match","localstorage"], function(Backbone, match) {

    return Backbone.Collection.extend({
    	localStorage: new Backbone.LocalStorage("betterteam-matches"),
        model: match
    });
});