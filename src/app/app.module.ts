import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// For routing
import { routing } from './app.routes';
/**
 * ===============================
 * NGRX Modules
 * ===============================
*/ 
import { StoreModule } from '@ngrx/store';
// Dev Tools
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
// Effects
import { EffectsModule } from '@ngrx/effects';

/**
 * App Containers
 */
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StoriesComponent } from './stories/stories.component';
import { ItemComponent } from './item/item.component';

// reducer
import reducer from './reducers/index';
import { StoriesEffect } from './effects/stories';
import { ItemDetailEffect } from './effects/item-detail';
// Services
import { HackerNewsApiService } from './services/hacker-news-api.service';
import { ItemDetailComponent } from './item-detail/item-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StoriesComponent,
    ItemComponent,
    ItemDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentStore({
      monitor: useLogMonitor({
        visible: true,
        position: 'right'
      })
    }),
    StoreLogMonitorModule,
    EffectsModule.run(StoriesEffect),
    EffectsModule.run(ItemDetailEffect)
  ],
  providers: [HackerNewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
