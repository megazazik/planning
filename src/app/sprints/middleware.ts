import { ISprints, SET_CURRENT, REMOVE, LOADED } from './';
import { Store, Dispatch } from 'redux';
import { IAction } from 'encaps';
import { actions } from '../page';

/** @todo передавать через параметры */
import { PLANNING_API_PATH } from '../../server/routes';

export default function sprintsMiddleware<S>(
	getSprints: (store: S) => ISprints,
	getSprintsAction: (action: IAction<any>) => IAction<any>
) {
	return (store: Store<S>) => (next: Dispatch) => (action: IAction<any>) => {
		const sprintsAction = getSprintsAction(action);
		
		if (!sprintsAction) {
			return next(action);
		}

		switch (sprintsAction.type) {
			// при изменении текущего спринта начать загрузку с сервера
			case SET_CURRENT:
				fetch(PLANNING_API_PATH + '?key=' + sprintsAction.payload).then((resp) => {
					if (resp.status === 200) {
						// если пришел, то установить store
						resp.json().then((data) => {
							if (getSprints(store.getState()).current === action.payload) {
								store.dispatch(actions.replace(data));
								store.dispatch(actions.sprints[LOADED](false));
							}
						});
					} else {
						// если нет, создать пустой
						store.dispatch(actions.replace(null));
						store.dispatch(actions.sprints[LOADED](false));
					}
				});
				store.dispatch(actions.sprints[LOADED](true));
				break;
			// при удалении спринта, послать запрос на удаление
			case REMOVE:
				fetch(
					PLANNING_API_PATH + '?key=' + sprintsAction.payload,
					{method: "DELETE"}
				).then((resp) => {
					store.dispatch(actions.replace(null));
					store.dispatch(actions.sprints.add());
					if (resp.status === 200) {
						// если пришел, то установить store
						resp.json().then((data) => {
							store.dispatch(actions.replace(data));
						});
					} else {
						// если нет, создать пустой
						store.dispatch(actions.replace(null));
					}
				});
				break;	
		}
		
		return next(action);
	}
}