import * as React from 'react';
import Task from '../task';
import TastList from '../taskList';
import { connect } from 'react-redux';
import { reducer, actions } from '../../app/page';
import { createDispatchToProps } from '../../modules/dispatchToProps';
import { ModelActions } from '../../modules/model';
import { bindActionCreators, Dispatch } from 'redux';

const ConnectedTask = connect(
	(state: ReturnType<typeof reducer>, props: {task: string}) => state.tasks.items[props.task] || {title: undefined, id: undefined},
	(dispatch: Dispatch, props: {task: string}) => bindActionCreators(actions.tasks.item(props.task), dispatch)
)(Task);

const ConnectedAddButton = connect(
	(_) => ({}),
	createDispatchToProps(actions)
)((props: any) => (
	<button
		type="button"
		className="btn btn-primary mr-2"
		onClick={props.createTask}
	>
		Добавить
	</button>
));

const ConnectedRemoveButton = connect(
	(_) => ({}),
	createDispatchToProps(actions.tasks)
)((props: ModelActions<typeof import('../../app/taskList')['default']> & {task: string}) => (
	<button
		type="button"
		className="btn btn-primary"
		onClick={() => props.remove(props.task)}
		disabled={!props.task}
	>
		Удалить
	</button>
));

const ConnectedTaskList = connect(
	(state: ReturnType<typeof reducer>) => state.tasks,
)(TastList);

export default class Page extends React.Component<any, {task: string}> {
	state = {
		task: ''
	}

	private _setTask = (task: string) => {
		this.setState({task});
	}

	render() {
		return (
			<>
				<div className='container'>
					<h1>Планирование спринта</h1>
					<h2>Задачи</h2>
					<div className='row my-3'>
						<div className='col'><ConnectedAddButton/><ConnectedRemoveButton task={this.state.task}/></div>
					</div>
					<div className='row my-3'>
						<div className='col col-md-6'>
							<ConnectedTaskList
								onTaskSelect={this._setTask}
								selectedTask={this.state.task}
							/>
						</div>
						<div className='col col-md-6'>
							<ConnectedTask task={this.state.task}/>
						</div>
					</div>
				</div>
			</>
		);
	}
}