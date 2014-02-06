/*global define */
define([
    'marionette',
    'jquery',
    'underscore',
    'modules/matchreport/MatchReportLayout.hbs',
    'proto/timeslider/TimeSlider',
    'modules/pitch/PitchView'
    ], function (Marionette, $, _, template, TimeSlider, PitchView) {

    'use strict';

    return Marionette.Layout.extend({
		template: template,
		className: 'matchreport',

		initialize: function(){
            $(document).bind('touchmove', false);
		},

        regions: {
            top: "#matchreport-top",
            left: "#matchreport-left",
            middle: "#matchreport-middle",
            right: "#matchreport-right",
            bottom: "#matchreport-bottom",
        },

        onDomRefresh: function(){
          this.top.show(new TimeSlider());
          this.middle.show(new PitchView());
        },

        onClose: function(){
            $(document).unbind('touchmove');
        }
    })
});