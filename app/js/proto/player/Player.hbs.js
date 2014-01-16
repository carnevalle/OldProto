define(['handlebars'], function(Handlebars) {

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"row\">\n	<div class=\"col-md-6\">\n		<div id=\"r-players\" class=\"box fnIntroTransition\">\n			<h1>";
  if (stack1 = helpers.firstname) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.firstname; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " <strong>";
  if (stack1 = helpers.lastname) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lastname; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</strong></h1>\n\n			<table class=\"table\">\n				<tr>\n					<th>Navn: </th>\n					<td>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n				</tr>\n\n			</table>\n		</div>\n	</div>\n\n	<div class=\"col-md-6\">\n		<div id=\"r-matches\" class=\"box fnIntroTransition\">\n			<h1>BetterTeam <strong>Kampe</strong></h1>\n\n		</div>\n	</div>\n\n</div>";
  return buffer;
  })

});