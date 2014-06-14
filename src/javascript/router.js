var Backbone = require('backbone.marionette');
AppController = require('./controller');

module.exports = new Backbone.Marionette.AppRouter({
    controller: new AppController(),
    appRoutes: {
        '': 'showIndex',
        't/:id(/)':'showTeam',
        'm/:id(/)':'showMatch',
        'create/match(/)':'createMatch',
        'create/player(/)':'createPlayer',
        'm/:id/scout(/)':'scoutMatch',
        'p/:id(/)':'showPlayer',
        '*notFound': 'notFound'
    }
});
