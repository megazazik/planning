import { build, IAction } from 'encaps';
import sprint from '../sprint';
import sprints from '../sprints';
import { ModelState } from '../../modules/model';

export const SPRINTS_KEY = 'sprints';

export const { reducer, actions } = build()
	.child('sprint', sprint)
	.child(SPRINTS_KEY, sprints)
	.action({
		replace: (state, action: IAction<ModelState<typeof sprint>>) => ({
			...state,
			sprint: action.payload || sprint.reducer()
		})
	});
