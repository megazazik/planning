import * as React from 'react';
import { ViewProps } from '../../modules/model';
import Item from './item';
import cached from 'react-cached-callback';
import cn from 'classnames';
import styles from './styles.less';

export type Props = ViewProps<typeof import('../../app/people')['default']> & {
	selectedPerson: string;
	onPeopleSelect: (person: string) => void;
};

export default class People extends React.PureComponent<Props> {
	@cached
	private _onClick(uid: string) {
		return () =>this.props.onPeopleSelect(uid);
	}

	private _remove = () => {
		this.props.remove(this.props.selectedPerson)
	}

	render() {
		return (
			<>
				<div className="row mb-3">
					<div className="col-12">
						<button
							type="button"
							className="btn btn-primary mr-2"
							onClick={this.props.create}
						>
							Добавить
						</button>
						<button
							type="button"
							className="btn btn-primary"
							onClick={this._remove}
							disabled={!this.props.selectedPerson}
						>
							Удалить
						</button>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<table className="table table-hover table-striped">
							<thead>
								<tr>
									<th scope="col">Имя</th>
								</tr>
							</thead>
							<tbody>
								{Object.keys(this.props.items).map((uid) => (
									<Item
										key={uid}
										{...this.props.items[uid]}
										className={cn(styles.row, {['table-info']: this.props.selectedPerson === uid})}
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