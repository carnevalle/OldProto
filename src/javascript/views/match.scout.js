var Backbone = require('backbone.marionette');

var MatchScoutInputOptionsView = require('../views/match.scout.input.options');

var MatchScoutInputTypesView = require('../views/match.scout.input.types');

var MatchScoutPlayersView = require('../views/match.scout.players');
var PlayersCollection = require('../collections/Players');
var MatchEventsCollection = require('../collections/MatchEvents');
var MatchEventModel = require('../models/MatchEvent');
var MatchScoutEventsView = require('../views/match.scout.events');
var MatchEventTypesCollection = require('../collections/MatchEventTypes');
var MatchScoutTimeSliderView = require('../views/match.scout.timeslider');
var MatchScoutPitchZonesView = require('../views/match.scout.pitch.zones');

var ProgressButton = require('../components/progressButton.js');

console.log(ProgressButton);

var players = new PlayersCollection();
var matchEventTypes = new MatchEventTypesCollection();

players.fetch();
matchEventTypes.fetch();

module.exports = Backbone.Marionette.Layout.extend({
    template: require('../templates/match.scout'),
    className: "match scout",

    regions: {
        time: "#match-time",
        selector: "#match-selector",
        inputtypes: "#match-inputtypes"
    },

    hammerEvents: {
        'tap .fnSelectEventType' : 'doSelectEventType',
        'tap #btn-save' : 'doSaveMatchEvent',
        'tap #btn-skip' : 'doSkipInputType',
        'tap #btn-reset' : 'doReset'
    },

    initialize: function(options){

        this.model = options.model;

        this.values = {
            player_id: undefined,
            match_event_type_id: undefined
        }

        this.inputTypes = [{
            id: 'player_owner',
            name: 'Spiller Afsender'
        },
        {
            id: 'pitch_position',
            name: 'Position'
        },{
            id: 'player_target',
            name: 'Spiller Modtager'
        }];
        this.inputIndex = 0;

        this.matchevent = new MatchEventModel({match_id: this.model.get("id")});
        this.matchevents = new MatchEventsCollection({}, {match_id: this.model.get("id")});
        this.matchevents.fetch();
        this.matchevents.on("add", function(matchevent) {
            //console.log("Adding Event: ", matchevent);
        });
    },

    doSaveMatchEvent: function(){
        console.log("doSaveMatchEvent");
        this.saveMatchEvent();
        this.reset();
    },

    doSkipInputType: function(){
        console.log("doSkipInputType");

        if(this.inputIndex == this.inputTypes.length){
            this.doSaveMatchEvent();
        }else{
            this.showNextOption();
        }
    },

    doReset: function(){
        console.log("doReset");
        this.reset();
    },

    doSelectEventType: function(e){
        console.log("doSelectEventType");
        this.showInputView(new MatchScoutInputOptionsView({
            collection: matchEventTypes,
            inputType: 'matcheventtype',
            selectedValue: this.values.match_event_type_id
        }));
    },

    onEventTypeSelect: function(id, name){
        this.values.match_event_type_id = id;

        this.$el.find('.eventtype .name').text(name);

        this.reset();
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

    onValueSelect: function(value){
        console.log("Value: ", value);

        if(value.type === "matcheventtype"){
            this.onEventTypeSelect(value.id, value.name);
        }else{

            this.inputtypes.currentView.setValue(value.type, value.name);

            this.showNextOption();
        }
    },

    reset: function(){
        console.log("I want to reset");

        this.inputIndex = 0;
        this.inputtypes.currentView.reset();
        this.showNextOption();
    },

    showNextOption: function(){

        var inputType = this.inputTypes[this.inputIndex];

        console.log('showNextOption: ', inputType, this.inputIndex);
        console.log(this.inputIndex, this.inputTypes.length);

        if(this.inputIndex == this.inputTypes.length){
            console.log("I want to save Match Event");
            this.doSaveMatchEvent();
            return;
        }

        if(inputType.id == 'player_owner'){

            this.showInputView(new MatchScoutInputOptionsView({
                collection: players,
                inputType: inputType.id,
                selectedValue: this.values.player_id
            }));

        }else if(inputType.id == 'player_target'){
            this.showInputView(new MatchScoutInputOptionsView({
                collection: players,
                inputType: inputType.id,
                selectedValue: this.values.player_id
            }));
        }else if(inputType.id == 'pitch_position'){
            this.showInputView(new MatchScoutPitchZonesView({
                inputType: inputType.id
            }));
        }

        this.inputIndex++;

        /*
        var view = new MatchScoutInputOptionsView();

        view.on("value:selected", function(vars){
            console.log("VARS: ", vars);
        })
        */

        /*
        this.selector.show(new MatchScoutInputOptionsView({
            collection: players,
            inputType: 'player'
        }));
        */

        /*
        if(this.values.match_event_type_id === undefined){
            this.doSelectEvent();
        }else if(this.values.player_id === undefined){
            this.doSelectPlayer();
        }else{
            this.selector.show(new MatchScoutPitchZonesView());
        }
        */
    },

    showInputView: function(view){
        if(this.selector.currentView){
            this.selector.currentView.off("value:selected");
        }

        this.selector.show(view);

        this.selector.currentView.on("value:selected", _.bind(this.onValueSelect,this));
    },

    onSelectZone: function(e){
        e.preventDefault();
        e.gesture.preventDefault();

        this.$el.find(".fnSelectable").removeClass("active");
        $(e.currentTarget).addClass("active");

        var id = e.currentTarget.dataset.value;

        this.saveMatchEvent();

        this.$el.find("#fnWhere").text(e.currentTarget.dataset.name);
    },

    saveMatchEvent: function(){
        

        this.matchevent.set("player_id", this.values.player_id);
        this.matchevent.set("match_event_type_id", this.values.match_event_type_id);
        this.matchevent.set("time", 30);

        console.log(this.matchevent.toJSON());

        /*
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
        */

    },

    resetSelectedValues: function(){

    },

    onRender: function(){

        /*
        this.$el.find( ".progress-button" ).each(function() {
            console.log(this);
            new ProgressButton( this, {
                statusTime: 500,
                callback : function( instance ) {
                    var progress = 0,
                        interval = setInterval( function() {
                            progress = Math.min( progress + Math.random() * 0.1, 1 );
                            instance._setProgress( progress );

                            if( progress === 1 ) {
                                instance._stop(1);
                                clearInterval( interval );
                            }
                        }, 30 );
                }
            } );
        });
        */

        //this.time.show(new MatchScoutTimeSliderView());

        //this.selector.show(new MatchScoutPitchZonesView());
        //this.showNextOption();
        console.log("On Render!");


        this.inputtypes.show(new MatchScoutInputTypesView({
            collection: new Backbone.Collection(this.inputTypes)
        }));
        this.doSelectEventType();
    }
});
