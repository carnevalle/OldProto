define([
    'marionette',
    'jquery',
    'proto/matchevent/create/2/MatchEventCreate.hbs',
    'proto/match/matchscore/MatchScore',
    'proto/position-chooser/PositionChooser',
    'proto/option-chooser/OptionChooser',
    'proto/timeslider/TimeSlider',
    'matchevent.index',
    'matchevent',
    'matchevents',
    'gsap',
    'howler'
    ], function (Marionette, $, template, MatchScore, PositionChooser, OptionChooser, TimeSlider, MatchEventIndex, MatchEvent, MatchEvents) {

    'use strict';

    return Marionette.Layout.extend({
        template: template,
        className: '',

        initialize: function(options){

            this.model = options.model;

            var _this = this;

            this.views = {
                who: new OptionChooser({
                    valueType: 'who',
                    title: "Registrer Hvem",
                    options: this.options.who,
                    onValueSelect: function(value, type){
                        _this.onValueSelect(value, type);
                    }
                }),
                what: new OptionChooser({
                    valueType: 'what',
                    title: "Registrer Hvem",
                    options: this.options.what,
                    onValueSelect: function(value, type){
                        _this.onValueSelect(value, type);
                    }
                }),
                where: new PositionChooser({
                    valueType: 'where',
                    onValueSelect: function(value, type){
                        _this.onValueSelect(value, type);
                    }
                })
            }

            this.matchevent = new MatchEvent({match_id: this.model.get("id")});
            this.matchevents = new MatchEvents({}, {match_id: this.model.get("id")});
            this.matchevents.fetch();


            this.matchevents.on("add", function(matchevent) {
                console.log("Adding Event: ", matchevent);
            });
        },

        regions: {
            events : '#r-events',
            who : '#r-who',
            what : '#r-what',
            where : '#r-where'
        },

        hammerEvents: {
            'touch .fnTabSelector' : 'onTabClick'
        },

        onTabClick: function(e){
            this.showTab(e.currentTarget.dataset.tab);
        },

        showTab: function(id){

            this.$el.find('.fnValueSelector').addClass('hidden');

            if(id === "who"){
                this.$el.find('#c-who').removeClass('hidden');
                this.$el.find('#tab-who').removeClass('inactive').addClass('active');

                //TweenLite.from(this.$el.find('#c-who'), 0.5, {marginTop: 15, ease: "Power2.easeOut"});
            }else if(id === "what"){
                this.$el.find('#c-what').removeClass('hidden');
                this.$el.find('#tab-what').removeClass('inactive').addClass('active');
                //TweenLite.from(this.$el.find('#c-what'), 0.5, {marginTop: 15, ease: "Power2.easeOut"});
            }else if(id === "where"){
                this.$el.find('#c-where').removeClass('hidden');
                this.$el.find('#tab-where').removeClass('inactive').addClass('active');
                //TweenLite.from(this.$el.find('#c-where'), 0.5, {marginTop: 15, ease: "Power2.easeOut"});
            }

            this.$el.blur();
        },

        onValueSelect: function(value, type){
            console.log("VALUE SELECT!",value, type);

            var _this = this;
            //this.$el.find('.fnValueSelector').addClass('hidden');

            if(type === "who"){

                this.$el.find("#value-who").text(value.name);
                this.$el.find('#tab-who').removeClass('active inactive').addClass('selected');

                this.matchevent.set("player_id", value.id);

                this.saveEvent();

                this.showTab("what");

            }else if(type === "what"){
                this.$el.find("#value-what").text(value.name);

                this.$el.find('#tab-what').removeClass('active inactive').addClass('selected');

                this.showTab("where");

                this.matchevent.set("match_event_type_id", value.id);

            }else if(type === "where"){
                
                var zone = this.getZoneFromFieldPosition(value.x, value.y);

                this.$el.find("#value-where").text("Zone "+zone);
                this.$el.find('#tab-where').removeClass('active inactive').addClass('selected');

                this.matchevent.set("position_x", value.x);
                this.matchevent.set("position_y", value.y);

                this.showTab("who");
            }
        },

        saveEvent: function(){

            console.log("SAVING EVENT");
            console.log(this.matchevent.toJSON());

            this.matchevent.set("time", 30);

            this.matchevents.create(this.matchevent,{
                wait: true,
                success: function(event){
                    console.log("EVENT IS SAVED! ", event);
                    event.trigger("change");
                }
            });

            this.matchevent = new MatchEvent({match_id: this.model.get("id")});

            console.log("matchevents: ", this.matchevents.toJSON());

            this.resetValues();
        },

        resetValues: function(){
            this.$el.find("#value-who").text("?");
            this.views.who.reset();

            this.$el.find("#value-what").text("?");
            this.views.what.reset();

            this.$el.find("#value-where").text("?");
            this.views.where.reset();


        },

        getZoneFromFieldPosition: function(x, y){
            if(x < 33){
                if(y < 33){
                    return 1;
                }else if(y < 66){
                    return 2;
                }else{
                    return 3;
                }
            }else if(x < 66){
                if(y < 33){
                    return 4;
                }else if(y < 66){
                    return 5;
                }else{
                    return 6;
                }
            }else{
                if(y < 33){
                    return 7;
                }else if(y < 66){
                    return 8;
                }else{
                    return 9;
                }
            }

        },

        onRender: function(){

            this.who.show(this.views.who);
            this.what.show(this.views.what);
            this.where.show(this.views.where);

            this.events.show(new MatchEventIndex({
                collection: this.matchevents
            }));

        }
    })
});