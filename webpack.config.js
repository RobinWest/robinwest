var HTMLWebpackPlugin     = require('html-webpack-plugin');
var ExtractTextPlugin     = require('extract-text-webpack-plugin');
var FaviconsWebpackPlugin = require('favicons-webpack-plugin');


var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

var extractLess = new ExtractTextPlugin('./assets/css/styles.less.css');

var FaviconsWebpackPluginConfig = new FaviconsWebpackPlugin({
	logo: './app/images/logo.svg',
	background: '#fff',
	title: 'Robin West'
});

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
			// },{
			// 	test: /\.(woff|woff2|eot|ttf|svg)$/,
			// 	exclude: /node_modules/,
			// 	loader: 'url-loader?limit=1024&name=fonts/[name].[ext]'
			}

		]
	},
	output: {
		filename: '[name].js',
		path: __dirname + '/build'
	},
	plugins: [
		HTMLWebpackPluginConfig,
		extractLess,
		FaviconsWebpackPluginConfig
	],
	devtool: 'source-map'
};