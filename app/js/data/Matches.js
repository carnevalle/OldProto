define(["backbone","match","localstorage"], function(Backbone, match) {

    return Backbone.Collection.extend({
        //localStorage: new Backbone.LocalStorage("betterteam-matches"),
        model: match,
        url: function(){
            return "http://localhost:8000/v1/matches";
        }
    });
});
