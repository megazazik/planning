import * as React from 'react';
import { ModelState } from '../../modules/model';

export type Props = ModelState<typeof import('../../app/task')['default']> & {
	onClick?: () => void;	
	className?: string;
};

export default class TaskListItem extends React.PureComponent<Props> {
	render() {
		return (
			<tr
				className={this.props.className}
				onClick={this.props.onClick}
			>
				<td>{this.props.id}</td>
				<td>{this.props.title}</td>
			</tr>
		);
	}
}