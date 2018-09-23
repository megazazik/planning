import { reducer } from '../../app/page';
import { resolve } from 'path';
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

		fs.open(resolve(__dirname, PLANNINGS_PATH, key + FILE_EXTENTION), 'w', (err, fd) => {
			if (err) {
				reject(err.message);
				return;
			}

			fs.write(fd, JSON.stringify(data), (err) => {
				if (err) {
					reject(err.message);
					return;
				}

				fs.close(fd, (err) => {
					if (err) {
						reject(err.message);
						return;
					}

					resolse();
				})
			})
		});
	});
}

export async function get(key: string) {
	return new Promise((resolse, reject) => {
		/** @todo небезопасно, сделать проверку перед сохранением */
		if (~key.indexOf('.') || ~key.indexOf('/') || ~key.indexOf('\\')) {
			reject('Unacceptable symbols in key.');
			return;
		}

		fs.open(resolve(__dirname, PLANNINGS_PATH, key + FILE_EXTENTION), 'r', (err, fd) => {
			if (err) {
				reject(err.message);
				return;
			}
		
			fs.readFile(fd, {encoding: 'utf8'}, (err, data) => {
				if (err) {
					reject(err.message);
					return;
				}

				resolse(JSON.parse(data));
			});
		});
	});
}