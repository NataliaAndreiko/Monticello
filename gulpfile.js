const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function scss() {
    return gulp.src('styles/scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('styles/css'));
}

function watch() {
    gulp.watch('styles/scss/*.scss', scss);
}


exports.scss = scss;
exports.watch = watch;