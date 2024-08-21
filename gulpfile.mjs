import gulp from 'gulp';
import sass from 'gulp-sass';
import sassModule from 'sass';
import browserSync from 'browser-sync';
import { deleteAsync as del } from 'del';
import fileinclude from 'gulp-file-include';
import postcss from 'gulp-postcss';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const scss = sass(sassModule);
const browserSyncInstance = browserSync.create();

// 소스 파일 경로
const PATH = {
  HTML: './src',
  COMMON_HTML: './src/html',
  ASSETS: {
    COMMON_CSS: './src/assets/sass',
    COMMON_IMG: './src/assets/img',
    COMMON_SCRIPT: './src/assets/js',
    FONT: './src/assets/fonts',
  },
};

// 작업물 경로
const DEV_PATH = {
  CLEAN: './dev',
  HTML: './dev/src',
  ASSETS: {
    COMMON_CSS: './dev/src/assets/css',
    COMMON_IMG: './dev/src/assets/img',
    COMMON_SCRIPT: './dev/src/assets/js',
    FONT: './dev/src/assets/fonts',
  },
};

// 산출물 경로
const DEST_PATH = {
  CLEAN: './dist',
  HTML: './dist/src',
  ASSETS: {
    COMMON_CSS: './dist/src/assets/css',
    COMMON_IMG: './dist/src/assets/img',
    COMMON_SCRIPT: './dist/src/assets/js',
    FONT: './dist/src/assets/fonts',
  },
};

// Clean tasks
export const clean = async () => {
  await del(DEV_PATH.CLEAN);
};

export const cleanDist = async () => {
  await del(DEST_PATH.CLEAN);
};

// SCSS compilation
export const scssCompile = () => {
  return gulp
    .src(PATH.ASSETS.COMMON_CSS + '/**/*.scss')
    .pipe(scss({ outputStyle: 'expanded' }).on('error', scss.logError))
    .pipe(postcss([tailwindcss, autoprefixer])) // PostCSS로 Tailwind CSS와 Autoprefixer 적용
    .pipe(gulp.dest(DEV_PATH.ASSETS.COMMON_CSS))
    .pipe(browserSyncInstance.stream());
};

// HTML tasks
export const html = () => {
  return gulp
    .src(PATH.HTML + '/**/*.html')
    .pipe(
      fileinclude({
        prefix: '@@',
        basepath: '@file',
      })
    )
    .pipe(gulp.dest(DEV_PATH.HTML))
    .pipe(browserSyncInstance.stream());
};

// Script tasks
export const scriptConcat = () => {
  return gulp
    .src(PATH.ASSETS.COMMON_SCRIPT + '/**/*.js')
    .pipe(gulp.dest(DEV_PATH.ASSETS.COMMON_SCRIPT))
    .pipe(browserSyncInstance.stream());
};

// Watch tasks
export const watch = () => {
  gulp.watch(PATH.HTML + '/**/*.html', html);
  gulp.watch(PATH.ASSETS.COMMON_CSS + '/**/*.scss', scssCompile);
  gulp.watch(PATH.ASSETS.COMMON_SCRIPT + '/**/*.js', scriptConcat);
};

// BrowserSync task
export const browserSyncTask = () => {
  browserSyncInstance.init({
    server: {
      baseDir: DEV_PATH.HTML,
      directory: true,
    },
    cors: true,
    files: [
      DEV_PATH.HTML + '/**/*.html',
      DEV_PATH.ASSETS.COMMON_CSS + '/**/*.css',
      DEV_PATH.ASSETS.COMMON_SCRIPT + '/**/*.js',
      DEV_PATH.ASSETS.COMMON_IMG + '/**/*.*',
    ],
    startPath: '/',
    ghostMode: false,
    notify: false,
    reloadDelay: 1000,
    skipUncaughtErrors: true,
  });
};

// Default task
export const defaultTask = gulp.series(
  clean,
  gulp.parallel(scssCompile, html, scriptConcat),
  gulp.parallel(browserSyncTask, watch)
);

export default defaultTask;
