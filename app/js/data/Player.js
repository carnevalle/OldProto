define(['backbone'], function (Backbone) {
    
    'use strict';

    return Backbone.Model.extend({
    	defaults: {
    		name: "Michael Laudrup",
    		birthdate: "",
    		positions: []
    	}
    });

});