define([
    'marionette', 
    'proto/match/matchscore/MatchScore.hbs'
], function (
    Marionette, 
    template
) {

    'use strict';

    return Marionette.ItemView.extend({
        template: template,
        className: 'matchscore',

        initialize: function(){
            console.log("SHOW MATCH SCORE");
            //this.collection.fetch();
            console.log(this.model.toJSON());
        }
    })
});
