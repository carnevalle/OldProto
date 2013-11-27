define(["backbone","matchreport","localstorage"], function(Backbone, MatchReport) {

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
            console.log("http://localhost:8000/v1/matches/"+this.matchid+"/reports");
            return "http://localhost:8000/v1/matches/"+this.matchid+"/reports";
        }
    });
});
