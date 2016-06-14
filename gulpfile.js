// including plugins
var buildFolder = './build/',
  gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  rename = require('gulp-rename'),
  cleanCSS = require('gulp-clean-css'),
  htmlmin = require('gulp-htmlmin'),
  sourcemaps = require('gulp-sourcemaps'),
  uglify = require('gulp-uglify'),
  imageop = require('gulp-image-optimization');
  //watch = require('gulp-watch');

//////////////////////////////////////////////////////

// Minify Css

gulp.task('minify-css', function() {
  return gulp.src('./source/css/*.css')
    .pipe(sourcemaps.init())
        .pipe(cleanCSS({debug: true}, function(details) {
            console.log("originalSize " +details.stats.originalSize);
            console.log("minifiedSize " +details.stats.minifiedSize);
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(buildFolder + 'css'));
});


// Minify HTML
gulp.task('minify-html', function() {
  return gulp.src('./source/*.html') // path to your files
      .pipe(htmlmin({collapseWhitespace: false}))
      /*.pipe(htmlmin({
            empty: true,
            quotes: true
        }))*/
      .pipe(gulp.dest(buildFolder));

});

// Minify JavaScript
gulp.task('minify-js', function () {
    gulp.src(['./source/js/*.js'])
      .pipe(plumber())
        .pipe(uglify('*.js',{
            output: {
                beautify: false
            },
            outSourceMap: true,
            basePath: buildFolder,
            sourceRoot: '/'
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(plumber.stop())
        .pipe(gulp.dest(buildFolder + 'js'));
});
// Optimizes our image files and outputs them to build/image/*
gulp.task('minify-img', function() {
    return gulp.src(['./source/images/**.*'])
        .pipe(imageop({
            optimizationLevel: 5
        }))
        .pipe(gulp.dest(buildFolder + 'images'));
});
//////////////////////////////////////////////////////
// Lint JavaScript
gulp.task('jsLint', function () {
    gulp.src('./source/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter());
});

/*gulp.task('watch-coffeescript', function () {
    gulp.watch(['./CoffeeScript/*.coffee'], ['compile-coffee']);
});*/
gulp.task('watch', function(){
  gulp.watch('./source/js/*.js', [buildFolder +'js']);
  gulp.watch('./source/css/**/*.css', [buildFolder + 'css']);
  gulp.watch('./source/*.html', [buildFolder]);
  console.log('Event type: ' + event.type); // added, changed, or deleted
  console.log('Event path: ' + event.path); // The path of the modified file
});

// // Run All tasks one by one
gulp.task('default', ['minify-css','minify-html', 'minify-js',/*'concat', 'concat-copyright', 'concat-copyright-version',*/'jsLint', /*'coffeeLint', 'bundle-one', 'rename'*/]);

