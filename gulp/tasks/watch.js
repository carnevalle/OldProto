var gulp       = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('watch', function(){
    livereload.listen();
	gulp.watch('src/javascript/**', ['browserify']);
	gulp.watch('src/less/**', ['less']);
	gulp.watch('src/images/**', ['images']);
    gulp.watch('build/**').on('change', livereload.changed);
});
