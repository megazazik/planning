import { connect } from 'react-redux';
import { reducer } from '../../app/page';
import PeopleGraph from './view';

const ConnectedPeopleGraph = connect(
	(state: ReturnType<typeof reducer>) => ({
		subTasks: state.subTasks.items,
		people: state.people.items,
		tasks: state.tasks.items
	})
)(PeopleGraph);

export default ConnectedPeopleGraph;