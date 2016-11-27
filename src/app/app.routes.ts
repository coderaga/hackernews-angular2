import { Routes, RouterModule }  from '@angular/router';
import { StoriesComponent } from './stories/stories.component';

const routes: Routes = [
    {path: '', redirectTo: 'news/1', pathMatch: 'full'},
    { path: 'news/:page_id', component: StoriesComponent, data: {storiesType: 'news'} },
    { path: 'jobs/:page_id', component: StoriesComponent, data: {storiesType: 'jobs'} }
];

export const routing = RouterModule.forRoot(routes);