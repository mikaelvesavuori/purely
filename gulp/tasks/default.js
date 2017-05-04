// This is the (default) task that runs when you type "gulp" in your CLI
// In this case, "gulp" will compile all files, lint them, do some optimizations on the files and then start Browser-sync in your browser

const gulp = require("gulp");

gulp.task("default", ["build:development"], function() { });
