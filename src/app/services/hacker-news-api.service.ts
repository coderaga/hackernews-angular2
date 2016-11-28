import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HackerNewsApiService {
  hnApiUrl: string;
  stories: Observable<any>;
  constructor(private _http: Http) { 
      this.hnApiUrl = 'https://node-hnapi.herokuapp.com'; 
  }

  retriveStories(storyType:string, page_id: number): Observable<any> {
    return this._http.get(`${this.hnApiUrl}/${storyType}?page=${page_id}`)
      .map(response => this.stories = response.json());
  }

  retriveItemDetail(id: number): Observable<any>{
		return this._http.get(`${this.hnApiUrl}/item/${id}`)
	    .map(response => response.json());
  }

}
