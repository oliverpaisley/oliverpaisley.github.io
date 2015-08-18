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
    minifyHTML   = require('gulp-minify-html'),
    uncss        = require('gulp-uncss'),
    glob         = require('glob'),
    importCss    = require('gulp-import-css'),
    server       = lr();

gulp.task('jekyll', function() {
  return gulp.src('index.html', { read: false })
    .pipe(shell(['jekyll build --watch']
  ));
});

gulp.task('sass', ['jekyll'], function() {
  return gulp.src('sass/**/*.scss')
    .pipe(sass())
    .pipe(importCss())
    .pipe(autoprefixer( 'last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4' ))
    .pipe(uncss({
           html: glob.sync("_site/**/*.html"),
           ignore: ['label.active', '.dark-mode', 'span.tweet-time']
       }))
    .pipe(minifycss({keepBreaks:false}))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('_site/css'))
});

gulp.task('html', ['jekyll'], function() {
    return gulp.src('_site/**/*.html')
        .pipe(minifyHTML({
            quotes: true
        }))
        .pipe(gulp.dest('_site/'));
});

gulp.task('build',
          ['jekyll'],
          ['sass'],
          ['html']);

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
