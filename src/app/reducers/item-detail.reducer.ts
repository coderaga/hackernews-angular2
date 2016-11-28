import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ItemDetail } from '../models/item-detail';
import { Comment } from '../models/comments';
import * as itemDetailActions from '../actions/item-detail';
// export type ItemDetailState = ItemDetail;
export type ItemDetailState = any;

// Note: Need to figure out how to handle nested comments trees in Interface
// const initialState: ItemDetailState = {};
const initialState: any = {}


export function reducer(state = initialState, action: Action): any {
    switch(action.type){
        case itemDetailActions.ActionTypes.LOAD_ITEM_DETAIL_COMPLETE:{
            return state = action.payload;
        }
        default: {
            return state;
        }
    }
}


