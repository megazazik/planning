import { connect } from 'react-redux';
import { reducer } from '../../app/page';
import TaskGraph from './view';

const ConnectedTaskGraph = connect(
	(state: ReturnType<typeof reducer>) => ({
		tasks: state.tasks.items,
		subTasks: state.subTasks.items,
		people: state.people.items
	})
)(TaskGraph);

export default ConnectedTaskGraph;