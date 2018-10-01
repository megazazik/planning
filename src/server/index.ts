import express from 'express';
import getHtml from './getMarkUp';
import morgan from 'morgan';
import * as path from 'path';
import * as storage from './storage';
import { PLANNING_API_PATH } from './routes';
import { reducer } from '../app/page';
import { json, urlencoded } from 'body-parser';

export interface IParams {
	port?: number;
	app?: ReturnType<typeof express>;
}

export default function startServer({app = express(), port = 8080}: IParams = {}) {
	/** @todo разобраться с относительными путями, если нужно */
	app.use('/static', express.static(path.resolve(__dirname, '../public/')));

	app.use(morgan('tiny'));

	app.use(urlencoded({extended: false}));
	app.use(json());

	app.post(PLANNING_API_PATH, (req, res) => {
		res.setHeader("Content-Type", "application/json; charset=utf-8");
		if (!req.body.key || !req.body.data) {
			res.status(422);
			res.send(JSON.stringify({status: 'no_params'}));
			return;
		}

		storage.save(req.body.key, req.body.data)
			.then(() => {res.send(JSON.stringify({status: 'ok'}))})
			.catch((message) => {
				res.status(500);
				res.send(JSON.stringify({status: 'error', message}));
			});
	});

	app.get(PLANNING_API_PATH, (req, res) => {
		res.setHeader("Content-Type", "application/json; charset=utf-8");
		if (!req.query.key) {
			storage.getAll()
				.then((data) => {res.send(JSON.stringify(data))})
				.catch((message) => {
					res.status(500);
					res.send(JSON.stringify({status: 'error', message}));
				});
			return;
		}

		storage.get(req.query.key)
			.then((data) => {res.send(JSON.stringify(data))})
			.catch((message) => {
				res.status(500);
				res.send(JSON.stringify({status: 'error', message}));
			});
	});
	
	app.delete(PLANNING_API_PATH, (req, res) => {
		res.setHeader("Content-Type", "application/json; charset=utf-8");
		if (!req.query.key) {
			res.status(422);
			res.send(JSON.stringify({status: 'no_params'}));
			return;
		}

		storage.deleteSpring(req.query.key)
			.then(() => {res.send(JSON.stringify({status: 'ok'}))})
			.catch((message) => {
				res.status(500);
				res.send(JSON.stringify({status: 'error', message}));
			});
	});

	app.get('/', (_, res) => {
		res.setHeader("Content-Type", "text/html; charset=utf-8");
		storage.getAll()
			.then((data) => {
				const initState = reducer();
				initState.sprints = {
					items: data,
					current: null,
					loading: false,
				}
				res.send(getHtml(initState));
			})
			.catch(() => {
				res.send(getHtml({}));
			});
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