import { Component, OnInit } from '@angular/core';
import { HackerNewsApiService } from '../services/hacker-news-api.service';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers/index';
import { Observable } from 'rxjs/Observable';
import * as storiesAction from '../actions/stories';


@Component({
  selector: 'hn-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
  providers: [HackerNewsApiService]
})
export class StoriesComponent implements OnInit {
  storiesType: any;
  items$: Observable<any>;
  pageNum;
  constructor(private hackerNewsApi: HackerNewsApiService, 
              private route: ActivatedRoute,
              private store: Store<AppState>) {
      this.items$ = this.store.select('stories');
      // this.store.select('stories').map(
      //   (stories) => {
      //     this.items$ = Observable.apply(stories);
      //   }
      // )
   }

  ngOnInit() {
    this.route.data.subscribe(
      (data) => this.storiesType = (data as any).storiesType
    )
    
    this.route.params.subscribe( params => {
      this.pageNum = params['page'] ? +params['page'] : 1;
      this.getStories(this.storiesType, this.pageNum);
    })
  }

  getStories(storiesType: string, pageNum: number){
    this.store.dispatch(new storiesAction.LoadStoriesAction(
      { 'storiesType': storiesType, 
        'pageNum': pageNum
      }));
  }
}
