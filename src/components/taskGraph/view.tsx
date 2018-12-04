import * as React from 'react';
import { ModelState } from '../../modules/model';
import Item from './item';
import { filter } from '../../app/subTaskList/filter';
import styles from './styles.less';
import cached from 'react-cached-callback';

export type Props = {
	subTasks: {[id: string]: ModelState<typeof import('../../app/subTask')['default']>};
	tasks: {[id: string]: ModelState<typeof import('../../app/task')['default']>};
	onSelectTask?: (taskId: string) => void;
	onSelectSubTask?: (subTaskId: string) => void;
	selectedSubTask?: string;
	people: {[id: string]: ModelState<typeof import('../../app/person')['default']>};
}

export default class TaskGraph extends React.Component<Props> {
	static defaultProps: Partial<Props> = {
		onSelectTask() {},
		onSelectSubTask() {}
	}

	@cached
	private _onSelectTask(taskId: string) {
		return () => this.props.onSelectTask(taskId);
	}

	private _getTasks() {
		/** @todo оптимизировать получение подзадач */
		return Object.entries(this.props.tasks)
			.sort(([task1Id], [task2Id]) => {
				const task1Interval = this._getSubTaskStartEnd(task1Id);
				const task2Interval = this._getSubTaskStartEnd(task2Id);

				if (task1Interval.start === task2Interval.start) {
					return task1Interval.end - task2Interval.end;
				} else {
					return task1Interval.start - task2Interval.start;
				}
			});
	}

	private _getSubTaskStartEnd(taskId: string) {
		return Object.values(this._getSubtasksByTaskId(taskId)).reduce(
			(prevValues, subTask) => ({
				start: subTask.start < prevValues.start ? subTask.start : prevValues.start, 
				end: subTask.start + subTask.duration > prevValues.end ? subTask.start + subTask.duration : prevValues.end,
			}),
			{start: Infinity, end: 0},
		)
	}

	private _getSubtasksByTaskId(taskId: string) {
		return filter(this.props.subTasks, (subTask) => subTask.taskId === taskId)
	}

	render () {
		return (
			<>
				<div className="row align-items-center h4 mb-4">
					{Array.apply(null, {length: 12}).map(Number.call, Number).map((index) => (
						<div key={`headCol${index}`} className={`col-1 ${styles.head}`}>{index + 1}</div>
					))}
				</div>
				{this._getTasks().map(([taskId, task]) => (
					<Item
						key={`taskGraph_${taskId}`}
						task={task}
						subTasks={this._getSubtasksByTaskId(taskId)}
						onSelectSubTask={this.props.onSelectSubTask}
						onSelectTask={this._onSelectTask(taskId)}
						selectedSubTask={this.props.selectedSubTask}
						people={this.props.people}
					/>
				))}
			</>
		);
	}
}