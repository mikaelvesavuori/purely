// Begin by pointing to your working folder and your intended distribution/build folder
const src = "src/";
const dist = "dist/";

// All of the below settings can be reached through the task files if you've referenced the config file - if your configuration reference is called "config" then
// config.modulename.parameter, example: config.browsersync.src
module.exports = {
	browsersync: {
		src: dist,
		notify: true,
		server: {
			baseDir: dist,
			online: false,
			notify: true,
			injectChanges: true
		},
	},
	copyfiles: {
		dest: dist
	},
	delete: {
		src: dist + "**/*"
	},
	babel: {
		src: src + "js/**/*",
		dest: dist + "js/"
	},
	sass: {
		src: src + "sass/**/*.{sass,scss}",
		dest: dist + "css/",
		options: {
			noCache: true,
			compass: true,
			bundleExec: true,
			sourcemap: false,
			outputStyle: "compressed"
		}
	},
	precss: { },
	cssnext: {
		browsers: [
			"last 2 versions"
		]
	},
	stylefmt: {
		src: src + "sass/**/*{.sass,scss}",
		dest: src + "sass/",
	},
	linting: {
		stylelint: {
			src: [
				src + "sass/**/*.scss"
			]
		},
		eslint: {
			src: [
				src + "js/**/*.js",
				"!" + src + "js/vendor/**/*"
			]
		},
		reporter: {
			clearReportedMessages: true,
			throwError: false
		}
	}
};
