var Handlebars = require("hbsfy/runtime");

Handlebars.registerHelper('where',function( collection, key, value, limit, options ){
    options = options || limit;
    if( typeof limit !== 'number' ) limit = Infinity;
    var matches = 0;
    var result = '';
    for( var i = 0; i < collection.length; i++ ){
        if( collection[i][key] === value ){
            result += options.fn( collection[i] );
            matches++;
            if( matches === limit ) return result;
        }
    }
    return result;
});

Handlebars.registerHelper('url', function(url) {
    url = "#"+url;
    return new Handlebars.SafeString(url);
});

Handlebars.registerHelper('times', function(n, block) {
    var accum = '';
    for(var i = 0; i < n; ++i)
        accum += block.fn(i);
    return accum;
});

Handlebars.registerHelper('for', function(from, to, incr, block) {
    var accum = '';
    for(var i = from; i < to; i += incr)
        accum += block.fn(i);
    return accum;
});
