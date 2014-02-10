define([
    'marionette',
    'proto/team/Team.hbs',
    'match'
    ], function (Marionette, template, MatchModel) {

    'use strict';

    return Marionette.ItemView.extend({
    	template: template,

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
    		console.log("on KEY PRESS");
			if(e.which === 13){
				this.onCreateMatch();
			}
    	},

    	onCreateMatch: function(e){
    		console.log("create match", e);

    		if(e){
	    		e.preventDefault();
	    		e.gesture.preventDefault();
    		}

    		if(this.$el.find("#create-match-form").hasClass('hidden')){
				this.$el.find("#create-match-form").removeClass('hidden');
    		}else{
				var hometeam = this.$el.find("#hometeam").val();
				var awayteam = this.$el.find("#awayteam").val();

				var match = new MatchModel();

				var _this = this;

				match.save({
					hometeam: hometeam,
					awayteam: awayteam,
					team_id: this.model.get('id')
				}, {
					success: function(){
						_this.model.fetch();
					}
				});

				this.$el.find("#hometeam").val('');
				this.$el.find("#awayteam").val('');    			
    		}	
    	}
    })
});