import { build, IAction } from 'encaps';
import tasks from '../taskList';
import subTasksLists from '../taskSubTasksList';

export const { reducer, actions } = build()
	.child('tasks', tasks)
	.child('subTasks', subTasksLists)
	.action({
		createTask: (state, action: IAction<string>) => {
			const newKey = Object.keys(state.tasks.items).map(Number).sort((a, b) => b - a)[0] + 1;
			return {
				...state,
				tasks: tasks.reducer(
					state.tasks, 
					tasks.actions.add(isNaN(newKey) ? '0' : newKey + '')
				),
				subTasks: subTasksLists.reducer(
					state.subTasks, 
					subTasksLists.actions.add(isNaN(newKey) ? '0' : newKey + '')
				),
			}
		},
	})
	.subActions({
		tasks: {
			remove: (payload, actions) => actions.subTasks.remove(payload)
		}
	});
