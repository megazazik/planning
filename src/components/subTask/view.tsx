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

	private _onStartIncrease = () => {
		this.props.setStart((this.props.start || 1) + 1);
	}

	private _onStartDecrease = () => {
		if (this.props.start && this.props.start > 1) {
			this.props.setStart(this.props.start - 1);
		}
	}

	private _onDurationIncrease = () => {
		this.props.setDuration((this.props.duration || 1) + 1);
	}

	private _onDurationDecrease = () => {
		if (this.props.duration && this.props.duration > 1) {
			this.props.setDuration(this.props.duration - 1);
		}
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
						<div className="input-group">
							<div className="input-group-prepend">
								<button
									className="btn btn-outline-secondary"
									type="button"
									disabled={disabled || this.props.start === 1}
									onClick={this._onStartDecrease}
								>
									-
								</button>
							</div>
							<input
								type="text"
								className="form-control"
								value={this.props.start === undefined ? '' : this.props.start}
								onChange={this._onStartChanged}
								disabled={disabled}
								placeholder="Начало"
							/>
							<div className="input-group-append">
								<button
									className="btn btn-outline-secondary"
									type="button"
									disabled={disabled}
									onClick={this._onStartIncrease}
								>
									+
								</button>
							</div>
						</div>
					</div>
					<div className="col-4">
						<div className="input-group">
							<div className="input-group-prepend">
								<button
									className="btn btn-outline-secondary"
									type="button"
									disabled={disabled || this.props.duration === 1}
									onClick={this._onDurationDecrease}
								>
									-
								</button>
							</div>
							<input
								type="text"
								className="form-control"
								value={this.props.duration === undefined ? '' : this.props.duration}
								onChange={this._onDurationChanged}
								disabled={disabled}
								placeholder="Продолжительность"
							/>
							<div className="input-group-append">
								<button
									className="btn btn-outline-secondary"
									type="button"
									disabled={disabled}
									onClick={this._onDurationIncrease}
								>
									+
								</button>
							</div>
						</div>
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
							value={this.props.personId || ''}
							className="form-control"
							onChange={this._onPersonChanged}
							disabled={disabled}
						>
							<option value=''>Выберите</option>
							{Object.keys(this.props.people.items).map((personId) => (
								<option
									key={personId}
									value={personId}
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