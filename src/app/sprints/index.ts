import { build, IAction } from 'encaps';

export interface ISprints {
	items: string[];
	current: string;
	loading: boolean;
}

export const SET_CURRENT = 'setCurrent',
	LOADED = 'loaded',
	ADD = 'add',
	REMOVE = 'remove';

const model = build()
	.setInitState<ISprints>(() => ({
		items: [],
		current: null,
		loading: false,
	}))
	.action({
		[ADD]: (state, action: IAction<string>) => ({
			...state,
			items: [...state.items, action.payload]
		}),
		[REMOVE]: (state, action: IAction<string>) => ({
			...state,
			items: state.items.filter((planning) => (planning !== action.payload)),
			current: null,
		}),
		[SET_CURRENT]: (state, action: IAction<string>) => ({
			...state,
			current: action.payload || null,
		}),
		[LOADED]: (state, action: IAction<boolean>) => ({...state, loading: action.payload}),
	});

export default model;