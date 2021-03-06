import { createDispatchToProps } from '../../modules/dispatchToProps';
import { connect } from 'react-redux';
import { reducer, actions } from '../../app/page';
import People from './view';

const ConnectedPeople = connect(
	(state: ReturnType<typeof reducer>) => state.people,
	createDispatchToProps(actions.people)
)(People);

export default ConnectedPeople;