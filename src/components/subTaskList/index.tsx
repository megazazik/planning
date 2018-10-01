import { connect } from 'react-redux';
import { reducer, actions } from '../../app/page';
import { createDispatchToProps } from '../../modules/dispatchToProps';
import SubTaskList from './view';

const ConnecteSubTastList = connect(
	(state: ReturnType<typeof reducer>, props: {taskId: string}) => ({
		...state.sprint.subTasks,
		items: Object.keys(state.sprint.subTasks.items).reduce(
			(newTasks, subTaskId) => state.sprint.subTasks.items[subTaskId].taskId !== props.taskId
				? newTasks
				: {
					...newTasks,
					[subTaskId]: state.sprint.subTasks.items[subTaskId],
				},
			{}
		),
		people: state.sprint.people
	}),
	createDispatchToProps(actions.sprint.subTasks)
)(SubTaskList);

export default ConnecteSubTastList;