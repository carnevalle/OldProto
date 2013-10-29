define(['handlebars'], function(Handlebars) {

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<td class=\"text-center\">\n    <button type=\"button\" class=\"btn btn-danger btn-sm btn-delete\" data-reportid=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        <span class=\"glyphicon glyphicon-trash\"></span>\n    </button>\n</td>\n<td class=\"playername\" style=\"vertical-align: middle\">\n    <a href=\"#/matches/";
  if (stack1 = helpers.matchid) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.matchid; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/report/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">matchreport</a>\n</td>\n";
  return buffer;
  })

});