import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HackerNewsApiService } from '../services/hacker-news-api.service';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers/index';
import { Observable} from 'rxjs/Observable';
import * as itemDetailAction from '../actions/item-detail';
@Component({
  selector: 'hn-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  itemDetail: Observable<any>;
  constructor(private route: ActivatedRoute,
              private hackerNewsApiService: HackerNewsApiService,
              private store: Store<AppState>) 
  { 
    this.itemDetail = store.select("itemDetail");
    // this.store.select('itemDetail').subscribe(
    //     (itemDetail) => { 
    //     console.log("Items details in constructore are:", itemDetail);
    //     this.itemDetail = Observable.apply(itemDetail); 
    //     }
    // );
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        let itemID = +params['id'];
        this.getItemDetail(itemID);
      }
    );
  }

  // Get Individual Item Detail
  getItemDetail(itemID){
    this.store.dispatch(new itemDetailAction.LoadItemDetailAction(itemID));
  }
}
