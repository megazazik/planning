import { connect } from 'react-redux';
import { reducer, actions } from '../../app/page';
import { createDispatchToProps } from '../../modules/dispatchToProps';
import PlanningsView from './view';

const ConnectePlannings = connect(
	(state: ReturnType<typeof reducer>) => state.sprints,
	createDispatchToProps(actions.sprints)
)(PlanningsView);

export default ConnectePlannings;