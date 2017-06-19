const path = require("path");
const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const srcDir = path.resolve(__dirname, "app");
const distDir = path.resolve(__dirname, "dist");

module.exports = {
	watch: false,
	context: srcDir,
	entry: [
		"./index.jsx"
	],
	output: {
		path: distDir,
		filename: "[name].js",
	},
	resolve: {
		modules: [
			path.resolve("./app"),
			path.resolve("./node_modules")
		],
		extensions: [
			".js",
			".jsx",
			".sass",
			".scss",
			".css",
			".html"
		],
		"alias": {
			"react": "preact-compat",
			"react-dom": "preact-compat"
		}
	},
	devServer: {
		historyApiFallback: true, // For redux and react-outer
		contentBase: srcDir,
		publicPath: "/"
	},
	module: {
		rules: [
			{
				enforce: "pre",
				test: /\.(js|jsx)$/,
				loader: "eslint-loader",
				options: {
					emitWarning: true
				},
				exclude: /node_modules/,
			},
			{
				test: /\.(js|jsx)$/,
				use: [{
					loader: "babel-loader",
					options: {
						presets: [
							["es2015", {"modules": false}],
							"stage-0",
							"react"
						]
					}
				}],
				exclude: /node_modules/
			},
			{
				test: /\.html$/,
				loader: "raw-loader",
				exclude: /node_modules/
			},
			{
				test: /\.(sass|scss|css)$/,
				loader: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [
						{
							loader: "css-loader",
							options: {
								importLoaders: 1
							}
						},
						"postcss-loader",
						"stylefmt-loader"
					]
				}),
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new ExtractTextPlugin("main.css"),
		new StylelintPlugin({
			emitErrors: false,
			syntax: "scss"
		}),
		new SWPrecacheWebpackPlugin ({
			cacheId: "my-project-name",
			filename: "sw.js",
			maximumFileSizeToCacheInBytes: 4194304,
			minify: true,
			staticFileGlobs: [
				"dist/**/*.css",
				"dist/**/*.html",
				"dist/**/*.js",
				"dist/**/*.{svg,png,jpg}"
			],
			runtimeCaching: [{
				handler: "cacheFirst",
				urlPattern: /[.]{mp3,mp4}$/
			}],
		}),
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("production") //development
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			mangle: {
				keep_fnames: true,
				screw_ie8: true,
			},
			compress: {
				screw_ie8: true,
				warnings: false,
				conditionals: true,
				unused: true,
				comparisons: true,
				sequences: true,
				dead_code: true,
				evaluate: true,
				if_return: true,
				join_vars: true,
			},
			output: {
				comments: false,
			}
		}),
		new HtmlWebpackPlugin({
			template: path.join(srcDir, "index.html"),
			path: distDir,
			filename: "index.html"
		})
	]
}
