// const gulp = require('gulp')
// const browserify = require('browserify')
// const tsify = require('tsify')
// const source = require('vinyl-source-stream')
// const watchify = require('watchify')
// const fancyLog = require('fancy-log')
// const browserSync = require('browser-sync').create()
// const path = {
//     pages: ["./src/*.html", "./src/*.css"]
// }
//
// gulp.task('copy-file', () => gulp.src(path.pages) // Задача на копирование html файлов из src в dist
//     .pipe(gulp.dest('./dist'))
// )
//
// gulp.task('serve', () => {
//     browserSync.init({
//         server: {
//             baseDir: './dist'
//         },
//         port: 3000,
//     })
//     gulp.watch(['./dist/*']).on('change', browserSync.reload)
//     gulp.watch(['./src/*.html', './src/*.css']).on('change', gulp.series('copy-file'))
// })
//
// const whatchifyBrowserify = watchify(browserify( // Обёртка для слежения за изменениями ts
//     {
//         basedir: '.',
//         entries: ["./src/main.ts"], // Фалйы для обработки
//         cache: {},
//         debug: true, // Включаем отладку
//         packageCache: {}
//     })
//     .plugin(tsify))
//
// const bundle = () => whatchifyBrowserify
//     .bundle() // объединит все модули в один файл
//     .on('error', fancyLog) // Логирование при ошибках
//     .pipe(source('bundle.js'))
//     .pipe(gulp.dest('./dist')) // Путь к выходному файлу
//
// gulp.task('default', gulp.series(gulp.parallel('copy-file'), bundle))
// whatchifyBrowserify.on('update', bundle) // Вызов функции bundle при изменеии ts
// whatchifyBrowserify.on('log', fancyLog) // Логирование