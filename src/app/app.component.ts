import { Component, OnInit } from '@angular/core';
import { Loader } from './services/loader';

@Component({
  selector: 'hn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends Loader {
  constructor(){
    super(true);
    setTimeout(()=>{
      console.log("App Ready");
      this.ready()
    }, 10000);
  }

  ngOnInit(){
  }
}
