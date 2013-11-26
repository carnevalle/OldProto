define(['handlebars'], function(Handlebars) {

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"animation\" data-animation-step=\"1\">\n	<div class=\"device\">\n		<div class=\"phone-home-button\"></div>\n		<div class=\"tablet-home-button\"></div>\n		<div class=\"screen-stand\"><div class=\"leg\"></div><div class=\"foot\"></div></div>\n		<div class=\"display\">\n			<div class=\"slide1\"><div>Works on <em>desktops</em></div></div>\n			<div class=\"slide2\"><div>Works on <em>tablets</em></div></div>\n			<div class=\"slide3\"><div>Works on <em>phones</em></div></div>\n		</div>\n	</div>\n</div>";
  })

});