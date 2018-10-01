import { connect } from 'react-redux';
import { reducer, actions } from '../../app/page';
import { createDispatchToProps } from '../../modules/dispatchToProps';
import TaskList from './view';

const ConnectedTaskList = connect(
	(state: ReturnType<typeof reducer>) => state.sprint.tasks,
	createDispatchToProps(actions.sprint.tasks)
)(TaskList);

export default ConnectedTaskList;
