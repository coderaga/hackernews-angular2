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
// import { StoreModule } from '@ngrx/store';
// Dev Tools
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';

/**
 * App Containers
 */
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StoriesComponent } from './stories/stories.component';
// import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StoriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
    // StoreModule.provideStore({}),
    // StoreDevtoolsModule.instrumentStore({
    //   monitor: useLogMonitor({
    //     visible: true,
    //     position: 'right'
    //   })
    // }),
    // StoreLogMonitorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
