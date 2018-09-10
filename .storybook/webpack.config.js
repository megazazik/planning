const path = require("path");

const cssLoaderOptions = {
	modules: true,
	localIdentName: '[path][name]__[local]'
};

module.exports = (baseConfig, env, defaultConfig) => {
	defaultConfig.module.rules.push({
		test: /\.jsx?$/,
		exclude: /node_modules/,
		use: [{
			loader: 'babel-loader',
			options: {
				presets: [
					'react', 
					['@babel/preset-env', {modules: false}]
				]
			}
		}]
	});

	defaultConfig.module.rules.push({
		test: /\.(ts|tsx)$/,
		include: path.resolve(__dirname, "../src"),
		loader: require.resolve("ts-loader"),
		options: {
			configFile: 'tsconfig.json'
		}
	});
	defaultConfig.module.rules.push({
		test: /\.less$/,
		use: [
			'style-loader',
			{
				loader: 'css-loader',
				options: cssLoaderOptions
			},
			'less-loader'
		]
	});

	defaultConfig.resolve.extensions.push(".jsx", ".ts", ".tsx");
	defaultConfig.resolve.modules = [path.resolve(__dirname, '../src'), path.resolve(__dirname, '../'), 'node_modules'];

	defaultConfig.context = path.resolve(__dirname, '../src');

	return defaultConfig;
};