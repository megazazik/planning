import * as React from 'react';
import { ModelState } from '../../modules/model';

export type Props = ModelState<typeof import('../../app/person')['default']> & {
	onClick?: () => void;	
	className?: string;
};

export default class PeopleItem extends React.PureComponent<Props> {
	render() {
		return (
			<tr
				className={this.props.className}
				onClick={this.props.onClick}
			>
				<td>{this.props.name}</td>
			</tr>
		);
	}
}