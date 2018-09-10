import * as React from 'react';
import { ViewProps } from '../../modules/model';
import Item from './item';
import cached from 'react-cached-callback';
import cn from 'classnames';
import styles from './styles.less';

export type Props = ViewProps<typeof import('../../app/subTaskList')['default']> & {
	selectedSubTaskId: string;
	taskId: string;
	onSubTaskSelect: (subTask: string) => void;
};

export default class SubTaskList extends React.PureComponent<Props> {
	@cached
	private _onClick(uid: string) {
		return () =>this.props.onSubTaskSelect(uid);
	}

	private _create = () => this.props.create(this.props.taskId);
	private _remove = () => this.props.remove(this.props.selectedSubTaskId);

	render() {
		return (
			<>
				<div className="row mb-3">
					<div className="col-md-12">
						<button
							type="button"
							className="btn btn-primary mr-2"
							onClick={this._create}
							disabled={!this.props.taskId}
						>
							Добавить
						</button>
						<button
							type="button"
							className="btn btn-primary"
							onClick={this._remove}
							disabled={!this.props.selectedSubTaskId}
						>
							Удалить
						</button>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<table className="table table-hover table-striped">
							<thead>
								<tr>
									<th scope="col">Id</th>
									<th scope="col">Title</th>
									<th scope="col">Start</th>
									<th scope="col">Duration</th>
								</tr>
							</thead>
							<tbody>
								{Object.keys(this.props.items).map((uid) => (
									<Item
										key={uid}
										{...this.props.items[uid]}
										className={cn(styles.row, {['table-info']: this.props.selectedSubTaskId === uid})}
										onClick={this._onClick(uid)}
									/>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</>
		);
	}
}