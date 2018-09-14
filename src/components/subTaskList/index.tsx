import { connect } from 'react-redux';
import { reducer, actions } from '../../app/page';
import { createDispatchToProps } from '../../modules/dispatchToProps';
import SubTaskList from './view';

const ConnecteSubTastList = connect(
	(state: ReturnType<typeof reducer>, props: {taskId: string}) => ({
		...state.subTasks,
		items: Object.keys(state.subTasks.items).reduce(
			(newTasks, subTaskId) => state.subTasks.items[subTaskId].taskId !== props.taskId
				? newTasks
				: {
					...newTasks,
					[subTaskId]: state.subTasks.items[subTaskId],
				},
			{}
		),
		people: state.people
	}),
	createDispatchToProps(actions.subTasks)
)(SubTaskList);

export default ConnecteSubTastList;