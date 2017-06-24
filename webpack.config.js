var HTMLWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
// var FaviconsWebpackPlugin = require('favicons-webpack-plugin');


var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

var CopyWebpackPluginConfig = new CopyWebpackPlugin([
	{ from: __dirname + '/app/favicons', to: 'favicons/', ignore: ['_links.html'] }
]);

var extractLess = new ExtractTextPlugin('./assets/css/styles.less.css');

// This plugin doesn't play well with my Centos server :(
// var FaviconsWebpackPluginConfig = new FaviconsWebpackPlugin({
// 	logo: './app/images/logo.svg',
// 	background: '#fff',
// 	title: 'Robin West'
// });

module.exports = {
	entry: {
		app: __dirname + '/app/index.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},{
				test: [/\.less$/i, /\.css$/],
				use: extractLess.extract({
					use: [{
						// loader: "css-loader", options: { sourceMaps: true, minimize: true }
						loader: "css-loader", options: {}
					}, {
						// loader: "less-loader", options: { sourceMaps: true, minimize: true }
						loader: "less-loader", options: {}
					}]
				})
			}

		]
	},
	output: {
		filename: '[name].js',
		path: __dirname + '/build'
	},
	plugins: [
		HTMLWebpackPluginConfig,
		CopyWebpackPluginConfig,
		extractLess,
		// FaviconsWebpackPluginConfig
	],
	devtool: 'source-map'
};
