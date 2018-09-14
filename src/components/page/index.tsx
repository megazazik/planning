import * as React from 'react';
import Task from '../task';
import TaskList from '../taskList';
import SubTastList from '../subTaskList';
import SubTask from '../subTask';
import HiddenSubTask from '../hiddenSubTask';
import People from '../people';
import Person from '../person';
import TaskGraph from '../taskGraph';
import PeopleGraph from '../peopleGraph';
import { connect } from 'react-redux';
import { reducer } from '../../app/page';
import { ModelState } from '../../modules/model';

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
				<div className='container-fluid'>
					<h1>Планирование спринта</h1>
					<h2>Задачи</h2>
					<div className='row my-3'>
						<div className='col col-md-6'>
							<TaskList
								onTaskSelect={this._setTask}
								selectedTask={this.state.task}
							/>
						</div>
						<div className='col col-md-6'>
							<Task task={this.state.task}/>
							<SubTastList
								onSubTaskSelect={this._setSubTask}
								selectedSubTaskId={this.state.subTask}
								taskId={this.state.task}
							/>
							<SubTask subTask={this.state.subTask}/>
						</div>
					</div>
					<TaskGraph
						onSelectTask={this._setTask}
						onSelectSubTask={this._setSubTask}
						selectedSubTask={this.state.subTask}
					/>
					<PeopleGraph
						onSelectPerson={this._setPerson}
						onSelectSubTask={this._setSubTask}
						selectedSubTask={this.state.subTask}
					/>
					<h2>Люди</h2>
					<People
						onPeopleSelect={this._setPerson}
						selectedPerson={this.state.person}
					/>
					<Person person={this.state.person} />
					<HiddenSubTask subTask={this.state.subTask}/>
				</div>
			</>
		);
	}
}

export default connect(
	(state: ReturnType<typeof reducer>) => ({subTasks: state.subTasks})
)(Page)