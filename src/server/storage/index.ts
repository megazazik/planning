import { reducer } from '../../app/page';
import { resolve, parse } from 'path';
import * as fs from 'fs';

const PLANNINGS_PATH = '../../.plannings/';
const FILE_EXTENTION = '.json';

export async function save(key: string, data: ReturnType<typeof reducer>) {
	return new Promise((resolse, reject) => {
		/** @todo небезопасно, сделать проверку перед сохранением */
		if (~key.indexOf('.') || ~key.indexOf('/') || ~key.indexOf('\\')) {
			reject('Unacceptable symbols in key.');
			return;
		}

		fs.writeFile(
			resolve(__dirname, PLANNINGS_PATH, key + FILE_EXTENTION),
			JSON.stringify(data),
			(err) => {
				if (err) {
					reject(err.message);
					return;
				}

				resolse();
			}
		);
	});
}

export async function get(key: string) {
	return new Promise((resolse, reject) => {
		/** @todo небезопасно, сделать проверку перед сохранением */
		if (~key.indexOf('.') || ~key.indexOf('/') || ~key.indexOf('\\')) {
			reject('Unacceptable symbols in key.');
			return;
		}
		
		fs.readFile(
			resolve(__dirname, PLANNINGS_PATH, key + FILE_EXTENTION),
			{encoding: 'utf8'},
			(err, data) => {
				if (err) {
					reject(err.message);
					return;
				}

				resolse(JSON.parse(data));
			}
		);
	});
}

export async function getAll() {
	return new Promise<string[]>((resolse, reject) => {
		fs.readdir(resolve(__dirname, PLANNINGS_PATH), (err, files) => {
			if (err) {
				reject(err.message);
				return;
			}

			resolse(files.map((fileName) => parse(fileName).name));
		});
	});
}


export async function deleteSpring(key: string) {
	return new Promise((resolse, reject) => {
		/** @todo небезопасно, сделать проверку перед сохранением */
		if (~key.indexOf('.') || ~key.indexOf('/') || ~key.indexOf('\\')) {
			reject('Unacceptable symbols in key.');
			return;
		}

		fs.unlink(
			resolve(__dirname, PLANNINGS_PATH, key + FILE_EXTENTION),
			(err) => {
				if (err) {
					reject(err.message);
					return;
				}

				resolse();
			}
		);
	});
}