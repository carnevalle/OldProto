var fs = require('fs');
var onlyScripts = require('./util/scriptFilter');
var tasks = fs.readdirSync('./gulp/tasks/').filter(onlyScripts);

var gulp = require('gulp');
var open = require("gulp-open");

tasks.forEach(function(task) {
	require('./tasks/' + task);
});

gulp.task('build', ['libs', 'browserify', 'images', 'less', 'copy']);
gulp.task('deploy', ['build','dropbox'], function(){

    var options = {
        url: "https://dl.dropboxusercontent.com/u/2801215/betterteam/index.html",
        app: "google chrome"
    };

    gulp.src("./index.html")
    .pipe(open("", options));
});
gulp.task('default', ['build', 'watch', 'serve', 'open']);
