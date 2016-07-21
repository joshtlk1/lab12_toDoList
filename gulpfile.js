	var gulp = require('gulp');
	var browserSync = require('browser-sync');
	var concat = require('gulp-concat');
	var Sass = require('gulp-sass');

	gulp.task('default', function() {
		console.log("is this the real life?")
	});

	gulp.task('rhapsody',['default'], function(){
		console.log('is this just fantasy?');
	});

	gulp.task('landslide', ['rhapsody'], function() {
		console.log('caught in a landslide');
	});

	gulp.task('browser-sync', function() {
		browserSync.init({
			server: {
				baseDir: "./"
			}
		});
		gulp.watch('./*.html').on('change', browserSync.reload);
		gulp.watch('./css/*.css').on('change', browserSync.reload);
		gulp.watch('./js/*.js').on('change', browserSync.reload);
	})

	gulp.task('concatScripts',function() {
		gulp.src(['a.js','b.js','c.js','d.js'])
		.pipe(concat("app.js"))
		.pipe(gulp.dest('js'));
	});

	'use strict';

gulp.task('Sass', function () { 
	return gulp.src('./Sass/**/*.scss')
	.pipe(Sass().on('error', Sass.logError))
	.pipe(gulp.dest('./css')); 
	});
gulp.task('Sass:watch', function () { 
	gulp.watch('./Sass/**/*.scss', ['Sass']);
});
 