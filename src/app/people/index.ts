import { createMap } from 'encaps';
import person from '../person';

const peopleModelBase = createMap(person);
const peopleModel = peopleModelBase
	.action({
		create: (people) => {
			const newKey = Object.keys(people.items).map(Number).sort((a, b) => b - a)[0] + 1;
			return peopleModelBase.reducer(
				people,
				peopleModelBase.actions.add(isNaN(newKey) ? '0' : newKey + '')
			);;
		},
	});

export default peopleModel;