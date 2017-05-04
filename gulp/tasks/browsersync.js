// Browser-sync is a local server which will update your browser(s) when it sees that the below files are updated
// You may also provide so-called "watch" tasks which are to be run whenever these changes are taking place, for example recompiling JS or linting Sass

const config = require("../config.js");

const gulp = require("gulp");
const browsersync = require("browser-sync");

gulp.task("browsersync", function() {
	browsersync(config.browsersync);

	gulp.watch("**/*.{html,php}", browsersync.reload);
	gulp.watch(config.browsersync.src + "css/**/*.css", browsersync.reload);
	gulp.watch(config.browsersync.src + "sass/**/*.scss", ["sass", "stylelint"]);
	gulp.watch(config.browsersync.src + "scripts/js/**/*.js", ["babel", "eslint"], browsersync.reload);
	gulp.watch(config.browsersync.src + "scripts/compiled/*.js", browsersync.reload);
});
