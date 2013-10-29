define(['handlebars'], function(Handlebars) {

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"row\">\n    <div class=\"col-sm-12\"><h1>";
  if (stack1 = helpers.hometeam) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hometeam; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "-";
  if (stack1 = helpers.awayteam) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.awayteam; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1></div>\n    <div class=\"col-sm-6\"><h1></h1></div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-4\">\n        <h1>Rapporter <button id=\"create-matchreport\" class=\"btn btn-primary\">Opret rapport</button></h1>\n\n        <table id=\"reportlist\" class=\"table\">\n            <tbody></tbody>\n        </table>\n    </div>\n</div>\n\n"
    + "\n";
  return buffer;
  })

});