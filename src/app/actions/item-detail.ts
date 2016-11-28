import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
  LOAD_ITEM_DETAIL:           type('loadItemDetail'),
  LOAD_ITEM_DETAIL_COMPLETE:  type('loadItemDetailComplete')
};


export class LoadItemDetailAction implements Action {
    type = ActionTypes.LOAD_ITEM_DETAIL;
    constructor(public payload: any){
        console.log("Inside Item Action");
    }
    
}
export class LoadItemDetailCompleteAction implements Action {
    type = ActionTypes.LOAD_ITEM_DETAIL_COMPLETE;
    constructor(public payload: any){
        console.log("Inside Item Success Action");
    }
}

export type ItemDetailAction
    = LoadItemDetailAction
    | LoadItemDetailCompleteAction