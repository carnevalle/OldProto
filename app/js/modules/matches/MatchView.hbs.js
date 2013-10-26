define(['handlebars'], function(Handlebars) {

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "<div class=\"row\">\n	<div class=\"col-xs-12\">\n		<table class=\"table\">\n			<thead>\n		        <tr>\n		            <th colspan=\"2\">Mål</th>\n		        </tr>\n			</thead>\n\n		    <tbody>\n		        <tr>\n		            <td style=\"width: 50%\"><button type=\"button\" class=\"btn btn-success btn-lg btn-block\">For</button></td>\n		            <td style=\"width: 50%\"><button type=\"button\" class=\"btn btn-danger btn-lg btn-block\">Imod</button></td>\n		        </tr>\n		    </tbody>\n		</table>\n	</div>\n</div>\n\n<hr/>\n\n<div class=\"row\">\n	<div class=\"col-xs-12 col-sm-6\">\n		<h2>Home</h2>\n\n			<table class=\"table\">\n				<thead>\n			        <tr>\n			            <th colspan=\"2\">Indlæg</th>\n			        </tr>\n				</thead>\n\n			    <tbody>\n			        <tr>\n			            <td style=\"width: 50%\"><button type=\"button\" class=\"btn btn-success btn-lg btn-block\">Venstre</button></td>\n			            <td style=\"width: 50%\"><button type=\"button\" class=\"btn btn-danger btn-lg btn-block\">Højre</button></td>\n			        </tr>\n			    </tbody>\n			</table>\n	</div>\n\n	<div class=\"col-xs-12 col-sm-6\">\n		<h2>Away</h2>\n\n	</div>	\n</div>\n\n";
  return buffer;
  })

});