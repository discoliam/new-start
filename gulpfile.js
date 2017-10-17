var gulp = require('gulp');
var plugins = require("gulp-load-plugins")({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
});

gulp.task('default', function() {
  // place code for your default task here
});

// Styles
gulp.task('styles', function() {
  
  return gulp.src('assets/sass/main.scss')

    // init Sourcemaps
    // .pipe(plugins.sourcemaps.init())

    // Compile SCSS
    .pipe(plugins.sass({
        outputStyle : 'expanded',
        sourceComments : 'none'
    })
    .on('error', plugins.sass.logError))

    // Auto Prefixing
    // .pipe(plugins.autoprefixer('last 5 version'))

    // Min File
    .pipe(plugins.minifyCss())

    // Sourcemaps
    // .pipe(plugins.sourcemaps.write('/', {
    //   includeContent: false,
    //   sourceRoot: '/'
    // }))

    // Save
    .pipe(gulp.dest('assets/css'))

});

// Watch
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('assets/sass/**/*.scss', ['styles']);


});

// Build
gulp.task('build', ['styles']);


// Swallow Error
function swallowError (error) {

  // If you want details of the error in the console
  console.log(error.toString());

  this.emit('end');
}
