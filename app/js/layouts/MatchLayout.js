/*global define */
define([
    'marionette',
    'jquery',
    'layouts/MatchLayout.hbs',
    'gsap'
    ], function (Marionette, $, template) {

    'use strict';

    return Marionette.Layout.extend({
		template: template,
		className: '',

		initialize: function(){
            $(document).bind('touchmove', false);
		},

        regions: {
            top: "#r-top",
            bottom: "#r-bottom",
        },

        onRender: function(){
            TweenLite.from(this.$el.find("#r-top"), 0.3, {top:'+=10px', opacity: 0, delay: 0.5});
            TweenLite.from(this.$el.find("#r-bottom"), 0.3, {top:'+=10px', opacity: 0, delay: 0.6});
        },

        onDomRefresh: function(){
            
            //this.bottom.getEl().slideDown("slow");            
        },

        onClose: function(){
            $(document).unbind('touchmove');
        }
    })
});