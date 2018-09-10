import * as React from 'react';
import { ViewProps } from '../../modules/model';
import { ISubTask } from '../../app/subTask';

export type Props = {
	subTasks: {[id: string]: ViewProps<typeof import('../../app/subTask')['default']>};
	task: ViewProps<typeof import('../../app/task')['default']>
}

export default class Task extends React.PureComponent<Props> {
	private _getLines() {
		const lines: ISubTask[][] = [[]];
		Object.keys(this.props.subTasks).forEach((subTaskId) => {
			const subTask = this.props.subTasks[subTaskId];
			let subTaskLine = lines.find((line) => !line.some((st) => subTask.start > st.end || subTask.end < st.start));
			if (!subTaskLine) {
				subTaskLine = [];
				lines.push(subTaskLine);
			}
			subTaskLine.push(subTask);
		});

		return lines;
	}

	render() {
		if (!this.props.task) {
			return null;
		}

		const lines = this._getLines();
		return (
			<div className="row">
				<div className="col-1">{this.props.task.id}</div>
			</div>
		);
	}
}