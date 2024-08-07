import { Routes } from '@angular/router';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';


export const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('@modules/home/home-index/home-index.component').then(mod => mod.HomeIndexComponent)
      }

    ]
  },

];
