import * as React from 'react';
import { ViewProps, ModelState } from '../../modules/model';

export type Props = ViewProps<typeof import('../../app/subTask')['default']> & {
	people: ModelState<typeof import('../../app/people')['default']>
};

export default class Task extends React.PureComponent<Props> {
	private _onTitleChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.props.setTitle(event.target.value);
	}

	private _onIdChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.props.setId(event.target.value);
	}

	private _onStartChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.props.setStart(+event.target.value);
	}

	private _onDurationChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.props.setDuration(+event.target.value);
	}

	private _onPersonChanged = (event: React.ChangeEvent<HTMLSelectElement>) => {
		this.props.setPerson(event.target.value);
	}

	render() {
		const disabled = this.props.id === undefined;

		return (
			<form>
				<div className="form-group row">
					<div className="col-4">
						<input
							type="text"
							className="form-control"
							value={this.props.id || ''}
							onChange={this._onIdChanged}
							disabled={disabled}
							placeholder="Id"
						/>
					</div>
					<div className="col-4">
						<input
							type="text"
							className="form-control"
							value={this.props.start || ''}
							onChange={this._onStartChanged}
							disabled={disabled}
							placeholder="Начало"
						/>
					</div>
					<div className="col-4">
						<input
							type="text"
							className="form-control"
							value={this.props.duration || ''}
							onChange={this._onDurationChanged}
							disabled={disabled}
							placeholder="Продолжительность"
						/>
					</div>
				</div>
				<div className="form-group row">
					<div className="col-8">
						<input
							type="text"
							className="form-control"
							value={this.props.title || ''}
							onChange={this._onTitleChanged}
							disabled={disabled}
							placeholder="Заголовок"
						/>
					</div>
					<div className="col-4">
						<select
							value={this.props.personId || null}
							className="form-control"
							onChange={this._onPersonChanged}
							disabled={disabled}
						>
							<option value={null} selected={this.props.personId == null}>Выберите</option>
							{Object.keys(this.props.people.items).map((personId) => (
								<option
									key={personId}
									value={personId}
									selected={this.props.personId == personId}
								>
									{this.props.people.items[personId].name}
								</option>
							))}
						</select>
					</div>
				</div>
			</form>
		);
	}
}