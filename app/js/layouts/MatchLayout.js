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

        },

        onDomRefresh: function(){
            TweenLite.from($("#r-top"), 0.3, {top:'+=10px', opacity: 0, delay: 0.5});
            TweenLite.from($("#r-bottom"), 0.3, {top:'+=10px', opacity: 0, delay: 0.6});
            //this.bottom.getEl().slideDown("slow");            
        },

        onClose: function(){
            $(document).unbind('touchmove');
        }
    })
});