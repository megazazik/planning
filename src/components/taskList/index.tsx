import * as React from 'react';
import { ModelState } from '../../modules/model';
import Item from './item';
import cached from 'react-cached-callback';
import cn from 'classnames';
import styles from './styles.less';

export type Props = ModelState<typeof import('../../app/taskList')['default']> & {
	selectedTask: string;
	onTaskSelect: (task: string) => void;
};

export default class TaskList extends React.PureComponent<Props> {
	@cached
	private _onClick(uid: string) {
		return () =>this.props.onTaskSelect(uid);
	}

	render() {
		return (
			<table className="table table-hover table-striped">
				<thead>
					<tr>
						<th scope="col">Id</th>
						<th scope="col">Title</th>
					</tr>
				</thead>
				<tbody>
					{Object.keys(this.props.items).map((uid) => (
						<Item
							key={uid}
							{...this.props.items[uid]}
							className={cn(styles.row, {['table-info']: this.props.selectedTask === uid})}
							onClick={this._onClick(uid)}
						/>
					))}
				</tbody>
			</table>
		);
	}
}