import { createMap, IAction } from 'encaps';
import subTask from '../subTask';

const subTasksBase = createMap(subTask);
const subTasks = subTasksBase
	.action({
		create: (subTasks, action: IAction<string>) => {
			const newKeyNumber = Object.keys(subTasks.items).map(Number).sort((a, b) => b - a)[0] + 1;
			const newKey = isNaN(newKeyNumber) ? '0' : newKeyNumber + ''
			const newSubTasks = subTasksBase.reducer(
				subTasks,
				subTasksBase.actions.add(newKey)
			);
			newSubTasks.items[newKey].taskId = action.payload;
			return newSubTasks;
		},
		removeByTask(subTasks, action: IAction<string>) {
			return {
				...subTasks,
				items: Object.keys(subTasks.items).reduce(
					(newTasks, subTaskId) => subTasks.items[subTaskId].taskId === action.payload
						? newTasks
						: {
							...newTasks,
							[subTaskId]: subTasks.items[subTaskId],
						},
					{}
				)
			};
		}
	});

export default subTasks;
