const path = require('path');

module.exports = {
	mode: 'production',
	target: "web",
	output: {
		path: path.resolve('dist'),
		filename: 'index.js',
		library: 'eyzmaps',
	    // libraryTarget: 'var',
	    // libraryTarget: 'umd',
		libraryTarget: 'commonjs2',
	    umdNamedDefine: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			}
		]
	},
};