// Lint your JavaScript files
// Linting settings are configured in config.js

const config = require("../config.js");

const gulp = require("gulp");
const eslint = require("gulp-eslint");

gulp.task("eslint", function() {
	return gulp.src(config.linting.eslint.src)
		.pipe(eslint())
		.pipe(eslint.format())
});
