define(["backbone","matchreport","localstorage"], function(Backbone, MatchReport) {

    return Backbone.Collection.extend({
        model: MatchReport,

    	localStorage: new Backbone.LocalStorage("betterteam-matchreports"),

        belongsToMatch: function(matchid) {
            return this.filter(function(report){ return (report.get('matchid') === matchid); });
        }
    });
});
