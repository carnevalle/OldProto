define(['handlebars'], function(Handlebars) {

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"scoreboard\">\n	<div class=\"team team-home\">\n		<div class=\"filler filler-left\"></div>\n		<div class=\"score\">\n			<table>\n				<tr>\n					<td>";
  if (stack1 = helpers.hometeam) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hometeam; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n					<td>";
  if (stack1 = helpers.homescore) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.homescore; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n				</tr>\n			</table>\n		</div>\n		<div class=\"filler filler-right\"></div>\n	</div>\n\n	<div class=\"team team-away\">\n		<div class=\"filler filler-left\"></div>\n		<div class=\"score\">\n			<table>\n				<tr>\n					<td>";
  if (stack1 = helpers.awayteam) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.awayteam; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n					<td>";
  if (stack1 = helpers.awayscore) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.awayscore; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n				</tr>\n			</table>\n		</div>\n		<div class=\"filler filler-right\"></div>\n	</div>\n</div>";
  return buffer;
  })

});