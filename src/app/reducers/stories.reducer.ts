import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Item} from '../models/item';


export type StoriesState = Item[];

const initialState: StoriesState = [];


export function reducer(state = initialState, action: Action): StoriesState {
    switch(action){
        default: {
            return state;
        }
    }
}
