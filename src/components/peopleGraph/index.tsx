import * as React from 'react';
import { ModelState } from '../../modules/model';
import Item from './item';
import { filter } from '../../app/subTaskList/filter';
import styles from './styles.less';
import cached from 'react-cached-callback';

export type Props = {
	subTasks: {[id: string]: ModelState<typeof import('../../app/subTask')['default']>};
	onSelectPerson?: (personId: string) => void;
	onSelectSubTask?: (subTaskId: string) => void;
	people: {[id: string]: ModelState<typeof import('../../app/person')['default']>};
}

export default class PeopleGraph extends React.Component<Props> {
	static defaultProps: Partial<Props> = {
		onSelectPerson() {},
		onSelectSubTask() {}
	}

	@cached
	private _onSelectPerson(personId: string) {
		return () => this.props.onSelectPerson(personId);
	}

	render () {
		return (
			<>
				<div className="row align-items-center h4 mb-4">
					<div className="col-md-1">Люди</div>
					<div className="col-md-11">
						<div className="row">
							{Array.apply(null, {length: 12}).map(Number.call, Number).map((index) => (
								<div key={`headCol${index}`} className={`col-1 ${styles.head}`}>{index + 1}</div>
							))}
						</div>
					</div>
				</div>
				{Object.keys(this.props.people).map((peopleId) => (
					<Item
						key={`taskGraph_${peopleId}`}
						person={this.props.people[peopleId]}
						subTasks={filter(this.props.subTasks, (subTask) => subTask.personId === peopleId)}
						onSelectSubTask={this.props.onSelectSubTask}
						onSelectPerson={this._onSelectPerson(peopleId)}
					/>
				))}
			</>
		);
	}
}