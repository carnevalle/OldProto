define(['handlebars'], function(Handlebars) {

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n                    <button class=\"btn btn-scout ";
  if (stack1 = helpers.type) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.type; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-type=\""
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n                        <span class=\"count\">";
  if (stack2 = helpers.count) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.count; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span>\n                        <span class=\"text\">";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span>\n                    </button>\n                ";
  return buffer;
  }

  buffer += "<h1>Oprettet af "
    + escapeExpression(((stack1 = ((stack1 = depth0.created_by),stack1 == null || stack1 === false ? stack1 : stack1.username)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\n\n<div class=\"row\">\n    <div class=\"col-sm-6\">\n        <img class=\"fnPitch\" src=\"img/betterteam-pitch-vertical.svg\" style=\"width: 100%\"/>\n    </div>\n    <div class=\"col-sm-6\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                ";
  stack2 = helpers.each.call(depth0, depth0.observations, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            </div>\n        </div>\n    </div>\n</div>\n";
  return buffer;
  })

});