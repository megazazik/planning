import { createStore, applyMiddleware, compose } from 'redux'
import { reducer, SPRINTS_KEY } from './page';
import sprintsMiddleWare from './sprints/middleware';
import initStoring from './sprints/storing';
import { getUnwrappedAction } from '../modules/unwrapActions';

declare const window: Window & {
	__REDUX_DEVTOOLS_EXTENSION__: any,
	__INITIAL_STATE__: any,
	__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any,
};

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
	? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
	: compose;

/** @todo убрать зависимости от клиентского кода, этот код должен также работать на сервер */
const store = createStore(
	reducer,
	{
		...reducer(),
		...window.__INITIAL_STATE__
	},
	composeEnhancers(
		applyMiddleware(
			sprintsMiddleWare(
				(state: ReturnType<typeof reducer>) => state .sprints,
				getUnwrappedAction(SPRINTS_KEY)
			)
		)
	)
);

initStoring({
	getSprint: (state: ReturnType<typeof reducer>) => state .sprint,
	getSprints: (state: ReturnType<typeof reducer>) => state .sprints,
})(store);

export default store;