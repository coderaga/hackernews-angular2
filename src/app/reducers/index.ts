import * as fromStories from './stories.reducer';
import { compose } from '@ngrx/core/compose'
import { combineReducers } from '@ngrx/store';


export interface AppState {
    stories: fromStories.StoriesState;
}

export default compose(combineReducers)({
    stories: fromStories.reducer
});