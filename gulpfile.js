var gulp      = require('gulp'),
	server    = require('gulp-server-livereload'),
	sass      = require('gulp-sass'),
	prefix    = require('gulp-autoprefixer'),
    useref    = require('gulp-useref'),
    gulpif    = require('gulp-if'),
    uglify    = require('gulp-uglify'),
    minifyCss = require('gulp-csso');

// server
gulp.task('serv', function(){
	gulp.src('app')
	// gulp.src('public')
	.pipe(server({
		livereload: true,
		port: 3000
	}));
});

//styles
gulp.task('style', function(){
	return gulp.src('app/sass/**/*.sass')
		.pipe(sass().on('error', sass.logError))
		.pipe(prefix({
			browsers: ['last 20 version']
		}))
		.pipe(gulp.dest('app/css'));
});

//watch on sass files changes
gulp.task('watch', function(){
	gulp.watch('app/sass/**/*.sass', ['style']);
})

// run as 'gulp' in console
gulp.task('default', ['serv', 'watch'])

// gulp build
gulp.task('build', function () {
    var buildIndex = 
    	gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest('public'));

    var buildTemplates = 
    	gulp.src('app/templates/*.html')
    	.pipe(gulp.dest('public/templates'));

});