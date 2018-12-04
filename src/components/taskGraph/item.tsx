import * as React from 'react';
import { ModelState } from '../../modules/model';
import { ISubTask } from '../../app/subTask';
import styles from './styles.less';
import cached from 'react-cached-callback';
import cn from 'classnames';

export type Props = {
	subTasks: {[id: string]: ModelState<typeof import('../../app/subTask')['default']>};
	task: ModelState<typeof import('../../app/task')['default']>;
	onSelectTask?: () => void;
	onSelectSubTask?: (subTaskId: string) => void;
	selectedSubTask?: string;
	people: {[id: string]: ModelState<typeof import('../../app/person')['default']>};
}

export default class TaskGraphItem extends React.PureComponent<Props> {
	static defaultProps = {
		onSelectTask() {},
		onSelectSubTask() {}
	}

	private _getLines() {
		const lines: ISubTask[][] = [[]];
		Object.keys(this.props.subTasks).forEach((subTaskId) => {
			const subTask = this.props.subTasks[subTaskId];
			if (!subTask.start || !subTask.duration) {
				return;
			}

			let subTaskLine = lines.find((line) => line.every((st) => subTask.start >= (st.start + st.duration) || (subTask.start + subTask.duration) <= st.start));
			if (!subTaskLine) {
				subTaskLine = [];
				lines.push(subTaskLine);
			}
			subTaskLine.push(subTask);
		});

		lines.forEach((line) => line.sort((st1, st2) => st1.start - st2.start));

		return lines;
	}

	private _getSubTaskId(subTask: ISubTask) {
		return Object.keys(this.props.subTasks).find((subTaskId) => this.props.subTasks[subTaskId] === subTask);
	}

	@cached
	private _onSelectSubTask(subTaskId: string) {
		return () => this.props.onSelectSubTask(subTaskId);
	}

	render() {
		if (!this.props.task) {	
			return null;
		}

		return (
			<>
				<div className='row'>
					<div className='col-12'>
						<h5>{this.props.task.id} - {this.props.task.title}</h5>
					</div>
				</div>
				<div
					className={`row align-items-center mb-3 ${styles.task}`}
					onClick={this.props.onSelectTask}
				>
					<div className="col-md-12">
						{this._getLines().map((line, index) => {
							let prevEnd = 0;
							return (
								<div className="row mb-1" key={`line_${index}`}>
									{line.map((subTask) => {
										const offset = subTask.start - prevEnd - 1;
										prevEnd = subTask.start + subTask.duration - 1;
										const subTaskId = this._getSubTaskId(subTask);
										return (
											<div
												className={cn(
													`col-${subTask.duration}`,
													` offset-${offset}`,
													styles.item,
													{
														[styles.selected]: this.props.selectedSubTask === subTaskId,
													}
												)}
												onClick={this._onSelectSubTask(subTaskId)}
												key={`subTask${subTaskId}`}
											>
												{subTask.title}{subTask.id ? ` (${subTask.id})` : ''}: {(this.props.people[subTask.personId] || {name: undefined}).name}
											</div>
										);
									})}
								</div>
							);
						})}
					</div>
				</div>
			</>
		);
	}
}