/*global define */
define([
    'marionette',
    'modules/matchreport/MatchReportLayout.hbs'
    ], function (Marionette, templateLayout) {

    'use strict';

    return Marionette.Layout.extend({
        template: templateLayout,

        regions: {
            top: "#matchreport-top",
            left: "#matchreport-left",
            right: "#matchreport-right"
        }
    })
});
