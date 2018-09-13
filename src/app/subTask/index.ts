import { build, IAction } from 'encaps';

export interface ISubTask {
	id: string;
	title: string;
	start?: number;
	duration?: number;
	taskId: string;
	personId?: string;
}

const model = build()
	.setInitState<ISubTask>(() => ({
		id: '',
		title: '',
		taskId: null,
	}))
	.action({
		setId: (task, action: IAction<string>) => ({...task, id: action.payload}),
		setTitle: (task, action: IAction<string>) => ({...task, title: action.payload}),
		setStart: (task, action: IAction<number>) => ({
			...task, 
			start: action.payload,
		}),
		setDuration: (task, action: IAction<number>) => ({
			...task,
			duration: action.payload,
		}),
		setPerson: (task, action: IAction<string>) => ({
			...task,
			personId: action.payload,
		}),
	});

export const { reducer, actions } = model;
export default model;