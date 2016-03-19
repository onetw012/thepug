var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './app/js/app.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query: {
				    presets: ['es2015']
				}
			},
			{
        		test: /\.scss$/,
        		loaders: ["style", "css", "sass"]
      		}
		]
	}
};