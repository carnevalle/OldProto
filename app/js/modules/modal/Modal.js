/*global define */
define([
    'marionette',
    'app',
    'modules/modal/Modal.hbs'
    ], function (Marionette, App, template) {

    'use strict';

    return Marionette.ItemView.extend({
		template: template,
		className: 'test',

		initialize: function(){
            console.log("INIT!");
		},

        onRender: function(){
            // this thing is js driven on slid.es so I didn't bother switching out for css animations
            var duration = 7000, steps = 3, step = 1;
            var _this = this;

            setInterval( function() {
                document.querySelector( '.animation' ).setAttribute( 'data-animation-step', step = ++step > steps ? 1 : step );
                //_this.$el.append("interval");
            }, duration / steps );
        }
    })
});
