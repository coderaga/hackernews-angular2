import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
  LOAD_STORIES:      type('loadStories'),
  LOAD_STORES_COMPLETE:  type('loadStoriesComplete')
};


export class LoadStoriesAction implements Action {
    type = ActionTypes.LOAD_STORIES;
    constructor(){
        console.log("Inside Action");
    }
    
}

export class LoadStoriesCompleteAction implements Action {
    type = ActionTypes.LOAD_STORES_COMPLETE;
    constructor(){
        console.log("Inside Success Action");
    }
}

export type StoriesAction
    = LoadStoriesAction
    | LoadStoriesCompleteAction