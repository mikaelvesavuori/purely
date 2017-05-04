// Process your CSS as Sass, run the code through PostCSS (PreCSS and CSS Next), optimize CSS with clean-css, create source maps for the Sass and then lastly, update Browsersync if it is running

const config = require("../config.js");

const gulp = require("gulp");
const browsersync = require("browser-sync");
const plumber = require("gulp-plumber");
const sourcemaps = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const scss = require("postcss-scss");
const precss = require("precss");
const cssnext = require("postcss-cssnext");
const cleancss = require("gulp-clean-css");

gulp.task("sass", function () {
	const processors = [
		precss(config.precss.options),
		cssnext(config.cssnext.browsers)
	];

	browsersync.notify("Compiling Sass");

	return gulp.src(config.sass.src)
		.pipe(sourcemaps.init())
		.pipe(plumber())
		.pipe(sass.sync().on("error", sass.logError))
		.pipe(postcss(processors, {syntax: scss}))
		.pipe(cleancss())
		.pipe(sourcemaps.write("maps"))
		.pipe(gulp.dest(config.sass.dest))
		//.pipe(browsersync.stream());
});
