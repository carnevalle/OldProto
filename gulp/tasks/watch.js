var gulp       = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('watch', function(){
    livereload.listen();
	gulp.watch('src/javascript/**', ['browserify']).on('change', livereload.changed);
	gulp.watch('src/less/**', ['less']).on('change', livereload.changed);
	gulp.watch('src/images/**', ['images']).on('change', livereload.changed);
	//livereload();
});
