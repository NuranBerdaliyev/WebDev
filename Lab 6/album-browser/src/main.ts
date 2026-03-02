import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter, Route } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { Home } from './app/home/home';
import { About } from './app/about/about';
import { Albums } from './app/albums/albums';
import { AlbumDetail } from './app/album-detail/album-detail';
import { AlbumPhotos } from './app/album-photos/album-photos';

const routes: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'albums', component: Albums },
  { path: 'albums/:id', component: AlbumDetail },
  { path: 'albums/:id/photos', component: AlbumPhotos }
];

bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    provideRouter(routes)
  ]
});