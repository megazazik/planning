import { connect } from 'react-redux';
import { reducer } from '../../app/page';
import TaskGraph from './view';

const ConnectedTaskGraph = connect(
	(state: ReturnType<typeof reducer>) => ({
		tasks: state.sprint.tasks.items,
		subTasks: state.sprint.subTasks.items,
		people: state.sprint.people.items
	})
)(TaskGraph);

export default ConnectedTaskGraph;