import { createMap, IAction } from 'encaps';
import task from '../task';

const tasksModelBase = createMap(task);
const tasksModel = tasksModelBase
	.action({
		create: (tasks) => {
			const newKey = Object.keys(tasks.items).map(Number).sort((a, b) => b - a)[0] + 1;
			return tasksModelBase.reducer(
				tasks,
				tasksModelBase.actions.add(isNaN(newKey) ? '0' : newKey + '')
			);;
		},
	});

export default tasksModel;