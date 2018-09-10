'Use strict';
const path = require("path");
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || "development";
const isProduction = NODE_ENV === "production";

module.exports = {};
module.exports.createClientEntry = (name = 'bundle', path = './src/entries/index') => createClientEntry(name, path);
module.exports.createServerEntry = () => createServerEntry(
	'index',
	'./src/entries/server/index'
);

function createClientEntry(name, entryPath, emitFiles = true, publicPath = '') {
	const config = createCommonEntry({
		name,
		entryPath,
		emitFiles,
		publicPath,
		outputPath: 'bld/public'
	});

	config.optimization = {splitChunks: {cacheGroups: {}}};
	Object.keys(config.entry).forEach((entryName) => {
		config.optimization.splitChunks.cacheGroups[entryName + '_eng'] = {
			name: entryName + '.eng',
			test: (m, c) => /\\eng\.json$/.test(m.resource) && c.some((c) => c.name === entryName),
			chunks: (chunk) => chunk.name === entryName,
			enforce: true,
			reuseExistingChunk: false,
		},
		config.optimization.splitChunks.cacheGroups[entryName + '_rus'] = {
			name: entryName + '.rus',
			test: (m, c) => /\\rus\.json$/.test(m.resource) && c.some((c) => c.name === entryName),
			chunks: (chunk) => chunk.name === entryName,
			enforce: true,
			reuseExistingChunk: false,
		}
	});

	config.optimization.namedChunks = true;
	config.optimization.removeEmptyChunks = false;

	return config;
}

function createServerEntry(name, entryPath) {
	var serverEntry = createCommonEntry({
		name,
		entryPath,
		emitFiles: false,
		outputPath: 'bld/server'
	});
	serverEntry.target = "node";
	/** @todo is it nesessary */
	serverEntry.node = {
		__dirname: false,
		__filename: false
	}
	serverEntry.output.libraryTarget = "commonjs2";

	serverEntry.externals = [nodeExternals()];

	return serverEntry;
}

function createCommonEntry({name, entryPath, emitFiles, publicPath = '', outputPath}) {
	const entry = {};
	entry[name] = entryPath;

	const cssLoaderOptions = {
		modules: true,
		localIdentName: '[path][name]__[local]'
	};

	const config = {
		mode: NODE_ENV,
		context: path.resolve(__dirname, '../'),
		entry: entry,
		output: {
			filename: '[name].js',
			path: path.resolve(__dirname, '../', outputPath),
			publicPath: publicPath + "/static/"
		},
		resolve: {
			extensions: [".js", ".jsx", ".ts", ".tsx"],
			modules: [
				path.resolve(__dirname, '../'),
				path.resolve(__dirname, '../src'),
				"node_modules"
			]
		},
		module: {
			rules: [
				{
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
				},
				{
					test: /\.tsx?$/,
					use: [{
						loader: 'ts-loader'
					}]
				},
				{
					test: /\.css$/,
					/** @todo add postcss */
					use: [
						emitFiles && (isProduction ? MiniCssExtractPlugin.loader : 'style-loader'),
						{
							loader: emitFiles ? 'css-loader' : 'css-loader/locals',
							options: cssLoaderOptions
						}
					].filter(Boolean)
				},
				{
					test: /\.less$/,
					/** @todo add postcss */
					use: [
						emitFiles && (isProduction ? MiniCssExtractPlugin.loader : 'style-loader'),
						{
							loader: emitFiles ? 'css-loader' : 'css-loader/locals',
							options: cssLoaderOptions
						},
						'less-loader'
					].filter(Boolean)
				},
				{
					test: /\.(svg|png|jpg)$/,
					use: [{
						loader: 'url-loader',
						options: {
							emitFile: emitFiles,
							limit: 1000,
							name: '[path][name].[ext]'
						}
					}]
				}
			]
		},
		plugins: [
			new webpack.DefinePlugin({NODE_ENV: JSON.stringify(NODE_ENV)}),
			new webpack.NamedModulesPlugin(),
			new CleanWebpackPlugin([outputPath], {root: path.resolve(__dirname, '../')}),
		],
		devtool: '#source-map',
	};

	/**
	 * @todo add styles minifier 
	 * https://webpack.js.org/plugins/mini-css-extract-plugin/#minimizing-for-production
	 */

	if (emitFiles) {
		config.plugins.push(new MiniCssExtractPlugin({
			filename: "[name].css"
		}))
	}

    return config;
}