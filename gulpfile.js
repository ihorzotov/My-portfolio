var gulp=require('gulp'),
    browserSync=require('browser-sync').create(),
    sass=require('gulp-sass'),
    autoprefixer=require('gulp-autoprefixer'),
    compiler = require('webpack'),
    webpack = require('webpack-stream'),
    VueLoaderPlugin = require('vue-loader/lib/plugin');

gulp.task('build', function() {
  return gulp.src('./components/**/*.js')
    .pipe(webpack({
      output: {
        filename: 'script.js',
      },
      mode: 'production',
      module: {
        rules: [
          {
            test: /\.vue$/,
            loader: 'vue-loader'
          },
          {
            test: /\.css$/,
            use: [
              'vue-style-loader',
              'css-loader'
            ]
          },
        ]
      },
      plugins: [
        new VueLoaderPlugin()
      ]
    }).on('error', function handleError() {
      this.emit('end');
    }))
    .pipe(gulp.dest('./js/'));
});

gulp.task('serve', ['sass','build'], function() {

    browserSync.init({
        server: "../Portolio/"
    });
    gulp.watch("./scss/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("./documents/*.html").on('change', browserSync.reload);
    gulp.watch("./js/*.js").on('change', browserSync.reload);
    gulp.watch(['./components/*.{js,vue}','./vue-mixins/*.{js,vue}'], ['build']);
});

gulp.task('sass', function() {
  gulp.src('scss/*.scss')
  .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
  .pipe(gulp.dest('css/'))
  .pipe(browserSync.stream());
});

gulp.task('default', ['serve'],() =>
    gulp.src('css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 version', 'safari 5', 'ie 10', 'opera 12.1', 'ios 7', 'android 4'],
            cascade: false,
        }))
        .pipe(gulp.dest('css/autoprefixer'))
);