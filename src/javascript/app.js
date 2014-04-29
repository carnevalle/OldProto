var Backbone = require('backbone');
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

App.on('start', function() {

    console.log("App Start");

    Backbone.history.start({
        //pushState: true
    });
});

App.router = router;

module.exports = App;
