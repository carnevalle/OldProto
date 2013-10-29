/*global define */
define(['marionette', 'modules/matches/ShowMatchView.hbs', 'modules/matches/ListMatchReportView.hbs'], function (Marionette, template, reportlistTemplate) {

    'use strict';

    var ListReportView = Marionette.ItemView.extend({
        template: reportlistTemplate,
        className: 'player',
        tagName: 'tr',

        events: {
            "click .btn-delete":"delete"
        },

        onRender: function(){
            this.$el.hide();
            this.$el.fadeIn("fast");
        },

        delete: function(){

            var _this = this;

            this.$el.fadeOut("fast");

            setTimeout(function(){
                // if(confirm("Report deleted. You want to undo?")){
                //     _this.$el.show();
                // }else{
                //     _this.model.destroy();
                // }
                _this.model.destroy();
            }, 300);
        }
    });

    return Marionette.CompositeView.extend({
		template: template,
		className: 'match',
        itemView: ListReportView,
        itemViewContainer: '#reportlist',

		initialize: function(){
            console.log(this.model.toJSON());
		},

		events: {
            'click #create-matchreport' : 'createMatchReport'
		},

        createMatchReport: function(e){
            console.log("CREATING MATCH REPORT!");

            this.collection.create({matchid: this.model.get("id")}, {wait: true});
        }
    })
});
