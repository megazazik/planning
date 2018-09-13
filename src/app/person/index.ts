import { build, IAction } from 'encaps';

export interface IPerson {
	name: string;
}

const model = build()
	.setInitState<IPerson>(() => ({
		name: '',
	}))
	.action({
		setName: (person, action: IAction<string>) => ({...person, name: action.payload}),
	});

export const { reducer, actions } = model;
export default model;