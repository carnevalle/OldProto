define(['handlebars'], function(Handlebars) {

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "<div class=\"navbar navbar-inverse\">\n        <div class=\"container\">\n            <div class=\"navbar-header\">\n                <button class=\"navbar-toggle\" data-target=\".navbar-collapse\"\n                data-toggle=\"collapse\" type=\"button\"><span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span> <span class=\n                \"icon-bar\"></span></button> <a class=\"navbar-brand\" href=\n                \"#\">BetterTeam</a>\n            </div>\n\n            <div class=\"navbar-collapse collapse\">\n                <ul class=\"nav navbar-nav\">\n                    <li>\n                        <a href=\"#/players/\">Players</a>\n                    </li>\n\n                    <li>\n                        <a href=\"#/matches/\">Matches</a>\n                    </li>\n\n                    <li class=\"visible-xs\">\n                        <a href=\"#login\">Login</a>\n                    </li>\n                </ul>\n\n                "
    + "\n            </div><!--/.navbar-collapse -->\n        </div>\n    </div>\n";
  return buffer;
  })

});