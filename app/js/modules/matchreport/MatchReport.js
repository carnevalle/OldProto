/*global define */
define([
    'marionette',
    'jquery',
    'modules/matchreport/MatchReport.hbs',
    'tweenlite',
    'tweencss',
    'tweenease'
    ], function (Marionette, $, template) {

    'use strict';

    return Marionette.ItemView.extend({
		template: template,
		className: 'match',

		initialize: function(){
            console.log(this.model.toJSON());

            this.isTopToggled = false;
		},

		// events: {
  //           'touchstart .btn-scout':'onButtonClick',
  //           //'click .btn-scout':'onButtonClick'
		// },
        events: function() {
            return window.mobilecheck() ?
               {
                 'touchstart .btn-scout':'onButtonClick'
               } :
               {
                 'click .btn-scout':'onButtonClick',
                 'click .score':'onScoreClick'
               }
        },

        onScoreClick: function(){
            this.isTopToggled = !this.isTopToggled;

            if(this.isTopToggled){
                //TweenLite.to(this.$el.find(".topbar"), .2, {height:50});
                TweenLite.to(this.$el.find(".topmenu"), .2, {height:200, ease:Power1.easeOut});
            }else{
                //TweenLite.to(this.$el.find(".topbar"), .2, {height:10});
                TweenLite.to(this.$el.find(".topmenu"), .2, {height:0, ease:Power1.easeOut});
            }
        },

        onButtonClick: function(e){

            console.log("Clicking Button!");
            this.model.save();

            /*
            var el = $(e.currentTarget);
            var key = e.currentTarget.dataset.type;
            var observations = this.model.get('observations');

            observations[key].count++;

            el.find(".count").text(observations[key].count);

            TweenLite.fromTo(el.find(".count"), .2, {scaleX:1.5, scaleY:1.5}, {scaleX:1, scaleY:1});

            console.log(observations[key].count);

            this.model.set(observations);
            this.model.save();
            console.log(this.model.toJSON());
            */
        },

        onRender: function(){
            //TweenLite.to(this.$el.find(".topmenu"), .5, {height:200, ease:Power1.easeOut});
        }
    })
});
