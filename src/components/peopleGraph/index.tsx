import { connect } from 'react-redux';
import { reducer } from '../../app/page';
import PeopleGraph from './view';

const ConnectedPeopleGraph = connect(
	(state: ReturnType<typeof reducer>) => ({
		subTasks: state.sprint.subTasks.items,
		people: state.sprint.people.items,
		tasks: state.sprint.tasks.items
	})
)(PeopleGraph);

export default ConnectedPeopleGraph;