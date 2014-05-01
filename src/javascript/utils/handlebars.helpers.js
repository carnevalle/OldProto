var Handlebars = require("hbsfy/runtime");

Handlebars.registerHelper('url', function(url) {
    url = "#"+url;
    return new Handlebars.SafeString(url);
});
