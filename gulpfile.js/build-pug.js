const { src, dest } = require('gulp');
const pug = require('gulp-pug');
const data = require('gulp-data');

const fs = require('fs');

const paths = require('./paths');

const yaml = require('js-yaml');
const yamlInclude = require('yaml-include');

function importPugLocals() {
  yamlInclude.setBaseFile('content/index.yaml');
  const src = fs.readFileSync(yamlInclude.basefile);
  return yaml.safeLoad(src, {
    schema: yamlInclude.YAML_INCLUDE_SCHEMA,
    filename: yamlInclude.basefile
  });
}

function buildPug() {
  return src('src/*.pug')
    .pipe(data(importPugLocals))
    .pipe(pug())
    .pipe(dest(paths.outDir));
}

module.exports = buildPug;