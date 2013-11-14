define(['handlebars'], function(Handlebars) {

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "";
  buffer += "\n            <button class=\"btn\" data-type=\"button\">"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</button>\n        ";
  return buffer;
  }

  buffer += "<div class=\"row\">\n    <div class=\"col-sm-6\">\n        <img src=\"img/betterteam-pitch-vertical.svg\" style=\"width: 100%\"/>\n    </div>\n    <div class=\"col-sm-6\">\n        ";
  stack1 = helpers.each.call(depth0, depth0.buttons, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        "
    + "\n    </div>\n</div>\n";
  return buffer;
  })

});