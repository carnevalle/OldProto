/*global define */
define([
    'marionette',
    'jquery',
    'modules/matchreport/MatchReport.hbs',
    'tweenlite',
    'tweencss',
    ], function (Marionette, $, template) {

    'use strict';

    return Marionette.ItemView.extend({
		template: template,
		className: 'match',

		initialize: function(){
            console.log(this.model.toJSON());
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
                 'click .btn-scout':'onButtonClick'
               }
        },


        onButtonClick: function(e){
            if(window.mobilecheck() && e.type === 'click'){
                //return;
            }

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
        },

        onRender: function(){
            TweenLite.fromTo(this.$el.find(".fnPitch"), .5, {alpha:0}, {alpha:1});
        }
    })
});
