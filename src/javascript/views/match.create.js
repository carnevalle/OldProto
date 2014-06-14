var Backbone = require('backbone.marionette');
var Match = require('../models/Match');

module.exports = Backbone.Marionette.ItemView.extend({
    template: require('../templates/match.create'),

    hammerEvents: {
        'tap #btn-create-match' : 'onCreateMatch'
    },

    events: {
      'keypress input[type=text]': 'filterOnEnter'
    },

    initialize: function(){
        _.bindAll(this, "render");
        this.model.bind('change', this.render);
    },

    filterOnEnter: function(e){
        if(e.which === 13){
            this.onCreateMatch();
        }
    },

    onCreateMatch: function(e){
        if(e){
            e.preventDefault();
            e.gesture.preventDefault();
        }

        if(this.$el.find("#create-match-form").hasClass('hidden')){
            this.$el.find("#create-match-form").removeClass('hidden');
        }else{
            var hometeam = this.$el.find("#hometeam").val();
            var awayteam = this.$el.find("#awayteam").val();


            // this.model.set({
            //     hometeam: hometeam,
            //     awayteam: awayteam
            // })

            // console.log(this.model.toJSON());

            var _this = this;

            this.model.save({
                hometeam: hometeam,
                awayteam: awayteam
            }, {
                success: function(){
                    console.log("Model Is Saved!");
                    App.router.navigate('#m/' + _this.model.get('id'), {trigger: true})
                    //_this.model.fetch();
                }
            });

            this.$el.find("#hometeam").val('');
            this.$el.find("#awayteam").val('');
        }
    }
});
