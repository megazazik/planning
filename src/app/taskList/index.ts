import { createMap } from 'encaps';
import task from '../task';
import { ModelState } from '../../modules/model';

const CREATE_TASK = 'create';

const tasksBase = createMap(task);
// const tasks = {
// 	actions: {
// 		...tasksBase.actions,
// 		create() { return {type: CREATE_TASK} }
// 	},
// 	reducer(state: ModelState<typeof tasksBase>, action = {type: ''}) {
// 		switch (action.type) {
// 			case CREATE_TASK:
// 				const newKey = Object.keys(state.items).map(Number).sort((a, b) => b - a)[0] + 1;
// 				return tasksBase.reducer(
// 					state, 
// 					tasksBase.actions.add(isNaN(newKey) ? '0' : newKey + '')
// 				)
// 			default:
// 				return tasksBase.reducer(state, action);
// 		}
// 	}
// }

export default tasksBase;