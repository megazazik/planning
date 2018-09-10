import { bindActionCreators, Dispatch, ActionCreatorsMapObject } from 'redux';

export function createDispatchToProps<T extends ActionCreatorsMapObject>(actions: T) {
	return (dispatch: Dispatch) => bindActionCreators(actions, dispatch);
}