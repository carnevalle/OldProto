var Backbone = require("backbone.marionette");

console.log(Backbone);

window.App = require('./app');
window.App.start();


/*
var Collection = Backbone.Collection.extend();

var ItemView = Backbone.Marionette.ItemView.extend({
    template: require("./templates/ItemView")
});

var CollectionView = Backbone.Marionette.CollectionView.extend({
    itemView: ItemView
});

var view = new CollectionView({
    collection: new Collection([
        {'name':'test1'},
        {'name':'test2'},
        {'name':'test3'},
        {'name':'test4'},
        {'name':'test5'},
        {'name':'test6'}
    ])
})


App.getRegion("app").show(view);
*/
