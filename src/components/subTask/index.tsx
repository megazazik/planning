import { connect } from 'react-redux';
import { reducer, actions } from '../../app/page';
import SubTask from './view';
import { bindActionCreators, Dispatch } from 'redux';

const ConnectedSubTask = connect(
	(state: ReturnType<typeof reducer>, props: {subTask: string}) => ({
		...state.subTasks.items[props.subTask] || {title: undefined, id: undefined, taskId: undefined},
		people: state.people
	}),
	(dispatch: Dispatch, props: {subTask: string}) => bindActionCreators(actions.subTasks.item(props.subTask), dispatch)
)(SubTask);

export default ConnectedSubTask;