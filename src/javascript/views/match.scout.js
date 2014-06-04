var Backbone = require('backbone.marionette');

var MatchScoutInputOptionsView = require('../views/match.scout.input.options');
var MatchScoutInputTypesView = require('../views/match.scout.input.types');

//var PlayersCollection = require('../collections/Players');
//var MatchEventTypesCollection = require('../collections/MatchEventTypes');

var MatchEventsCollection = require('../collections/MatchEvents');
var MatchEventModel = require('../models/MatchEvent');

var MatchScoutTimeSliderView = require('../views/match.scout.timeslider');
var MatchScoutPitchZonesView = require('../views/match.scout.pitch.zones');

var ProgressButton = require('../components/progressButton.js');
//var WallopSlider = require('wallop.slider');

module.exports = Backbone.Marionette.Layout.extend({
    template: require('../templates/match.scout'),
    className: "match scout",

    regions: {
        time: "#match-time",
        selector: "#match-selector",
        inputnavigation: "#match-inputtypes"
    },

    hammerEvents: {
        'tap .fnSelectEventType' : 'doSelectEventType',
        'tap #btn-save' : 'doSaveMatchEvent',
        'tap #btn-skip' : 'doSkipInputType',
        'tap #btn-reset' : 'doReset'
    },

    initialize: function(options){

        this.model = options.model;

        this.players = options.players;
        this.matchEventTypes = options.matchEventTypes;

        this.values = {
            player_id: undefined,
            match_event_type_id: undefined
        }

        this.inputTypes = [
        {
            id: 'pitch_position',
            name: 'Position'
        },
        {
            id: 'player_owner',
            name: 'Spiller Afsender'
        },
        {
            id: 'player_target',
            name: 'Spiller Modtager'
        }
        ];
        this.inputIndex = 0;

        this.matcheventtype = undefined;

        this.matchevent = new MatchEventModel({match_id: this.model.get("id")});
        this.matchevents = new MatchEventsCollection({}, {match_id: this.model.get("id")});
        this.matchevents.fetch();
        this.matchevents.on("add", function(matchevent) {
            //console.log("Adding Event: ", matchevent);
        });
    },

    doSaveMatchEvent: function(){
        this.saveMatchEvent();
        this.reset();
    },

    doSkipInputType: function(){
        if(this.inputIndex == this.inputTypes.length){
            this.doSaveMatchEvent();
        }else{
            this.showNextOption();
        }
    },

    doReset: function(){
        this.reset();
    },

    doSelectEventType: function(e){

        this.$el.find('.fnSelectEventType').addClass('current');
        this.inputnavigation.currentView.clearCurrent();

        this.showInputView(new MatchScoutInputOptionsView({
            collection: this.matchEventTypes,
            inputType: 'matcheventtype',
            selectedValue: this.values.match_event_type_id
        }));
    },

    onEventTypeSelect: function(id, name){


        this.matcheventtype = this.matchEventTypes.get(id);
        this.inputTypes = this.matcheventtype.get('input');

        this.inputnavigation.show(new MatchScoutInputTypesView({
            collection: new Backbone.Collection(this.inputTypes)
        }));

        this.reset();

        this.$el.find('.fnSelectEventType').removeClass('current');
        this.$el.find('.eventtype .name').text(name);

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

        if(value.type === "matcheventtype"){
            this.onEventTypeSelect(value.id, value.name);
        }else{

            this.inputnavigation.currentView.setValue(value.type, value.name);

            this.values[value.type] = value.id;

            if(value.type === "player_owner"){
                this.values.player_id = value.id;
            }

            this.showNextOption();
        }
    },

    reset: function(){

        this.values = {
            player_id: undefined
        }

        this.inputIndex = 0;
        this.inputnavigation.currentView.reset();
        this.showNextOption();
    },

    showNextOption: function(){

        var inputType = this.inputTypes[this.inputIndex];

        if(this.inputTypes.length === 0){
            console.error("Match Event Type has no input types");
            return;
        }

        if(this.inputIndex == this.inputTypes.length){
            this.doSaveMatchEvent();
            return;
        }

        this.inputnavigation.currentView.setCurrent(inputType.slug);


        if(inputType.type == 'players'){

            this.showInputView(new MatchScoutInputOptionsView({
                collection: this.players,
                inputType: inputType.slug,
                selectedValue: this.values.player_id
            }));

        }else if(inputType.type == 'pitch_position' || inputType.type == 'pitch_line'){
            this.showInputView(new MatchScoutPitchZonesView({
                inputType: inputType.slug
            }));
        }else if(inputType.type == 'options'){
            this.showInputView(new MatchScoutInputOptionsView({
                collection: new Backbone.Collection(inputType.options),
                inputType: inputType.slug
            }));
        }
        /*
        if(inputType.slug == 'player_owner'){

            this.showInputView(new MatchScoutInputOptionsView({
                collection: players,
                inputType: inputType.slug,
                selectedValue: this.values.player_id
            }));

        }else if(inputType.slug == 'player_target'){
            this.showInputView(new MatchScoutInputOptionsView({
                collection: players,
                inputType: inputType.slug,
                deactivateValue: this.values.player_id
            }));
        }else if(inputType.slug == 'position'){
            this.showInputView(new MatchScoutPitchZonesView({
                inputType: inputType.slug
            }));
        }
        */

        this.inputIndex++;
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

        console.log("SAVE MATCH EVENT!");

        this.matchevent.set("player_id", this.values.player_id);
        this.matchevent.set("match_event_type_id", this.values.match_event_type_id);
        this.matchevent.set("time", 30);

        console.log(this.values);

        this.$el.find("#btn-save").addClass('state-success');

        setTimeout( _.bind(function() {
            this.$el.find("#btn-save").removeClass('state-success');
        },this), 500 );

        App.trigger('save:matchevent', 'test');

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

    onRender: function(){

            new ProgressButton( this.$el.find("#btn-save")[0], {
                statusTime: 500,
                callback : function( instance ) {
                    instance._stop(1);
                    /*
                    var progress = 0,
                        interval = setInterval( function() {
                            progress = Math.min( progress + Math.random() * 0.1, 1 );
                            instance._setProgress( progress );

                            if( progress === 1 ) {
                                instance._stop(1);
                                clearInterval( interval );
                            }
                        }, 30 );

                    */
                }
            } );


        //this.time.show(new MatchScoutTimeSliderView());

        //this.selector.show(new MatchScoutPitchZonesView());
        //this.showNextOption();

        this.inputnavigation.show(new MatchScoutInputTypesView({
            collection: new Backbone.Collection()
        }));


        this.doSelectEventType();
    }
});
