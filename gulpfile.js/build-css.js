const { src, dest } = require('gulp');

const postcss = require('gulp-postcss');
const sass = require('gulp-sass')(require('sass'));
const tailwindcss = require('@tailwindcss/postcss');

const paths = require('./paths');

function buildCss() {
  const postCSSPlugins = [
    tailwindcss,
  ];
  
  let pipeline = src('src/index.scss')
    .pipe(sass({ loadPaths: ['src', 'node_modules'] }))
    .pipe(postcss(postCSSPlugins))

   return pipeline.pipe(dest(paths.outDir));
}

module.exports = buildCss;