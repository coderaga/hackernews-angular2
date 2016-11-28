import * as fromStories from './stories.reducer';
import * as fromItemDetail from './item-detail.reducer';
import { compose } from '@ngrx/core/compose'
import { combineReducers } from '@ngrx/store';


export interface AppState {
    stories:    fromStories.StoriesState;
    itemDetail: fromItemDetail.ItemDetailState;
}

export default compose(combineReducers)({
    stories:    fromStories.reducer,
    itemDetail: fromItemDetail.reducer
});