var changed    = require('gulp-changed');
var gulp       = require('gulp');
var imagemin   = require('gulp-imagemin');
var livereload = require('gulp-livereload');
var handleErrors = require('../util/handleErrors');

gulp.task('images', function() {
	var dest = './build/images';

	return gulp.src('./src/images/**')
		.pipe(changed(dest)) // Ignore unchanged files
        .on('error', handleErrors)
		.pipe(imagemin()) // Optimize
        .on('error', handleErrors)
		.pipe(gulp.dest(dest));
});
