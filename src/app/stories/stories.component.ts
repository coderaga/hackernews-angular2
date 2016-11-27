import { Component, OnInit } from '@angular/core';
import {HackerNewsApiService} from '../services/hacker-news-api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'hn-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
  providers: [HackerNewsApiService]
})
export class StoriesComponent implements OnInit {
  storiesType: any;
  items;
  pageNum;
  constructor(private hackerNewsApi: HackerNewsApiService, 
              private route: ActivatedRoute) {

   }

  ngOnInit() {
    this.route.data.subscribe(
      (data) => this.storiesType = (data as any).storiesType
    );
    
    this.route.params.subscribe( params => {
      this.pageNum = params['page'] ? +params['page'] : 1;
      this.hackerNewsApi.retriveStories(this.storiesType, this.pageNum)
      .subscribe(
        items => this.items = items
      );
    })
  }

}
