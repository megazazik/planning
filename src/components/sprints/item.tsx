import * as React from 'react';

export type Props = {
	onClick?: () => void;	
	className?: string;
	name?: string;
};

export default class SprintListItem extends React.PureComponent<Props> {
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