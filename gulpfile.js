/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are split into several files in the gulp directory
 *  because putting it all here was too long
 */

'use strict';

var fs = require('fs');
var gulp = require('gulp');
var concat = require('gulp-concat');
 
gulp.task('pack-js', function () {	
	return gulp.src(['src/*.js', 'src/app/*.js', 'src/app/main/*.js'])
		.pipe(concat('bundle.js'))
		.pipe(gulp.dest('.tmp'));
});
 
gulp.task('pack-css', function () {	
	return gulp.src(['app/css/main.css', 'app/css/custom.css'])
		.pipe(concat('stylesheet.css'))
		.pipe(gulp.dest('.tmp'));
});
 
/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
fs.readdirSync('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file);
});


/**
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */
gulp.task('default', ['clean', 'pack-js', 'pack-css'], function () {
  gulp.start('build');
});
