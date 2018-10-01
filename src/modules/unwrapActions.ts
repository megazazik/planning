import { IAction } from 'encaps';

const ACTIONS_DELIMITER = '.';

export const unwrapAction = (action: IAction<any>): { action: IAction<any>; key: string } => {
	return {
		key: action.type.substring(0, action.type.indexOf(ACTIONS_DELIMITER)),
		action: {
			payload: action.payload,
			type: action.type.substring(action.type.indexOf(ACTIONS_DELIMITER) + 1)
		}
	};
}

export function getUnwrappedAction(...keys: string[]) {
	/** @todo добавить обработку нескольких ключей */
	return (originAction: IAction<any>) => {
		const {action, key} = unwrapAction(originAction);
		return key === keys[0] ? action : null;
	}
}