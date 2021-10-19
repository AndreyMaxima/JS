const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('./tsconfig.json')

gulp.task('default', () =>
    tsProject
        .src()
        .pipe(tsProject())
        .js
        .pipe(gulp.dest('./dist')) // Путь до конечной папки (куда будут помещщены js файлы)
)