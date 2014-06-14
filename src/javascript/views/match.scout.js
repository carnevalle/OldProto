var Backbone = require('backbone.marionette');

var MatchScoutInputOptionsView = require('../views/match.scout.input.options');
var MatchScoutInputTypesView = require('../views/match.scout.input.types');

//var PlayersCollection = require('../collections/Players');
//var MatchEventTypesCollection = require('../collections/MatchEventTypes');

var MatchEventsCollection = require('../collections/MatchEvents');
var MatchEventModel = require('../models/MatchEvent');

var MatchScoutTimeSliderView = require('../views/match.scout.timeslider');
var MatchScoutPitchZonesView = require('../views/match.scout.input.pitch.zones');
var MatchScoutPitchView = require('../views/match.scout.input.pitch');

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

        this.values = {};

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
        this.currentIndex = 0;

        this.matcheventtype = undefined;

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
            this.showOption();
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

        this.$el.find("#input-title").text('Hvilken event vil du registrere?');
    },

    onEventTypeSelect: function(id, name){

        this.matcheventtype = this.matchEventTypes.get(id);
        this.inputTypes = this.matcheventtype.get('input');

        var view = new MatchScoutInputTypesView({
            collection: new Backbone.Collection(this.inputTypes)
        })

        view.on('inputtype:navigate', _.bind(function(index){
            console.log("Navigate To: ",index);
            this.showOption(index);
        },this))

        this.inputnavigation.show(view);

        this.reset();
        this.showOption();

        this.$el.find('.fnSelectEventType').removeClass('current');
        this.$el.find('.eventtype .name').text(name);

    },

    onValueSelect: function(value){

        console.log("VALUE: ", value);

        if(value.type === "matcheventtype"){
            this.onEventTypeSelect(value.value, value.name);
        }else{

            this.inputnavigation.currentView.setValue(value.type, value.name);
            this.values[value.type] = value.value;

            this.showOption();
        }
    },

    reset: function(){

        this.values = {};

        this.inputIndex = 0;
        this.inputnavigation.currentView.reset();
        //this.showOption();

    },

    showOption: function(index){

        if(typeof index === 'undefined'){
            this.currentIndex = this.inputIndex;
        }else{
            this.currentIndex = index;
        }

        var inputType = this.inputTypes[this.currentIndex];

        if(this.inputTypes.length === 0){
            console.error("Match Event Type has no input types");
            return;
        }

        if(this.currentIndex == this.inputTypes.length){
            this.doSaveMatchEvent();
            return;
        }

        this.inputnavigation.currentView.setCurrent(inputType.slug);

        if(inputType.type == 'players'){

            this.showInputView(new MatchScoutInputOptionsView({
                collection: this.players,
                inputType: inputType.slug,
                title: inputType.title,
                selectedValue: this.values.player_id
            }));

        }else if(inputType.type == 'pitch_position'){
            this.showInputView(new MatchScoutPitchZonesView({
                inputType: inputType.slug,
                title: inputType.title
            }));
        }else if(inputType.type == 'pitch_line'){

            this.showInputView(new MatchScoutPitchView({
                inputType: inputType.slug,
                title: inputType.title,
                selectedValue: this.values[inputType.slug]
            }));

        }else if(inputType.type == 'options'){
            this.showInputView(new MatchScoutInputOptionsView({
                collection: new Backbone.Collection(inputType.options),
                title: inputType.title,
                inputType: inputType.slug
            }));
        }else if(inputType.type == 'boolean'){
            this.showInputView(new MatchScoutInputOptionsView({
                inputType: inputType.slug,
                title: inputType.title,
                template: require('../templates/match.scout.input.boolean')
            }));
        }

        this.$el.find("#input-title").text(inputType.title);

        this.inputIndex = this.currentIndex + 1;
    },

    showInputView: function(view){
        if(this.selector.currentView){
            this.selector.currentView.off("value:selected");
        }

        this.selector.show(view);

        this.selector.currentView.on("value:selected", _.bind(this.onValueSelect,this));
    },

    saveMatchEvent: function(){

        console.log("SAVE MATCH EVENT!");
        console.log(this.values);

        var matchevent = new MatchEventModel({match_id: this.model.get("id")});
        matchevent.set("match_event_type_id", this.matcheventtype.id);

        _(this.values).each(function(value, key){
            if(typeof value === 'object'){
                matchevent.set(value);
            }else{
                matchevent.set(key, value);
            }
        });

        console.log(matchevent.toJSON());

        this.$el.find("#btn-save").addClass('state-success');

        setTimeout( _.bind(function() {
            this.$el.find("#btn-save").removeClass('state-success');
        },this), 500 );

        App.trigger('save:matchevent', 'test');

        this.doSelectEventType();

        this.matchevents.create(matchevent,{
            wait: true,
            success: function(event){
                console.log("EVENT IS SAVED! ", event);
                //event.trigger("change");
            }
        });

        /*
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
        //this.showOption();

        this.inputnavigation.show(new MatchScoutInputTypesView({
            collection: new Backbone.Collection()
        }));


        this.doSelectEventType();
    }
});
