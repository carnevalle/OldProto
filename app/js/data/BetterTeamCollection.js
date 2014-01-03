define([
    "backbone",
    "app"
    ], function(Backbone, App) {

    return Backbone.Collection.extend({
        fetch: function(options) {

            var _this = this;

            options.xhr = function() {
                var xhr = $.ajaxSettings.xhr();
                xhr.onprogress = function(e){
                    //console.log("progress: ", e);
                    _this.trigger('progress', _this, e);
                }
                return xhr;
            };

            this.trigger('fetch', this, options);
            return Backbone.Collection.prototype.fetch.call(this, options);
        }
    });
});