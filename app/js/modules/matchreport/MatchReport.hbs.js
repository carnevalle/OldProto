define(['handlebars'], function(Handlebars) {

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "\n<div class=\"matchreport type1\">\n\n    <div class=\"top\">\n        <div class=\"row\">\n            <div class=\"col-sm-12 time-container\">\n\n                <div id=\"time-display\" class=\"time-display\"><span></span>&prime;</div>\n\n                <div class=\"time-left-wrapper\">\n                    <div class=\"time-controls-wrapper\">\n                        <button id=\"btn-play\"type=\"button\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-play\"></span></button>\n                        <button id=\"btn-pause\"type=\"button\" class=\"btn btn-default hidden\"><span class=\"glyphicon glyphicon-pause\"></span></button>\n                    </div>\n                    <div class=\"time-bar-wrapper\">\n                        <div class=\"noUiSlider\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"middle\">\n\n        <div id='slider' class='swipe'>\n          <div class='swipe-wrap'>\n            <div><img src=\"http://lorempixel.com/400/400/sports/1/\" style=\"width: 100%\"/></div>\n            <div><img src=\"http://lorempixel.com/400/400/sports/2/\" style=\"width: 100%\"/></div>\n            <div><img src=\"http://lorempixel.com/400/400/sports/3/\" style=\"width: 100%\"/></div>\n          </div>\n        </div>\n\n    </div>\n    <div class=\"bottom\">\n\n    </div>\n</div>\n\n"
    + "\n";
  return buffer;
  })

});