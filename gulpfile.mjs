import gulp from 'gulp';
import sass from 'gulp-sass';
import sassModule from 'sass';
import browserSync from 'browser-sync';
import { deleteAsync as del } from 'del'; // 수정된 부분
import fileinclude from 'gulp-file-include';
import prettyHtml from 'gulp-pretty-html';

// ES 모듈 방식으로 가져오기
const scss = sass(sassModule);
const browserSyncInstance = browserSync.create();

// 소스 파일 경로
const PATH = {
  HTML: "./src",
  COMMON_HTML: "./src/html",
  ASSETS: {
    COMMON_CSS: "./src/assets/sass",
    COMMON_IMG: "./src/assets/img",
    COMMON_SCRIPT: "./src/assets/js",
    FONT: "./src/assets/fonts",
  },
};

// 작업물
const DEV_PATH = {
  CLEAN: "./dev",
  HTML: "./dev/src",
  ASSETS: {
    COMMON_CSS: "./dev/src/assets/css",
    COMMON_IMG: "./dev/src/assets/img",
    COMMON_SCRIPT: "./dev/src/assets/js",
    FONT: "./dev/src/assets/fonts",
  },
};

// 산출물 경로
const DEST_PATH = {
  CLEAN: "./dist",
  HTML: "./dist/src",
  ASSETS: {
    COMMON_CSS: "./dist/src/assets/css",
    COMMON_IMG: "./dist/src/assets/img",
    COMMON_SCRIPT: "./dist/src/assets/js",
    FONT: "./dist/src/assets/fonts",
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
  return gulp.src(PATH.ASSETS.COMMON_CSS + '/**/*.scss')
    .pipe(scss({ outputStyle: 'expanded' }).on('error', scss.logError))
    .pipe(gulp.dest(DEV_PATH.ASSETS.COMMON_CSS))
    .pipe(browserSyncInstance.stream());
};

export const scssDistCompile = () => {
  return gulp.src(PATH.ASSETS.COMMON_CSS + '/**/*.scss')
    .pipe(scss({ outputStyle: 'compressed' }).on('error', scss.logError))
    .pipe(gulp.dest(DEST_PATH.ASSETS.COMMON_CSS));
};

// HTML tasks
export const html = () => {
  return gulp.src(PATH.HTML + '/**/*.html')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file',
    }))
    .pipe(gulp.dest(DEV_PATH.HTML))
    .pipe(browserSyncInstance.stream());
};

export const htmlDist = () => {
  return gulp.src(PATH.HTML + '/**/*.html')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file',
    }))
    .pipe(prettyHtml({
      indent_size: 2,
      indent_char: ' ',
    }))
    .pipe(gulp.dest(DEST_PATH.HTML));
};

// Script tasks
export const scriptConcat = () => {
  return gulp.src(PATH.ASSETS.COMMON_SCRIPT + '/**/*.js')
    .pipe(gulp.dest(DEV_PATH.ASSETS.COMMON_SCRIPT))
    .pipe(browserSyncInstance.stream());
};

export const scriptDistConcat = () => {
  return gulp.src(PATH.ASSETS.COMMON_SCRIPT + '/**/*.js')
    .pipe(gulp.dest(DEST_PATH.ASSETS.COMMON_SCRIPT));
};

// Image tasks
export const imagemin = () => {
  return gulp.src(PATH.ASSETS.COMMON_IMG + '/**/*.*')
    .pipe(gulp.dest(DEV_PATH.ASSETS.COMMON_IMG));
};

export const imageminDist = () => {
  return gulp.src(PATH.ASSETS.COMMON_IMG + '/**/*.*')
    .pipe(gulp.dest(DEST_PATH.ASSETS.COMMON_IMG));
};

// Font tasks
export const fonts = () => {
  return gulp.src(PATH.ASSETS.FONT + '/**/*.*')
    .pipe(gulp.dest(DEV_PATH.ASSETS.FONT));
};

export const fontsDist = () => {
  return gulp.src(PATH.ASSETS.FONT + '/**/*.*')
    .pipe(gulp.dest(DEST_PATH.ASSETS.FONT));
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
      DEV_PATH.ASSETS.COMMON_IMG + '/**/*.*'
    ],
    startPath: '/',
    ghostMode: false,
    notify: false,
    reloadDelay: 1000,
    skipUncaughtErrors: true,
  });
};

// Default and dist tasks
export const defaultTask = gulp.series(clean, scssCompile, html, scriptConcat, imagemin, fonts, browserSyncTask, watch);
export const distTask = gulp.series(cleanDist, scssDistCompile, htmlDist, scriptDistConcat, imageminDist, fontsDist);

export default defaultTask;
