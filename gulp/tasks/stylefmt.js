// Stylefmt corrects your CSS/Sass files so they obey your linting settings
// This means you don't manually have to be an a**hole correcting any "mistakes" you or others may have done to offend The Great Machine God

const config = require("../config.js");

const gulp = require("gulp");
const postcss = require("gulp-postcss");
const stylefmt = require("gulp-stylefmt");

gulp.task("stylefmt", function () {
	return gulp.src(config.stylefmt.src)
		.pipe(stylefmt(config.linting.stylelint))
		.pipe(gulp.dest(config.stylefmt.dest));
});
