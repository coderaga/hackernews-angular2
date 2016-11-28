import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import  'rxjs/add/operator/map';
import  'rxjs/add/operator/switchMap';
import * as itemDetail from '../actions/item-detail';
import { HackerNewsApiService } from '../services/hacker-news-api.service';



@Injectable()
export class ItemDetailEffect {
    constructor(private actions$: Actions,
                private hackernewsApiService: HackerNewsApiService){}
    @Effect() loadItemDetail$ = this.actions$
        .ofType(itemDetail.ActionTypes.LOAD_ITEM_DETAIL)
        .switchMap((action) => this.hackernewsApiService.retriveItemDetail(action.payload))
        .map((data) => new itemDetail.LoadItemDetailCompleteAction(data));
}