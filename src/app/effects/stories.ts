import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import  'rxjs/add/operator/map';
import  'rxjs/add/operator/switchMap';
import * as stories from '../actions/stories';
import { HackerNewsApiService } from '../services/hacker-news-api.service';


@Injectable()
export class StoriesEffect {
    constructor(private actions$: Actions,
                private hackernewsApiService: HackerNewsApiService){}
    
    @Effect() loadStories$ = this.actions$
        .ofType(stories.ActionTypes.LOAD_STORIES)
        .switchMap((action)=> this.hackernewsApiService
            .retriveStories(action.payload['storiesType'], action.payload['pageNum']))
        .map(data => new stories.LoadStoriesCompleteAction(data));
}