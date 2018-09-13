import * as React from 'react';
import { ViewProps } from '../../modules/model';

export type Props = ViewProps<typeof import('../../app/person')['default']> & {
	enabled: boolean;
};

export default class Person extends React.PureComponent<Props> {
	private _onNameChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.props.setName(event.target.value);
	}

	render() {
		return (
			<form>
				<div className="form-group row">
					<label className="col-2 col-form-label">Id</label>
					<div className="col-10">
						<input
							type="text"
							className="form-control"
							value={this.props.name || ''}
							onChange={this._onNameChanged}
							disabled={!this.props.enabled}
						/>
					</div>
				</div>
			</form>
		);
	}
}