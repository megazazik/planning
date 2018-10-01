import * as React from 'react';
import { ViewProps, ModelState } from '../../modules/model';
import Item from './item';
import cached from 'react-cached-callback';
import cn from 'classnames';
import styles from './styles.less';

export type Props = ViewProps<typeof import('../../app/sprints')['default']>;

interface IState {
	selected: string;
	sprintName: string;
}

export default class SprintList extends React.PureComponent<Props, IState> {
	state = {
		selected: null,
		sprintName: '',
	}

	@cached
	private _onClick(planning: string) {
		return () => {
			this.props.setCurrent(planning);
			this.setState({selected: planning});
		}
	}

	private _create = () => {
		this.props.add(this.state.sprintName);
	};
	private _remove = () => {
		this.props.remove(this.state.selected);
		this.setState({selected: null});
	}

	private _onSprintNameChanged = (ev: React.SyntheticEvent<HTMLInputElement>) => {
		this.setState({sprintName: ev.currentTarget.value})
	}

	private _onOpenForm = () => {
		this.setState({sprintName: ''})
	}

	render() {
		return (
			<>
				<h2>Спринты</h2>
				<div className="row mb-3">
					<div className="col-md-12">
						<button
							type="button"
							className="btn btn-primary mr-2"
							data-toggle="modal"
							data-target="#exampleModal"
							onClick={this._onOpenForm}
						>
							Создать
						</button>
						<button
							type="button"
							className="btn btn-primary"
							onClick={this._remove}
							disabled={!this.state.selected}
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
									<th scope="col">Имя</th>
								</tr>
							</thead>
							<tbody>
								{Object.keys(this.props.items).map((planningIndex) => (
									<Item
										key={planningIndex}
										name={this.props.items[planningIndex]}
										className={cn(
											styles.row,
											{['table-info']: this.state.selected === this.props.items[planningIndex]}
										)}
										onClick={this._onClick(this.props.items[planningIndex])}
									/>
								))}
							</tbody>
						</table>
					</div>
				</div>
				<div
					className="modal fade"
					id="exampleModal"
					tabIndex={-1}
					role="dialog"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLabel">Создать спринт</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<form>
									<div className="form-group">
										<label htmlFor="recipient-name" className="col-form-label">Id спринта</label>
										<input
											type="text"
											className="form-control"
											id="recipient-name"
											onChange={this._onSprintNameChanged}
											value={this.state.sprintName}
										/>
									</div>
								</form>
							</div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-secondary"
									data-dismiss="modal"
								>
									Закрыть
								</button>
								<button
									type="button"
									className="btn btn-primary"
									data-dismiss="modal"
									onClick={this._create}
								>
									Сохранить
								</button>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}