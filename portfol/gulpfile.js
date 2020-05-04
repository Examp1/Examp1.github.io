var gulp 			= require('gulp'),
    sass 			= require('gulp-sass'),
    autoprefixer 	= require('gulp-autoprefixer'),
    sourcemaps 		= require('gulp-sourcemaps'),
    browserSync 	= require('browser-sync').create();

gulp.task('serve', function() { //таск для лайф релоада
    browserSync.init({
        server: {
            baseDir: "./src"  
        }
    });
});

gulp.task('sass', function(){ // Делаю таск на компиляцию сасс в цсс
	return gulp.src('src/sass/*.sass') // указываю путь откуда брать сасс файлы
	.pipe(sass().on('error', sass.logError)) // делаю вывод ошибок
	.pipe(sourcemaps.init()) // Инициализирую соурсмап
	.pipe(autoprefixer({     //автопрефиксы
            browsers: ['last 2 versions'], // ставить префиксы для 2х последних версий браузера
            cascade: false 
        }))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('./src/css/')) //помещаю скомпилированые цсс файлы в папку цсс
	.pipe(browserSync.reload({
		stream: true
	}));
});
gulp.task('watch', function(){
	gulp.watch('src/sass/**/*.sass', gulp.series('sass')) //Отслеживание изменений в папке и подпапках sass сех файлов с расширением .sass и если что-то изменилось то передаем это изменение в таск 'sass'
	gulp.watch('./src/*').on('change', browserSync.reload) // отслеживание изменений в файлах .html если были изменения то перезапускает страницу
});															
gulp.task('default', gulp.series(  //Делаем дефолт таск  который вызывает таски сервера и отслежживание изменений
	gulp.parallel('watch','serve'),
	
));