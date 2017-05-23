var gulp = require('gulp'),
		less = require('gulp-less'),
		concat = require('gulp-concat'),
		minifyCss = require('gulp-minify-css'),
		del = require('del'),
		uglify = require('gulp-uglify'),
		rename = require('gulp-rename'),
		stripDebug = require('gulp-strip-debug'),
		imagemin = require('gulp-imagemin'); //压缩图片
      
      
//less 转css
gulp.task('less', function(){
		gulp.src('src/themes/less/*.less')
		.pipe(less())
		.pipe(gulp.dest('src/themes/css'));
})

//监听less变动
gulp.task('watch', function () {
    gulp.watch('src/source/less/*.less', ['less']); //当所有less文件发生改变时，调用less任务
});
//上线坏境      
//压缩css
gulp.task('minifyCss', function(){
    return gulp.src('src/source/css/*.css')
	        .pipe(rename({suffix: '.min'}))
	        .pipe(minifyCss())
	        .pipe(concat('main.css'))
	        .pipe(gulp.dest('dist/css'));
});

//压缩js
gulp.task('minifyJs', function(){
    return gulp.src(['src/source/js/*.js'])
    			.pipe(rename({suffix: '.min'}))
	        .pipe(uglify())
	        //.pipe(concat('main.js'))
	        .pipe(stripDebug()) //去除console.log
	        .pipe(gulp.dest('dist/js'));
});

//压缩图片
gulp.task('minifyImg', function(){
    return gulp.src('src/source/image/*')
	        .pipe(imagemin())
	        .pipe(gulp.dest('dist/image'));
});


//less 转css
gulp.task('htmlto', function(){
		gulp.src('src/*.html')
		.pipe(less())
		.pipe(gulp.dest('dist'));
})
