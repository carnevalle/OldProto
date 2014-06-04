var gulp       = require('gulp');

var filesToMove = [
    'index.html',
    'build/**/*.*'
];

gulp.task('dropbox', function(){
  // the base option sets the relative root for the set of files,
  // preserving the folder structure
  gulp.src(filesToMove)
  .pipe(gulp.dest('/Users/troels.johnsen/Dropbox/Public/betterteam'));
});
