Backbone = require('backbone');
AppController = require('./controller');

module.exports = new Backbone.Marionette.AppRouter({
    controller: new AppController(),
    appRoutes: {
        '': 'showRoot',
        't/:id':'showTeam',
        'm/:id':'showMatch',
        'p/:id':'showPlayer',
        '*notFound': 'notFound'
    }
});
