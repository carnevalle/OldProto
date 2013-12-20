define(['handlebars'], function(Handlebars) {

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"time-container\">\n\n    <div id=\"time-display\" class=\"time-display\"><span></span>&prime;</div>\n\n    <div class=\"time-left-wrapper\">\n        <div class=\"time-controls-wrapper\">\n            <button id=\"btn-play\"type=\"button\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-play\"></span></button>\n            <button id=\"btn-pause\"type=\"button\" class=\"btn btn-default hidden\"><span class=\"glyphicon glyphicon-pause\"></span></button>\n        </div>\n        <div class=\"time-bar-wrapper\">\n            <div class=\"noUiSlider\"></div>\n        </div>\n    </div>\n</div>";
  })

});