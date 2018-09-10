import { build, IAction } from 'encaps';
import tasks from '../taskList';
import subTasksLists from '../subTaskList';

export const { reducer, actions } = build()
	.child('tasks', tasks)
	.child('subTasks', subTasksLists)
	.subActions({
		tasks: {
			remove: (payload, actions) => actions.subTasks.removeByTask(payload)
		}
	});
