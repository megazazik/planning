import { createStore } from 'redux'
import { reducer } from './page';
import persistStore from 'redux-localstorage';

declare const window: Window & {__REDUX_DEVTOOLS_EXTENSION__: any};

const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	persistStore(void 0, {key: 'sprintPlanning'})
);

export default store;