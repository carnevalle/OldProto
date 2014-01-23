/*global define */
define([
    'marionette',
    'jquery',
    'proto/matchevent/create/MatchEventCreate.hbs',
    'proto/match/matchscore/MatchScore',
    'proto/position-chooser/PositionChooser',
    'proto/option-chooser/OptionChooser',
    'modules/timeslider/TimeSlider',
    'gsap',
    'howler'
    ], function (Marionette, $, template, MatchScore, PositionChooser, OptionChooser, TimeSlider) {

    'use strict';

    return Marionette.Layout.extend({
		template: template,
		className: '',

		initialize: function(options){
            console.log(options);

            this.model = options.model;

            var _this = this;

            BetterTeamApp.on("value:selected", function(value, type){
                console.log(value, type);

                if(type === "where"){
                    _this.where.currentView.toggle();
                }else if(type === "who"){

                    var box = _this.$el.find('.fnToggleWho');
                    box.find('.selected-value').text(value.name);
                    TweenLite.from(box.find('.selected-value'), 0.5, {marginLeft: 15, opacity: 0, ease: "Power2.easeOut"});
                    box.find('.register-label').hide();

                    _this._onToggleBox(box);

                }else if(type === "what"){

                    var box = _this.$el.find('.fnToggleWhat');
                    box.find('.selected-value').text(value.name);
                    TweenLite.from(box.find('.selected-value'), 0.5, {marginLeft: 15, opacity: 0, ease: "Power2.easeOut"});
                    box.find('.register-label').hide();

                    _this._onToggleBox(box);

                }
            })
		},

        regions: {
            score: "#r-score",
            who: "#r-who",
            what: "#r-what",
            where: "#r-where",
            when: "#r-time"
        },

        hammerEvents: {
            'tap .fnToggleWhat' : 'onToggleWhat',
            'tap .fnToggleWho' : 'onToggleWho',
            /*
            'touch .fnRegisterWhat':'onRegisterWhat',
            'touch .fnRegisterWho':'onRegisterWho',
            'touch .fnEditWhat':'onEditWhat',
            'touch .fnEditWho':'onEditWho',
            */
            'tap .fnSaveEvent':'onSaveEvent',
        },

        onSaveEvent: function(){
            BetterTeamApp.trigger("BetterTeamSound", "slide");
            this.where.currentView.reset()
        },   

        onToggleWhat: function(e){
            console.log("Toggle What?");
            e.stopPropagation();

            var box = $(e.currentTarget);
            this._onToggleBox(box);
        },

        onToggleWho: function(e){
            console.log("Toggle Who?");
            e.stopPropagation();

            var box = $(e.currentTarget);
            this._onToggleBox(box);
            //box.toggleClass('collapsed');
        },

        _onToggleBox: function(box){

            if(box.hasClass('collapsed')){
                BetterTeamApp.trigger("BetterTeamSound", "click");
            }

            setTimeout(function(){
                box.toggleClass('collapsed');      
            },0);
            /*
            if(!box.hasClass('collapsed')){
                TweenLite.to(box.find('.hideable'), 0.1,{
                    height: 0, 
                    onComplete: function(){
                        console.log("on Complete");
                        box.addClass('collapsed');
                    }
                });
            }else{
                BetterTeamApp.trigger("BetterTeamSound", "click");

                box.find('.hideable').css({height: "auto"});
                box.removeClass('collapsed');
                TweenLite.from(box.find('.hideable'), 0.1,{
                    height: 0
                });
            }
            */
        },

        onEditWhat: function(e){
            console.log("onEditEvent");

            //this.$el.find('.selected-value').text(Math.random()+''+window.mobilecheck());

            this.$el.find('#r-top .selected-value').text("");
            this.$el.find('#r-top .register-label').show();
            $(e.currentTarget).removeClass('collapsed');

            if(this.registerWhatTween){
                //this.registerWhatTween.reverse();
            }
        },

        onEditWho: function(e){
            //this.$el.find('.selected-value').text(Math.random()+''+window.mobilecheck());

            this.$el.find('#r-who .selected-value').text("");
            this.$el.find('#r-who .register-label').show();
            $(e.currentTarget).removeClass('collapsed');

            if(this.registerWhoTween){
                //this.registerWhoTween.reverse();
            }
        },

        onRender: function(){

            // this.score.show(new MatchScore({
            //     model: this.model
            // }));

            // this.who.show(new OptionChooser({
            //     valueType: 'who',
            //     title: "Registrer Hvem",
            //     options: [
            //         {id: 'troelsjohnsen', name: 'Troels Johnsen'},
            //         {id: 'larspedersen', name: 'Lars Pedersen'},
            //         {id: 'michaellaudrup', name: 'Michael Laudrup'},
            //         {id: 'brianlaudrup', name: 'Brian Laudrup'},
            //     ]
            // }));

            // this.what.show(new OptionChooser({
            //     valueType: 'what',
            //     title: "Registrer Hvad",
            //     options: [
            //         {id: 'shot', name: 'Skud'},
            //         {id: 'pass', name: 'Aflevering'},
            //         {id: 'yellowcard', name: 'Gult Kort'},
            //         {id: 'redcard', name: 'Rødt Kort'},
            //     ]
            // }));            

            this.when.show(new TimeSlider());
            this.where.show(new PositionChooser({
                valueType: 'where'
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