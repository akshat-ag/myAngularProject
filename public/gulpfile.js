/*https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md
https://www.youtube.com/watch?v=DkRoa2LooNM&list=PLRk95HPmOM6PN-G1xyKj9q6ap_dc9Yckm&index=1
https://egghead.io/lessons/javascript-gulp-and-browserify-initial-setup	*/
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var jshint = require('gulp-jshint');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('js', function() {
	return browserify('./app/app.js')
		.bundle()
		.on('error', function(err){
        console.log(err.message);
    	})
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./app/dist'));
});

gulp.task('jshint', function() {
	return gulp.src('./app/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});