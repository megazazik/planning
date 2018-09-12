import * as React from 'react';
import { ViewProps } from '../../modules/model';

export type Props = ViewProps<typeof import('../../app/subTask')['default']>;

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
					<div className="col-12">
						<input
							type="text"
							className="form-control"
							value={this.props.title || ''}
							onChange={this._onTitleChanged}
							disabled={disabled}
							placeholder="Заголовок"
						/>
					</div>
				</div>
			</form>
		);
	}
}