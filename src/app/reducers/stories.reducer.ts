import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Item } from '../models/item';
import * as storiesActions from '../actions/stories';

export type StoriesState = Item[];
const initialState: StoriesState = [];


export function reducer(state = initialState, action: Action): StoriesState {
    switch(action.type){
        case storiesActions.ActionTypes.LOAD_STORES_COMPLETE: {
            return state = action.payload;
        }
        default: {
            return state;
        }
    }
}
