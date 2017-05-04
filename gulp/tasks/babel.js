// Concatenate, uglify, transpile (via Babel) and create source maps for your JavaScript files

const config = require("../config.js");

const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const babel = require("gulp-babel");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");

gulp.task("babel", function() {
	return gulp.src(config.babel.src)
		.pipe(sourcemaps.init())
		.pipe(babel({
			presets: ["es2015"]
		}))
		.pipe(concat("site.js"))
		.pipe(uglify())
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest(config.babel.dest))
});
