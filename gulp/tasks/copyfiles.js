// This task is used to copy sets of files you might need, for example putting external dependencies in your production build, or moving untracked files

const config = require("../config.js");

const gulp = require("gulp");

// Copy index.html to dist folder
// Because index.html doesn't get compiled through a task we need to do this manually
const files = [
	"src/index.html",
];

gulp.task("copyfiles", function() {
	gulp.src(files)
	.pipe(gulp.dest(config.copyfiles.dest));
});
