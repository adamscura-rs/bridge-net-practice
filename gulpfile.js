var gulp = require('gulp'),
  connect = require('gulp-connect');
 
gulp.task('connect', function() {
  connect.server({
    root: 'site',
    port: 8081,
    livereload: false,
  });
});
 
gulp.task('default', ['connect']);