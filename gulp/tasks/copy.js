var gulp       = require('gulp');

var filesToMove = [
    'src/fonts/**/*.*'
];

gulp.task('copy', function(){
  // the base option sets the relative root for the set of files,
  // preserving the folder structure
  gulp.src(filesToMove, { base: 'src/' })
  .pipe(gulp.dest('build'));
});