import * as React from 'react';
import { ModelState } from '../../modules/model';
import Item from './item';
import { filter } from '../../app/subTaskList/filter';
import styles from './styles.less';

export type Props = {
	subTasks: {[id: string]: ModelState<typeof import('../../app/subTask')['default']>};
	tasks: {[id: string]: ModelState<typeof import('../../app/task')['default']>};
}

export default class TaskGraph extends React.Component<Props> {
	render () {
		return (
			<>
				<div className="row align-items-center h4 mb-4">
					<div className="col-md-1">Задача</div>
					<div className="col-md-11">
						<div className="row">
							{Array.apply(null, {length: 12}).map(Number.call, Number).map((index) => (
								<div className={`col-1 ${styles.head}`}>{index + 1}</div>
							))}
						</div>
					</div>
				</div>
				{Object.keys(this.props.tasks).map((taskId) => (
					<Item 
						task={this.props.tasks[taskId]}
						subTasks={filter(this.props.subTasks, (subTask) => subTask.taskId === taskId)}
					/>
				))}
			</>
		);
	}
}