// This task is used to wipe stuff that you don't need, for example trashing an old distribution build before doing a new build

const config = require("../config.js");

const gulp = require("gulp");
const del = require("del");

gulp.task("delete", function() {
	return del.sync(config.delete.src);
});
