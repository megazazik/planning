import * as React from 'react';
import Task from '../task';
import TastList from '../taskList';
import SubTastList from '../subTaskList';
import SubTask from '../subTask';
import People from '../people';
import Person from '../person';
import TaskGraph from '../taskGraph';
import PeopleGraph from '../peopleGraph';
import { connect } from 'react-redux';
import { reducer, actions } from '../../app/page';
import { createDispatchToProps } from '../../modules/dispatchToProps';
import { bindActionCreators, Dispatch } from 'redux';
import { ModelState } from '../../modules/model';

const ConnectedTask = connect(
	(state: ReturnType<typeof reducer>, props: {task: string}) => state.tasks.items[props.task] || {title: undefined, id: undefined},
	(dispatch: Dispatch, props: {task: string}) => bindActionCreators(actions.tasks.item(props.task), dispatch)
)(Task);

const ConnectedTaskList = connect(
	(state: ReturnType<typeof reducer>) => state.tasks,
	createDispatchToProps(actions.tasks)
)(TastList);

const ConnecteSubTastList = connect(
	(state: ReturnType<typeof reducer>, props: {taskId: string}) => ({
		...state.subTasks,
		items: Object.keys(state.subTasks.items).reduce(
			(newTasks, subTaskId) => state.subTasks.items[subTaskId].taskId !== props.taskId
				? newTasks
				: {
					...newTasks,
					[subTaskId]: state.subTasks.items[subTaskId],
				},
			{}
		),
		people: state.people
	}),
	createDispatchToProps(actions.subTasks)
)(SubTastList);

const ConnectedSubTask = connect(
	(state: ReturnType<typeof reducer>, props: {subTask: string}) => ({
		...state.subTasks.items[props.subTask] || {title: undefined, id: undefined, taskId: undefined},
		people: state.people
	}),
	(dispatch: Dispatch, props: {subTask: string}) => bindActionCreators(actions.subTasks.item(props.subTask), dispatch)
)(SubTask);

const ConnectedTaskGraph = connect(
	(state: ReturnType<typeof reducer>) => ({
		tasks: state.tasks.items,
		subTasks: state.subTasks.items,
		people: state.people.items
	})
)(TaskGraph);

const ConnectedPerson = connect(
	(state: ReturnType<typeof reducer>, props: {person: string}) => ({
		...state.people.items[props.person] || {name: undefined},
		enabled: !!state.people.items[props.person]
	}),
	(dispatch: Dispatch, props: {person: string}) => bindActionCreators(actions.people.item(props.person), dispatch)
)(Person);

const ConnectedPeople = connect(
	(state: ReturnType<typeof reducer>) => state.people,
	createDispatchToProps(actions.people)
)(People);

const ConnectedPeopleGraph = connect(
	(state: ReturnType<typeof reducer>) => ({
		subTasks: state.subTasks.items,
		people: state.people.items
	})
)(PeopleGraph);

interface IProps {
	subTasks: ModelState<typeof import('../../app/subTaskList')['default']>;
}

interface IState {
	task: string;
	subTask: string;
	person: string;
}

class Page extends React.Component<IProps, IState> {
	state = {
		task: '',
		subTask: '',
		person: '',
	}

	private _setTask = (task: string) => {
		this.setState((state) => {
			if (state.subTask && this.props.subTasks.items[state.subTask].taskId !== task) {
				return {task, subTask: ''};
			} else {
				return {task, subTask: state.subTask};
			}
		});
	}

	private _setSubTask = (subTask: string) => {
		if (subTask) {
			this.setState({subTask, task: this.props.subTasks.items[subTask].taskId});
		} else {
			this.setState({subTask});
		}
	}

	private _setPerson = (person: string) => this.setState({person});

	render() {
		return (
			<>
				<div className='container'>
					<h1>Планирование спринта</h1>
					<h2>Задачи</h2>
					<div className='row my-3'>
						<div className='col col-md-6'>
							<ConnectedTaskList
								onTaskSelect={this._setTask}
								selectedTask={this.state.task}
							/>
						</div>
						<div className='col col-md-6'>
							<ConnectedTask task={this.state.task}/>
							<ConnecteSubTastList
								onSubTaskSelect={this._setSubTask}
								selectedSubTaskId={this.state.subTask}
								taskId={this.state.task}
							/>
							<ConnectedSubTask subTask={this.state.subTask}/>
						</div>
					</div>
					<ConnectedTaskGraph
						onSelectTask={this._setTask}
						onSelectSubTask={this._setSubTask}
					/>
					<ConnectedPeopleGraph
						onSelectPerson={this._setPerson}
						onSelectSubTask={this._setSubTask}
					/>
					<h2>Люди</h2>
					<ConnectedPeople
						onPeopleSelect={this._setPerson}
						selectedPerson={this.state.person}
					/>
					<ConnectedPerson person={this.state.person} />
				</div>
			</>
		);
	}
}

export default connect(
	(state: ReturnType<typeof reducer>) => ({subTasks: state.subTasks})
)(Page)