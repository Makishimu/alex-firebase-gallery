var gulp      = require('gulp'),
	server    = require('gulp-server-livereload'),
	sass      = require('gulp-sass'),
	prefix    = require('gulp-autoprefixer'),
    useref    = require('gulp-useref'),
    gulpif    = require('gulp-if'),
    uglify    = require('gulp-uglify'),
    minifyCss = require('gulp-csso');
	imagemin  = require('gulp-imagemin');

// server
gulp.task('serv', function(){
	gulp.src('app')
	// gulp.src('public')
	.pipe(server({
		livereload: true,
		port: 1488
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

// image minification
gulp.task('image', function(){
    var thumbnails = 
    gulp.src('app/img/thumbnails/*')
        .pipe(imagemin())
        .pipe(gulp.dest('public/img/thumbnails'));

    var image = 
    gulp.src('app/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('public/img'));
});

//watch on sass files changes
gulp.task('watch', function(){
	gulp.watch('app/sass/**/*.sass', ['style']);
	gulp.watch('app/img/thumbnails/*', ['image']);
})

// run as 'gulp' in console
gulp.task('default', ['serv', 'watch'])

// gulp build
gulp.task('build', ['image'], function () {
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