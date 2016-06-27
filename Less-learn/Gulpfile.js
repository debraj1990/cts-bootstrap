/**
 * http://usejsdoc.org/
 */

//var gulp = require('gulp');
//var less = require('gulp-less');
//var path = require('path');
//
//var less = require('gulp-less');
//var path = require('path');
// 
//gulp.task('less', function () {
//  return gulp.src('./*.less')
//    .pipe(less({
//      paths: [ path.join(__dirname, 'less', 'includes') ]
//    }))
//    .pipe(gulp.dest('./public/css'));
//});
//

//gulp.task('default', [ 'less' ]);

var gulp = require('gulp');
var watchLess = require('gulp-watch-less');
var less = require('gulp-less');
 
gulp.task('default', function () {
	return gulp.src('*.less')
		.pipe(watchLess('*.less'))
		.pipe(less())
		.pipe(gulp.dest('dist'));
});


