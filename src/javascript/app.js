var Backbone = require('backbone.marionette');
var Pace = require('pace');
var router = require('./router');

var App = new Backbone.Marionette.Application();

App.config = {
    apiroot: function(){
        if(window.location.host === "localhost:9100"){
            return "http://localhost:8000/v1";
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
    console.log("On Route");
    Pace.restart();
});

module.exports = App;
