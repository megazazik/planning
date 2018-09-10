import pargeArgs from 'minimist';
import express from 'express';
import * as path from 'path';
import webpack from 'webpack';
import webpackConfig from '../../../config/webpack.dev.config';
import proxy from 'express-http-proxy';

const {
	port = 8080
} = pargeArgs(process.argv.slice(2));

const app = express();

const compiler = webpack(webpackConfig);

app.use(require("webpack-dev-middleware")(
	compiler,
	{
		noInfo: true,
		publicPath: webpackConfig.output.publicPath
	}
));

app.use(require("webpack-hot-middleware")(compiler));

app.use('*', proxy('localhost:8000'));

app.listen(port, () => {
	console.log(`Dev Server started on port ${port}.`);
});