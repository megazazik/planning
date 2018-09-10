import { build, IAction } from 'encaps';

export interface ISubTask {
	id: string;
	title: string;
	start?: number;
	end?: number;
	taskId: string;
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
			end: Math.max(action.payload, task.end),
		}),
		setEnd: (task, action: IAction<number>) => ({
			...task,
			end: action.payload,
			start: Math.min(action.payload, task.start)
		}),
	});

export const { reducer, actions } = model;
export default model;