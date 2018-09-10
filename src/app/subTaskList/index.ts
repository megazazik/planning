import { createMap, IAction } from 'encaps';
import subTask from '../subTask';

const subTasksBase = createMap(subTask);
const subTasks = subTasksBase
	.action({
		create: (subTasks) => {
			const newKey = Object.keys(subTasks.items).map(Number).sort((a, b) => b - a)[0] + 1;
			return subTasksBase.reducer(
				subTasks,
				subTasksBase.actions.add(isNaN(newKey) ? '0' : newKey + '')
			)
		},
	});

export default subTasks;
