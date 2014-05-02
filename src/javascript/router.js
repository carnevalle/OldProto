var Backbone = require('backbone.marionette');
AppController = require('./controller');

module.exports = new Backbone.Marionette.AppRouter({
    controller: new AppController(),
    appRoutes: {
        '': 'showRoot',
        't/:id':'showTeam',
        'm/:id':'showMatch',
        'm/:id/scout':'scoutMatch',
        'p/:id':'showPlayer',
        '*notFound': 'notFound'
    }
});
