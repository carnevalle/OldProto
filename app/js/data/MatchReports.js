define([
    "backbone",
    "matchreport",
    "app"
    ], function(Backbone, MatchReport, App) {

    return Backbone.Collection.extend({
        model: MatchReport,

    	//localStorage: new Backbone.LocalStorage("betterteam-matchreports"),

        initialize: function(models, options){

            if(typeof options !== "undefined"){
                this.matchid = options.matchid;
            }
        },

        belongsToMatch: function(matchid) {
            return this.filter(function(report){ return (report.get('matchid') === matchid); });
        },

        url: function(){
            return App.config.apiroot+"/matches/"+this.matchid+"/reports";

            // if(true){
            //     return "http://api.betterteam.dk/v1/matches/"+this.matchid+"/reports";
            // }else{
            //     return "http://localhost:8000/v1/matches/"+this.matchid+"/reports";
            // }
        }
    });
});
