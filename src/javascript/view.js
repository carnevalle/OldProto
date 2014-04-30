var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = require('jquery');
var plugin = require('plugin');
var Marionette = require('backbone.marionette');

console.log(Backbone, Marionette);

module.exports = Backbone.View.extend({
  template: require('./templates/template'),
  initialize: function() {
    var underscoreTest;
    underscoreTest = _.last([0, 1, 2, 'hi mom!']);
    return this.render();
  },
  render: function() {
    this.$el.html(this.template({
      title: 'Gulp All The Things!',
      description: 'Starter Gulp + Browserify project equipped to handle the following:',
      tools: ['Browserify-shim', 'Browserify', 'CoffeeScript', 'Compass', 'SASS', 'Handlebars', 'Image optimization', 'LiveReload', 'Non common-js jquery plugin', 'Npm backbone', 'Npm jquery', 'Underscore (included with Backbone)']
    }));
    return plugin();
  }
});
