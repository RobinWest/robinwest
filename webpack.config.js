var HTMLWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

var extractLess = new ExtractTextPlugin('./assets/css/styles.less.css');

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
		extractLess
	],
	devtool: 'source-map'
};