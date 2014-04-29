var gulp   = require('gulp');
var concat = require('gulp-concat-sourcemap');

gulp.task('libs', function() {
   gulp.src([
   	"./bower_components/greensock/src/uncompressed/plugins/CSSPlugin.js", 
   	"./bower_components/greensock/src/uncompressed/easing/EasePack.js", 
   	"./bower_components/greensock/src/uncompressed/TweenLite.js", 
   	"./bower_components/threejs/build/three.js"
   	])
      .pipe(concat('libs.js'))
      .pipe(gulp.dest('./build/js/'));
});