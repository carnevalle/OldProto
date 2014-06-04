var Backbone = require('backbone.marionette');
var Pace = require('pace');
var router = require('./router');

var App = new Backbone.Marionette.Application();

App.config = {
    apiroot: function(){

        //console.log("http://"+window.location.host+":8000/v1");

        //return "http://10.113.206.32:8000/v1";
        if(window.location.host === "localhost:8080"){
            return "http://"+window.location.hostname+":8000/v1";
            //return "http://api.betterteam.app:8000/v1";
        }else{
            return "http://api.betterteam.dk/v1";
        }
    }()
}

App.addRegions({
    app: '#app'
});

App.on('start', function() {
    Backbone.history.start({
        //pushState: true
    });
});

App.router = router;

App.router.on('route', function(name,args){
    //Pace.restart();
});


Backbone.Marionette.Region.prototype.open = function(view){
    this.$el.hide();
    this.$el.html(view.el);
    this.$el.fadeIn('fast');
}

module.exports = App;
