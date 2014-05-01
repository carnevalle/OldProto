var less      = require('gulp-less');
var gulp         = require('gulp');
var livereload   = require('gulp-livereload');
var notify       = require('gulp-notify');
var handleErrors = require('../util/handleErrors');

gulp.task('less', function() {
    return gulp.src('./src/less/style.less')
        .pipe(less({ compress: true }))
        .on('error', handleErrors)
        .pipe(gulp.dest('./build/css'))
        .pipe(livereload());
});
