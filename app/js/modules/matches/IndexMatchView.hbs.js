define(['handlebars'], function(Handlebars) {

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "\n<div class=\"row\">\n	<div class=\"col-md-4\">\n		<h1>Kampe</h1>\n\n		<table id=\"matchlist\" class=\"table\">\n			<tbody></tbody>\n		</table>\n	</div>\n	<div class=\"col-md-8\">\n		<h1>Opret kamp</h1>\n\n		<form id=\"create-match-form\" class=\"form-inline\" role=\"form\">\n		    <div class=\"form-group\">\n		        <label for=\"match-hometeam\">Hjemmehold</label>\n		        <input class=\"form-control\" name=\"hometeam\" id=\"match-hometeam\" placeholder=\"Skriv hjemmehold\" type=\"text\">\n		    </div>\n\n		    <div class=\"form-group\">\n		        <label for=\"match-awayteam\">Udehold</label>\n		        <input class=\"form-control\" name=\"awayteam\" id=\"match-awayteam\" placeholder=\"Skriv Udehold\" type=\"text\">\n		    </div>\n\n		    <br/>\n		    <br/>\n			<button class=\"btn btn-default\" type=\"submit\">Submit</button>\n		</form>		\n\n	</div>\n</div>";
  })

});