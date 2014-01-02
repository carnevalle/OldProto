/*global define */
define([
    'marionette',
    'jquery',
    'layouts/FullPageLayout.hbs',
    'gsap'
    ], function (Marionette, $, template) {

    'use strict';

    return Marionette.Layout.extend({
		template: template,
		className: 'fp splashscreen',

		initialize: function(){
            this.disableFade = true;
            $(document).bind('touchmove', false);
		},

        regions: {
            main: "#fp-main"
        },

        onRender: function(){
            var logo = this.$el.find('img');
            TweenLite.from(logo, 3, {top:'+=30px', opacity: 0});
        },

        onDomRefresh: function(){
        },

        onClose: function(){
            $(document).unbind('touchmove');
        }
    })
});