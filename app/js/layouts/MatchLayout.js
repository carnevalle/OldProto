/*global define */
define([
    'marionette',
    'jquery',
    'layouts/MatchLayout.hbs',
    'proto/match/matchscore/MatchScore',
    'gsap',
    'howler'
    ], function (Marionette, $, template, MatchScore) {

    'use strict';

    return Marionette.Layout.extend({
		template: template,
		className: '',

		initialize: function(options){
            console.log(options);

            this.model = options.model;

            this.sound = new Howl({
              urls: ['sound/click3.wav']
            })

            //$(document).bind('touchmove', false);
		},

        regions: {
            score: "#r-score",
            top: "#r-top",
            bottom: "#r-bottom",
        },

        hammerEvents: {
            'touch .fnRegisterEvent':'onRegisterEvent',
            'touch .fnRegisterWho':'onRegisterWho',
            'touch .fnEditEvent':'onEditEvent',
            'touch .fnEditWho':'onEditWho'
        },

        /*
        events: function() {
            return window.mobilecheck() ?
               {
                 'touchstart .fnRegisterEvent':'onRegisterEvent',
                 'touchstart .fnRegisterWho':'onRegisterWho',
                 'touchstart .fnEditEvent':'onEditEvent',
                 'touchstart .fnEditWho':'onEditWho'
               } :
               {
                 'click .fnRegisterEvent':'onRegisterEvent',
                 'click .fnRegisterWho':'onRegisterWho',
                 'click .fnEditEvent':'onEditEvent',
                 'click .fnEditWho':'onEditWho'
               }
        },
        */        

        onRegisterEvent: function(e){
            this.sound.play();
            e.stopPropagation()

            console.log(e.currentTarget.dataset.value);
            var eventId = e.currentTarget.dataset.value;

            var box = this.$el.find("#r-top");

            box.find('.selected-value').text(eventId);

            TweenLite.from(box.find('.selected-value'), 0.5, {marginLeft: 15, opacity: 0, ease: "Power2.easeOut"});

            box.find('.register-label').hide();

            //this.$el.find("#r-top").addClass('collapsed');
            this.registerWhatTween = TweenLite.to(box.find('.hideable'), 0.1,{
                height: 0, 
                onComplete: function(){
                    console.log("On Complete!");
                    box.addClass('collapsed');
                }
            });
        },

        onEditEvent: function(e){
            console.log("onEditEvent");

            //this.$el.find('.selected-value').text(Math.random()+''+window.mobilecheck());

            this.$el.find('#r-top .selected-value').text("");
            this.$el.find('#r-top .register-label').show();
            $(e.currentTarget).removeClass('collapsed');
            this.registerWhatTween.reverse();
        },

        onRegisterWho: function(e){
            this.sound.play();
            e.stopPropagation()

            console.log(e.currentTarget.dataset.value);
            var eventId = e.currentTarget.dataset.value;

            var box = this.$el.find("#r-who");

            box.find('.selected-value').text(eventId);

            TweenLite.from(box.find('.selected-value'), 0.5, {marginLeft: 15, opacity: 0, ease: "Power2.easeOut"});

            box.find('.register-label').hide();

            //this.$el.find("#r-top").addClass('collapsed');
            this.registerWhoTween = TweenLite.to(box.find('.hideable'), 0.1,{
                height: 0, 
                onComplete: function(){
                    console.log("On Complete!");
                    box.addClass('collapsed');
                }
            });
        },

        onEditWho: function(e){
            //this.$el.find('.selected-value').text(Math.random()+''+window.mobilecheck());

            this.$el.find('#r-who .selected-value').text("");
            this.$el.find('#r-who .register-label').show();
            $(e.currentTarget).removeClass('collapsed');
            this.registerWhoTween.reverse();
        },

        onRender: function(){

            this.score.show(new MatchScore({
                model: this.model
            }));
            
            //TweenLite.from(this.$el.find("#r-top"), 0.3, {top:'+=10px', opacity: 0, delay: 0.5});
            //TweenLite.from(this.$el.find("#r-bottom"), 0.3, {top:'+=10px', opacity: 0, delay: 0.6});
        },

        onDomRefresh: function(){
            
            //this.bottom.getEl().slideDown("slow");            
        },

        onClose: function(){
            //$(document).unbind('touchmove');
        }
    })
});