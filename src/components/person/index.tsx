import { connect } from 'react-redux';
import { reducer, actions } from '../../app/page';
import Person from './view';
import { bindActionCreators, Dispatch } from 'redux';

const ConnectedPerson = connect(
	(state: ReturnType<typeof reducer>, props: {person: string}) => ({
		...state.people.items[props.person] || {name: undefined},
		enabled: !!state.people.items[props.person]
	}),
	(dispatch: Dispatch, props: {person: string}) => bindActionCreators(actions.people.item(props.person), dispatch)
)(Person);

export default ConnectedPerson;