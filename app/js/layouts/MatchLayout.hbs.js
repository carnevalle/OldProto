define(['handlebars'], function(Handlebars) {

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "<div id=\"r-score\" class=\"box box-white fnIntroTransition\"></div>\n<div id=\"r-time\" class=\"box fnIntroTransition\"></div>\n\n<div class=\"row fnIntroTransition\">\n    <div class=\"col-md-6\">\n		<div class=\"box clickable collapsed fnToggleWho\">\n			<h1><span class=\"register-label\" style=\"display: block; float: left; padding-right: 5px\">Registrer</span> <strong>hvem</strong>: <span class=\"selected-value\"></span></h1>\n\n			<div id=\"r-who\" class=\"hideable\">\n\n			</div>\n		</div>\n    </div>\n\n    <div class=\"col-md-6\">\n		<div class=\"box clickable collapsed fnToggleWhat\">\n			<h1><span class=\"register-label\" style=\"display: block; float: left; padding-right: 5px\">Registrer</span> <strong>hvad</strong>: <span class=\"selected-value\"></span></h1>\n\n			<div id=\"r-what\" class=\"hideable\">\n\n			</div>			\n		</div>\n    </div>\n</div>\n\n<div class=\"row fnIntroTransition\">\n	<div class=\"col-md-12\">\n		<div id=\"r-where\" class=\"box\">\n			<h1>Registrer <strong>hvor</strong>: </h1>\n\n			<div class=\"hideable\">\n				<img src=\"img/horizontal-pitch-narrow.svg\" style=\"width: 100%\"/>	\n			</div>\n		</div>\n	</div>\n</div>\n\n<div class=\"box clickable fnSaveEvent\">\n	<h1>Save <strong>event</strong></h1>\n</div>\n\n\n";
  return buffer;
  })

});