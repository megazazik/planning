import { ISubTask } from '../subTask';

export function filter(
	subTasks: {[id: string]: ISubTask},
	checkFunction: (subTask: ISubTask) => boolean
) {
	return Object.keys(subTasks).reduce(
		(newTasks, subTaskId) => !checkFunction(subTasks[subTaskId])
			? newTasks
			: {
				...newTasks,
				[subTaskId]: subTasks[subTaskId],
			},
		{}
	)
}