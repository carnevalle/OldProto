var Backbone = require('backbone.marionette');

var MatchScoutPlayersView = require('../views/match.scout.players');
var PlayersCollection = require('../collections/Players');
var MatchEventsCollection = require('../collections/MatchEvents');
var MatchEventModel = require('../models/MatchEvent');
var MatchScoutEventsView = require('../views/match.scout.events');
var MatchEventTypesCollection = require('../collections/MatchEventTypes');
var MatchScoutTimeSliderView = require('../views/match.scout.timeslider');
var MatchScoutPitchZonesView = require('../views/match.scout.pitch.zones');

var players = new PlayersCollection();
var matchEventTypes = new MatchEventTypesCollection();

players.fetch();
matchEventTypes.fetch();

module.exports = Backbone.Marionette.Layout.extend({
    template: require('../templates/match.scout'),
    className: "match scout",

    regions: {
        time: "#match-time",
        selector: "#match-selector"
    },

    hammerEvents: {
        'tap #fnWhat':'doSelectEvent',
        'tap #fnWho':'doSelectPlayer',
        //'tap .fnEventType':'onSelectEvent',
        //'tap .fnPlayer':'onSelectPlayer',
        'tap .fnSelectValue':'onSelectValue',
        'tap .fnPitchZone':'onSelectZone'
    },

    initialize: function(options){

        this.model = options.model;

        this.values = {
            player_id: undefined,
            match_event_type_id: undefined
        }

        this.matchevent = new MatchEventModel({match_id: this.model.get("id")});
        this.matchevents = new MatchEventsCollection({}, {match_id: this.model.get("id")});

        this.matchevents.fetch();

        this.matchevents.on("add", function(matchevent) {
            //console.log("Adding Event: ", matchevent);
        });
    },

    doSelectPlayer: function(e){

        //this.$el.find(".fnSelectable").removeClass("active");
        $("#fnWho").addClass("active");

        this.selector.show(new MatchScoutPlayersView({
            collection: players,
            selectedValue: this.values.player_id
        }));
    },

    doSelectEvent: function(e){

        //this.$el.find(".fnSelectable").removeClass("active");
        $("#fnWhat").addClass("active");
        console.log("Do Selct Eevent");

        this.selector.show(new MatchScoutEventsView({
            collection: matchEventTypes,
            selectedValue: this.values.match_event_type_id
        }));
    },

    onSelectValue: function(e){
        e.preventDefault();
        e.gesture.preventDefault();

        var type = e.currentTarget.dataset.type;
        var id = e.currentTarget.dataset.value;
        var name = e.currentTarget.dataset.name;

        this.values[type] = id;

        this.$el.find(".fnSelectable").removeClass("active");
        $(e.currentTarget).addClass("active");

        if(type === "player_id"){
            this.$el.find("#fnWho").text(name);
        }else if(type === "match_event_type_id"){
            this.$el.find("#fnWhat").text(name);
        }

        this.showNextOption();
    },

    showNextOption: function(){
        if(this.values.match_event_type_id === undefined){
            this.doSelectEvent();
        }else if(this.values.player_id === undefined){
            this.doSelectPlayer();
        }else{
            this.selector.show(new MatchScoutPitchZonesView());
        }
    },

    onSelectEvent: function(e){
        e.preventDefault();
        e.gesture.preventDefault();

        this.$el.find(".fnSelectable").removeClass("active");

        var id = e.currentTarget.dataset.value;
        this.values.match_event_type_id = id;

        this.$el.find("#fnWhat").text(e.currentTarget.dataset.name);

        this.selector.show(new MatchScoutPitchZonesView());
    },

    onSelectPlayer: function(e){
        e.preventDefault();
        e.gesture.preventDefault();

        this.$el.find(".fnSelectable").removeClass("active");

        var id = e.currentTarget.dataset.value;
        this.values.player_id = id;

        /*
        this.matchevent.set("player_id", value.id);
        this.matchevent.set("match_event_type_id", value.id);
        this.matchevent.set("position_x", value.x);
        this.matchevent.set("position_y", value.y);
        */

        this.$el.find("#fnWho").text(e.currentTarget.dataset.name);

        this.selector.show(new MatchScoutPitchZonesView());
    },

    onSelectZone: function(e){
        e.preventDefault();
        e.gesture.preventDefault();

        this.$el.find(".fnSelectable").removeClass("active");
        $(e.currentTarget).addClass("active");

        var id = e.currentTarget.dataset.value;

        //this.saveMatchEvent();

        this.$el.find("#fnWhere").text(e.currentTarget.dataset.name);
    },

    saveMatchEvent: function(){


        console.log("SAVING EVENT");
        console.log(this.matchevent.toJSON());

        this.matchevent.set("player_id", this.values.player_id);
        this.matchevent.set("match_event_type_id", this.values.match_event_type_id);

        this.matchevent.set("time", 30);

        this.matchevents.create(this.matchevent,{
            wait: true,
            success: function(event){
                console.log("EVENT IS SAVED! ", event);
                //event.trigger("change");
            }
        });

        this.matchevent = new MatchEventModel({match_id: this.model.get("id")});
        this.$el.find(".fnSelectable").removeClass("active");
        console.log("matchevents: ", this.matchevents.toJSON());

    },

    resetSelectedValues: function(){

    },

    onRender: function(){


        //this.time.show(new MatchScoutTimeSliderView());

        //this.selector.show(new MatchScoutPitchZonesView());
        this.showNextOption();
    }
});
