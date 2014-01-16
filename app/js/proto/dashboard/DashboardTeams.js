define([
    'marionette',
    'proto/dashboard/DashboardTeams.hbs',
    'proto/dashboard/DashboardTeamsItem.hbs'
    ], function (Marionette, templateWrapper, templateItem) {

    'use strict';

    var TeamItemView = Marionette.ItemView.extend({
        template: templateItem,
    })


    return Marionette.CompositeView.extend({
        template: templateWrapper,
    	itemView: TeamItemView,
        itemViewContainer: "#teamItems"
    })
});