import { build } from 'encaps';
import tasks from '../taskList';
import subTasksLists from '../subTaskList';
import people from '../people';

export const model = build()
	.child('tasks', tasks)
	.child('subTasks', subTasksLists)
	.child('people', people)
	.subActions({
		tasks: {
			remove: (payload, actions) => actions.subTasks.removeByTask(payload)
		},
		people: {
			remove: (payload, actions) => actions.subTasks.cleanPerson(payload)
		}
	});

export default model;