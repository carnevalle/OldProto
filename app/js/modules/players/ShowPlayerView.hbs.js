define(['handlebars'], function(Handlebars) {

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

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
    + " </h1>\n\n<div>Hold: "
    + escapeExpression(((stack1 = ((stack1 = depth0.team),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n<div>Født: ";
  if (stack2 = helpers.birthdate) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.birthdate; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</div>\n\nPositioner\n<ul>\n	";
  stack2 = helpers.each.call(depth0, depth0.positions, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</ul>\n\nHer kommer info om spilleren\n";
  return buffer;
  })

});