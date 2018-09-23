import express from 'express';
import getHtml from './getMarkUp';
import morgan from 'morgan';
import * as path from 'path';
import * as storage from './storage';

export interface IParams {
	port?: number;
	app?: ReturnType<typeof express>;
}

export default function startServer({app = express(), port = 8080}: IParams = {}) {
	/** @todo разобраться с относительными путями, если нужно */
	app.use('/static', express.static(path.resolve(__dirname, '../public/')));

	app.use(morgan('tiny'));

	app.post('/plannings', (req, res) => {
		res.setHeader("Content-Type", "application/json; charset=utf-8");
		const params = {...req.query, ...req.body};
		if (!params.key || !params.data) {
			res.status(422);
			res.send(JSON.stringify({status: 'no_params'}));
			return;
		}

		storage.save(params.key, params.data)
			.then(() => {res.send(JSON.stringify({status: 'ok'}))})
			.catch((message) => {
				res.status(500);
				res.send(JSON.stringify({status: 'error', message}));
			});
	});

	app.get('/plannings', (req, res) => {
		res.setHeader("Content-Type", "application/json; charset=utf-8");
		if (!req.query.key) {
			res.status(422);
			res.send(JSON.stringify({status: 'no_params'}));
			return;
		}

		storage.get(req.query.key)
			.then((data) => {res.send(JSON.stringify(data))})
			.catch((message) => {
				res.status(500);
				res.send(JSON.stringify({status: 'error', message}));
			});
	});

	app.get('/', (req, res) => {
		res.setHeader("Content-Type", "text/html; charset=utf-8");
		res.send(getHtml({}));
	});

	app.use(function(req, res) {
		res.status(404).send('Page not found!');
		console.log('Url not found: ' + req.url);
	});

	app.use(function(err, req, res, next) {
		console.log(err.stack);
		res.status(500).send('Something broke!');
	});

	app.listen(port, () => {
		console.log(`The application started on port ${port}.`);
	});
}