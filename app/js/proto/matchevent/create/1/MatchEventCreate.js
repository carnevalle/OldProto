/*global define */
define([
    'marionette',
    'jquery',
    'proto/matchevent/create/1/MatchEventCreate.hbs',
    'proto/match/matchscore/MatchScore',
    'proto/position-chooser/PositionChooser',
    'proto/option-chooser/OptionChooser',
    'proto/timeslider/TimeSlider',
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

            /*
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
            */
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

        onValueSelect: function(value, type){
            console.log("VALUE SELECT!",value, type);

            if(type === "where"){
                //this.where.currentView.toggle();

                var box = this.$el.find('.fnToggleWhere');
                box.find('.selected-value').text(value);

            }else if(type === "who"){

                var box = this.$el.find('.fnToggleWho');
                box.find('.selected-value').text(value.name);
                TweenLite.from(box.find('.selected-value'), 0.5, {marginLeft: 15, opacity: 0, ease: "Power2.easeOut"});
                box.find('.register-label').hide();

                //this.onToggleBox(box);

            }else if(type === "what"){

                var box = this.$el.find('.fnToggleWhat');
                box.find('.selected-value').text(value.name);
                TweenLite.from(box.find('.selected-value'), 0.5, {marginLeft: 15, opacity: 0, ease: "Power2.easeOut"});
                box.find('.register-label').hide();

                //this.onToggleBox(box);

            }
        },

        onSaveEvent: function(){
            BetterTeamApp.trigger("BetterTeamSound", "slide");
            this.where.currentView.reset()
        },   

        onToggleWhat: function(e){
            console.log("Toggle What?");
            e.stopPropagation();

            var box = $(e.currentTarget);
            this.onToggleBox(box);
        },

        onToggleWho: function(e){
            console.log("Toggle Who?");
            e.stopPropagation();

            var box = $(e.currentTarget);
            this.onToggleBox(box);
            //box.toggleClass('collapsed');
        },

        onToggleBox: function(box){

            if(box.hasClass('collapsed')){
                BetterTeamApp.trigger("BetterTeamSound", "click");
            }

            setTimeout(function(){
                box.toggleClass('collapsed');      
            },0);
        },

        onEditWhat: function(e){
            console.log("onEditEvent");

            //this.$el.find('.selected-value').text(Math.random()+''+window.mobilecheck());

            this.$el.find('#r-top .selected-value').text("");
            this.$el.find('#r-top .register-label').show();
            $(e.currentTarget).removeClass('collapsed');
        },

        onEditWho: function(e){
            //this.$el.find('.selected-value').text(Math.random()+''+window.mobilecheck());

            this.$el.find('#r-who .selected-value').text("");
            this.$el.find('#r-who .register-label').show();
            $(e.currentTarget).removeClass('collapsed');
        },

        onRender: function(){

            //this.when.show(new TimeSlider());
            var _this = this;

            this.who.show(new OptionChooser({
                valueType: 'who',
                title: "Registrer Hvem",
                options: this.options.who,
                onValueSelect: function(value, type){
                    _this.onValueSelect(value, type);
                }
            }));

            this.what.show(new OptionChooser({
                valueType: 'what',
                title: "Registrer Hvad",
                options: this.options.what,
                onValueSelect: function(value, type){
                    _this.onValueSelect(value, type);
                }
            }));            

            this.where.show(new PositionChooser({
                valueType: 'where',
                onValueSelect: function(value, type){
                    _this.onValueSelect(value, type);
                }
            }));
        },

        onDomRefresh: function(){
            
            //this.bottom.getEl().slideDown("slow");            
        },

        onClose: function(){
            //$(document).unbind('touchmove');
        }
    })
});