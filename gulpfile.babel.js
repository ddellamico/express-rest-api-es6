// TEST 1

import gulp from 'gulp';
import shell from 'gulp-shell';
import rimraf from 'rimraf';
import run from 'run-sequence';
import watch from 'gulp-watch';
import server from 'gulp-live-server';
import nodemon from 'gulp-nodemon';
import sourcemaps from 'gulp-sourcemaps';
import babel from 'gulp-babel';
import gutil from 'gulp-util';
import path from 'path';

const paths = {
    js: ['src/**/*.js'],
    jsBuild: ['app/**/*.js'],
    destination: 'app',
    sourceRoot: path.join(__dirname, 'src')
};

gulp.task('default', cb => {
    run('server', 'build', 'watch', cb);
});

gulp.task('build', cb => {
    run('clean', 'flow', 'babel', 'restart', cb);
});

gulp.task('clean', cb => {
    rimraf(paths.destination, cb);
});

gulp.task('flow', shell.task([
    'flow'
], {ignoreErrors: true}));

gulp.task('babel', shell.task([
    'babel src --out-dir app --source-maps'
]));


// gulp.task('debug', () => {
//     nodemon({
//         script: './app/index',
//         ext: 'js',
//         watch: paths.js,
//         ignore: [
//             './node_modules/**'
//         ],
//         nodeArgs: ['--debug-brk'],
//         tasks: ['babel'],
//         env: {'NODE_ENV': 'development'}
//     });
// });

// gulp.task('debug',() => {
//   return gulp.src(paths.jsBuild)
//     .pipe(nodeInspector({
//       debugPort: 5858,
//       webHost: '0.0.0.0',
//       webPort: 8080
//     }));
// });

//gulp.task('babel', () => {
//    return gulp.src(paths.js)
//        .pipe(sourcemaps.init())
//        .pipe(babel())
//        .on('error', gutil.log)
//        .pipe(sourcemaps.write('.', {
//            includeContent: false,
//            sourceRoot: '../src'
//        }))
//        .pipe(gulp.dest(paths.destination));
//});

let express;

gulp.task('server', () => {
    express = server.new(paths.destination);
});

gulp.task('restart', () => {
    express.start.bind(express)();
});

gulp.task('watch', () => {
    return watch(paths.js, () => {
        gulp.start('build');
    });
});
