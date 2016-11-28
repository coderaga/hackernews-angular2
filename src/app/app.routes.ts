import { Routes, RouterModule }  from '@angular/router';
import { StoriesComponent } from './stories/stories.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
const routes: Routes = [
    { path: '', redirectTo: 'news/1', pathMatch: 'full'},
    { path: 'news/:page_id', component: StoriesComponent, data: {storiesType: 'news'} },
    { path: 'jobs/:page_id', component: StoriesComponent, data: {storiesType: 'jobs'} },
    { path: 'newest/:page_id', component: StoriesComponent, data: {storiesType: 'newest'} },
    { path: 'show/:page_id', component: StoriesComponent, data: {storiesType: 'show'} },
    { path: 'ask/:page_id', component: StoriesComponent, data: {storiesType: 'ask'} },
    { path: 'item/:id', component: ItemDetailComponent }
];

export const routing = RouterModule.forRoot(routes);