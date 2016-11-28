import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
  LOAD_STORIES:      type('loadStories'),
  LOAD_STORES_COMPLETE:  type('loadStoriesComplete')
};


export class LoadStoriesAction implements Action {
    type = ActionTypes.LOAD_STORIES;
    constructor(public payload: {}){ }
}

export class LoadStoriesCompleteAction implements Action {
    type = ActionTypes.LOAD_STORES_COMPLETE;
    constructor(public payload: any){ }
}

export type StoriesAction
    = LoadStoriesAction
    | LoadStoriesCompleteAction