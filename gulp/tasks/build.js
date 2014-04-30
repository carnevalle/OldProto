var gulp = require('gulp');

gulp.task('build', ['libs', 'browserify', 'images', 'less']);
