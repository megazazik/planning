import { connect } from 'react-redux';
import { reducer, actions } from '../../app/page';
import { bindActionCreators, Dispatch } from 'redux';
import Task from './view';

const ConnectedTask = connect(
	(state: ReturnType<typeof reducer>, props: {task: string}) => state.tasks.items[props.task] || {title: undefined, id: undefined},
	(dispatch: Dispatch, props: {task: string}) => bindActionCreators(actions.tasks.item(props.task), dispatch)
)(Task);

export default ConnectedTask;
