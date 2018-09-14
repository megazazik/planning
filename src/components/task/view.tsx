import * as React from 'react';
import { ViewProps } from '../../modules/model';

export type Props = ViewProps<typeof import('../../app/task')['default']>;

export default class Task extends React.PureComponent<Props> {
	private _onTitleChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.props.setTitle(event.target.value);
	}

	private _onIdChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.props.setId(event.target.value);
	}

	render() {
		return (
			<form>
				<div className="form-group row">
					<label className="col-4 col-form-label">Id</label>
					<div className="col-8">
						<input
							type="text"
							className="form-control"
							value={this.props.id || ''}
							onChange={this._onIdChanged}
							disabled={this.props.id === undefined}
						/>
					</div>
				</div>
				<div className="form-group row">
					<label className="col-4 col-form-label">Заголовок</label>
					<div className="col-8">
						<input
							type="text"
							className="form-control"
							value={this.props.title || ''}
							onChange={this._onTitleChanged}
							disabled={this.props.title === undefined}
						/>
					</div>
				</div>
			</form>
		);
	}
}