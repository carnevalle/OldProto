define(['handlebars'], function(Handlebars) {

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "\n<div class=\"row\">\n	<div class=\"col-md-4\">\n		<h1>Spillere</h1>\n\n		<table id=\"playerlist\" class=\"table\">\n			<tbody></tbody>\n		</table>\n	</div>\n	<div class=\"col-md-8\">\n		<h1>Opret spiller</h1>\n\n		<form id=\"create-player-form\" role=\"form\">\n		    <div class=\"form-group\">\n		        <label for=\"player-name\">Navn</label>\n		        <input class=\"form-control\" name=\"name\" id=\"player-name\" placeholder=\"Skriv navn\" type=\"text\">\n		    </div>\n\n		    <div class=\"form-group\">\n		        <label for=\"player-birthdate\">Fødselsdag</label>\n		        <input class=\"form-control\"  name=\"birthdate\" id=\"player-birthdate\" placeholder=\"yyyy-mm-dd\" type=\"date\">\n		    </div>\n\n			<div class=\"form-group\">\n				<label class=\"checkbox-inline\">\n					<input type=\"checkbox\" name=\"positions[]\" id=\"player-position1\" value=\"goalkeeper\"> Målmand\n				</label>\n				<label class=\"checkbox-inline\">\n					<input type=\"checkbox\" name=\"positions[]\" id=\"player-position2\" value=\"defence\"> Forsvar\n				</label>\n				<label class=\"checkbox-inline\">\n					<input type=\"checkbox\" name=\"positions[]\" id=\"player-position3\" value=\"midfield\"> Midtbane\n				</label>\n				<label class=\"checkbox-inline\">\n					<input type=\"checkbox\" name=\"positions[]\" id=\"player-position4\" value=\"attack\"> Angreb\n				</label>				\n			</div>\n\n			<button class=\"btn btn-default\" type=\"submit\">Submit</button>\n		</form>		\n\n		"
    + "\n	</div>\n</div>";
  return buffer;
  })

});