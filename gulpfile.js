const { src, dest, watch } = require('gulp');
const { parallel } = require('gulp');
var sass = require('gulp-sass')(require('sass'));

// sass.compiler = require('dart-sass');

// funcion que compila css
function css(){
    return src("./src/scss/**/*.scss")
        .pipe( sass({
            outputStyle: 'compressed'
        }) )
        .pipe( dest("./build/css") );
}

// minificar css
// function minificarCSS(){
//     return src("./src/scss/app.scss")
//         .pipe( sass({
//             outputStyle: 'compressed'
//         }) )
//         .pipe( dest("./build/css") );
// }

// 
function watchArchivo(){
    watch("./src/scss/**/*.scss", css);
}
exports.css = css;
// exports.minificarCSS = minificarCSS;
exports.watchArchivo = watchArchivo;
exports.compiler = parallel(css, watchArchivo)
