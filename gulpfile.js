// gulpfile.js
var gulp         = require('gulp'),
    express      = require('express'),
    gutil        = require('gulp-util'),
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss    = require('gulp-minify-css'),
    rename       = require('gulp-rename'),
    shell        = require('gulp-shell'),
    livereload   = require('gulp-livereload'),
    lr           = require('tiny-lr'),
    server       = lr();

gulp.task('sass', function() {
  return gulp.src('sass/style.scss')
    .pipe(sass())
    .pipe(autoprefixer( 'last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4' ))
    .pipe(minifycss())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('public/css'))
    .pipe(gulp.dest('_site/public/css'))
    .pipe(livereload(server));
});

gulp.task('build', ['sass'], shell.task([ 'jekyll serve' ]));

// Watch and rebuild on change
gulp.task('default', function() {
  var app = express();
  app.use(express.static(__dirname + '/_site', { "no-cache": true }));
  var appserver = app.listen(4000, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log(
        'Server listening on http://localhost:%s',
        appserver.address().port
     );
  });

  var port = 35729;
  server.listen(port, function(err) {
    if (err) {
      return console.log(err);
    }

    console.log('LiveReload listening on port %s', port);

    gulp.watch([
      '_sass/**/*.scss',
      '_includes/**/*.html',
      '_layouts/**/*.html',
      '_drafts/**/*',
      '_posts/*',
      'visuals/*'
    ], ['build']);

  });
});
