const getBaseConfig = require('../webpack.config');
const pargeArgs = require('minimist');
const webpack = require('webpack');
const params = pargeArgs(process.argv.slice(2));

module.exports = (...args) => {
	const baseConfig = getBaseConfig(...args);

	if (params._[0]) {
		baseConfig.plugins.push(new webpack.NormalModuleReplacementPlugin(
			/\/stub\.stories/,
			params._[0]
		));
	}

	return baseConfig;
}