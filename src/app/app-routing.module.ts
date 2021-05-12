import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'action-movie',
    loadChildren: () => import('./action-movie/action-movie.module').then( m => m.ActionMoviePageModule)
  },
  {
    path: 'comedy-movie',
    loadChildren: () => import('./comedy-movie/comedy-movie.module').then( m => m.ComedyMoviePageModule)
  },
  {
    path: 'super-man',
    loadChildren: () => import('./super-man/super-man.module').then( m => m.SuperManPageModule)
  },
  {
    path: 'xmen',
    loadChildren: () => import('./xmen/xmen.module').then( m => m.XmenPageModule)
  },
  {
    path: 'spiderman',
    loadChildren: () => import('./spiderman/spiderman.module').then( m => m.SpidermanPageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'geo-location',
    loadChildren: () => import('./geo-location/geo-location.module').then( m => m.GeoLocationPageModule)
  },
  {
    path: 'batman-info',
    loadChildren: () => import('./batman-info/batman-info.module').then( m => m.BatmanInfoPageModule)
  },
  {
    path: 'spider-info',
    loadChildren: () => import('./spider-info/spider-info.module').then( m => m.SpiderInfoPageModule)
  },
  {
    path: 'harry-info',
    loadChildren: () => import('./harry-info/harry-info.module').then( m => m.HarryInfoPageModule)
  },
  {
    path: 'super-info',
    loadChildren: () => import('./super-info/super-info.module').then( m => m.SuperInfoPageModule)
  },
  {
    path: 'x-info',
    loadChildren: () => import('./x-info/x-info.module').then( m => m.XInfoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
