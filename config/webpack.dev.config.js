'Use strict';
const { createClientEntry } = require('./webpack.entries');
const webpack = require('webpack');

const createDevClientEntry = ({port = 8080, proxyPort = 8000} = {}) => {
	const entry = createClientEntry(
		'bundle', 
		['webpack-hot-middleware/client', './src/entries/dev']
	);

	entry.module.rules.forEach( (loader) => {
		const usedLoader = typeof loader.use === 'string' ? 
				loader.use :
			Array.isArray(loader.use) ? 
				loader.use[0].loader || loader.use[0] :
				loader.use.loader;

		if (usedLoader === 'babel-loader') {
			loader.use[0].options.cacheDirectory = true;
			loader.use[0].options.plugins = ['react-hot-loader/babel'];
		}

		if (usedLoader === 'ts-loader') {
			loader.use[0].options = {
				configFile: 'tsconfig.dev.json'
			}
			loader.use.unshift({
				loader: 'babel-loader',
				options: {
					babelrc: false,
					plugins: ['react-hot-loader/babel'],
				},
			})
		}
	});

	entry.plugins.push(new webpack.HotModuleReplacementPlugin());

	return entry; 
};

module.exports = createDevClientEntry();