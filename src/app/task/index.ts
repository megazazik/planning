import { build, IAction } from 'encaps';

export interface ITask {
	id: string;
	title: string;
}

const model = build()
.setInitState<ITask>(() => ({
	id: '',
	title: ''
}))
.action({
	setId: (task, action: IAction<string>) => ({...task, id: action.payload}),
	setTitle: (task, action: IAction<string>) => ({...task, title: action.payload}),
});

export const { reducer, actions } = model;
export default model;