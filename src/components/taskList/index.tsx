import { connect } from 'react-redux';
import { reducer, actions } from '../../app/page';
import { createDispatchToProps } from '../../modules/dispatchToProps';
import TaskList from './view';

const ConnectedTaskList = connect(
	(state: ReturnType<typeof reducer>) => state.tasks,
	createDispatchToProps(actions.tasks)
)(TaskList);

export default ConnectedTaskList;
