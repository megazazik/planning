import sprintModel from '../sprint';
import { ISprints } from './';
import { ModelState} from '../../modules/model';
import { Store } from 'redux';

/** @todo передавать через параметры */
import { PLANNING_API_PATH } from '../../server/routes';

interface IParams<S> {
	getSprint: (store: S) => ModelState<typeof sprintModel>,
	getSprints: (store: S) => ISprints,
}

export default function initStoring<S>({ getSprint, getSprints }: IParams<S>) {
	return (store: Store<S>) => {
		let oldSprint = getSprint(store.getState());
		store.subscribe(throttle(5000,
			() => {
				const sprint = getSprint(store.getState());
				const currentSprint = getSprints(store.getState()).current;
				if (!!currentSprint && oldSprint !== sprint) {
					// отправить на сервер
					fetch(
						PLANNING_API_PATH,
						{
							method: "POST",
							body: JSON.stringify({
								key: currentSprint,
								data: sprint,
							}),
							headers: {
								'Accept': 'application/json',
								'Content-Type': 'application/json'
							},
						}
					);
				}
			}
		));
	}
}

function throttle(delay: number, callback: () => void) {
	let timer;
	return () => {
		if (!timer) {
			timer = setTimeout(
				() => {
					callback();
					timer = null;
				},
				delay
			);
		}
	}
}