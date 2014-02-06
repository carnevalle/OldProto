define(['handlebars'], function(Handlebars) {

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"r-time\" class=\"fnIntroTransition\">\n	\n</div>\n\n<div class=\"row fnIntroTransition\">\n	<div class=\"col-sm-12\" id=\"r-events\">\n	</div>\n</div>\n\n<div class=\"row fnIntroTransition\">\n	<div class=\"col-sm-4 text-center\">\n		<div class=\"box touchable active fnTabSelector\" id=\"tab-what\" data-tab=\"what\">\n			<strong class=\"text-upper\">Hvad</strong>\n			<h2 id=\"value-what\">?</h2>\n		</div>\n	</div>\n	<div class=\"col-sm-4 text-center\">\n		<div class=\"box touchable inactive fnTabSelector\" id=\"tab-where\" data-tab=\"where\">\n			<strong class=\"text-upper\">Hvor</strong>\n			<h2 id=\"value-where\">?</h2>\n		</div>\n	</div>\n	<div class=\"col-sm-4 text-center\">\n		<div class=\"box touchable inactive fnTabSelector\" id=\"tab-who\" data-tab=\"who\">\n			<strong class=\"text-upper\">Hvem</strong>\n			<h2 id=\"value-who\">?</h2>\n		</div>\n	</div>	\n</div>\n\n<div class=\"row fnIntroTransition\">\n	<div class=\"col-sm-12\">\n		<div class=\"box fnValueSelector\" id=\"c-what\">\n			<h1>Registrer <strong>hvad</strong></h1>\n			<div id=\"r-what\"></div>\n		</div>\n		<div class=\"box fnValueSelector hidden\" id=\"c-where\">\n			<h1>Registrer <strong>hvor</strong></h1>\n			<div id=\"r-where\"></div>\n		</div>	\n		<div class=\"box fnValueSelector hidden\" id=\"c-who\">\n			<h1>Registrer <strong>hvem</strong></h1>\n			<div id=\"r-who\"></div>\n		</div>\n	</div>\n</div>";
  })

});