define(['handlebars'], function(Handlebars) {

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "";
  buffer += "\n		<li>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</li>\n	";
  return buffer;
  }

  buffer += "<a href=\"#/players/\" class=\"btn btn-default\">\n	<span class=\"glyphicon glyphicon-circle-arrow-left\"></span> Back\n</a>\n\n<h1> ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " </h1>\n\n<div>Født: ";
  if (stack1 = helpers.birthdate) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.birthdate; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n\nPositioner\n<ul>\n	";
  stack1 = helpers.each.call(depth0, depth0.positions, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n\nHer kommer info om spilleren";
  return buffer;
  })

});