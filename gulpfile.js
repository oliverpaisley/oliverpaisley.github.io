var gulp         = require('gulp'),
    minifyHTML   = require('gulp-minify-html');




gulp.task('html', function() {
    return gulp.src('_site/index.html')
        .pipe(minifyHTML({
            quotes: true
        }))
        .pipe(gulp.dest('_site/test/'));
});
