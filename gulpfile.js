let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let rename = require('gulp-rename');
let sass = require('gulp-sass');
let watch = require('gulp-watch');
let gulpSequence = require('gulp-sequence')
let concat = require('gulp-concat');
let uglify = require('gulp-uglify');

gulp.task('sass', function () {
    var stream = gulp.src('./scss/styles.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css/'))
        .pipe(rename('styles.css'));
    return stream;
});

gulp.task('minify-css', () => {
   return gulp.src('css/styles.css')
 	.pipe(cleanCSS({compatibility: 'ie8'}))
 	.pipe(rename({suffix: '.min'}))
 	.pipe(gulp.dest('./css/'));
 });
gulp.task('styles', function(callback){
	gulpSequence('sass', 'minify-css')(callback)
});

 gulp.task('scripts', function() {         
   return gulp.src(['js/scripts.js'])
     .pipe(concat('all.js'))
	  .pipe(gulp.dest('./js/'));
 });

gulp.task('uglify', function() {
   gulp.src('js/all.js')
     .pipe(uglify())
     .pipe(rename({suffix: '.min'}))
     .pipe(gulp.dest('./js'))
 });

gulp.task('watch', function () {
  gulp.watch('./scss/*.scss', ['styles']);
  gulp.watch('./js/*.js', ['scripts']);
  
});

