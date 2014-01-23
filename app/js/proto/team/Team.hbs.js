define(['handlebars'], function(Handlebars) {

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n				<li><a class=\"btn-event\" href=\"#/p/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><span>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></a></li>\n			";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n				<a class=\"btn-event\" href=\"#/m/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><span>";
  if (stack1 = helpers.hometeam) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hometeam; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "-";
  if (stack1 = helpers.awayteam) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.awayteam; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></a>\n			";
  return buffer;
  }

  buffer += "<div class=\"row\">\n	<div class=\"col-md-8\">\n		<div id=\"r-players\" class=\"box fnIntroTransition\">\n			<h1>BetterTeam <strong>Spillere</strong></h1>\n\n\n			<ul class=\"link-list\">\n			";
  stack1 = helpers.each.call(depth0, depth0.players, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			</ul>\n\n		</div>\n	</div>\n\n	<div class=\"col-md-4\">\n		<div id=\"r-matches\" class=\"box fnIntroTransition\">\n			<h1>BetterTeam <strong>Kampe</strong></h1>\n\n			";
  stack1 = helpers.each.call(depth0, depth0.matches, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n			<a class=\"btn-event btn-alt\" href=\"#\"><span>Opret Kamp</span></a>\n		</div>\n	</div>\n\n</div>";
  return buffer;
  })

});