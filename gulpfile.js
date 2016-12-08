var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

//task para o Sass
gulp.task('sass', function () {
    return gulp.src('sass/**/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

//task para o watch
gulp.task('watch', function () {
    gulp.watch('sass/**/*.sass', ['sass']);
});

//task para o default
gulp.task('default', ['sass', 'watch']);