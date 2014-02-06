define(['handlebars'], function(Handlebars) {

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"scoreboard text-center\">\n	";
  if (stack1 = helpers.hometeam) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hometeam; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " <strong>";
  if (stack1 = helpers.homescore) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.homescore; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "-";
  if (stack1 = helpers.awayscore) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.awayscore; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</strong> ";
  if (stack1 = helpers.awayteam) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.awayteam; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n</div>\n\n";
  return buffer;
  })

});