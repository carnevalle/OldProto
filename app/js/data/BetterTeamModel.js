define([
    "backbone",
    "app"
    ], function(Backbone, App) {

    return Backbone.Model.extend({
        fetch: function(options) {

            var _this = this;

            options.xhr = function() {
                var xhr = $.ajaxSettings.xhr();
                xhr.onprogress = function(e){
                    _this.trigger('progress', _this, e);
                }
                return xhr;
            };

            this.trigger('fetch', this, options);
            return Backbone.Model.prototype.fetch.call(this, options);
        }
    });
});