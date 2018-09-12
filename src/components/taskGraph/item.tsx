import * as React from 'react';
import { ModelState } from '../../modules/model';
import { ISubTask } from '../../app/subTask';
import styles from './styles.less';

export type Props = {
	subTasks: {[id: string]: ModelState<typeof import('../../app/subTask')['default']>};
	task: ModelState<typeof import('../../app/task')['default']>;
}

export default class TaskGraphItem extends React.PureComponent<Props> {
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

	render() {
		if (!this.props.task) {	
			return null;
		}

		return (
			<div className="row align-items-center mb-3">
				<div className="col-md-1">{this.props.task.id}</div>
				<div className="col-md-11">
					{this._getLines().map((line, index) => {
						let prevEnd = 0;
						return (
							<div className="row mb-1" key={`line_${index}`}>
								{line.map((subTask) => {
									const offset = subTask.start - prevEnd - 1;
									prevEnd = subTask.start + subTask.duration - 1;
									return (
										<div className={`col-${subTask.duration} offset-${offset} ${styles.item}`}>
											{subTask.id}: {subTask.start} - {subTask.duration}
										</div>
									);
								})}
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}