import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeIndexComponent } from '@modules/home/home-index/home-index.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // {
  //   path: 'home',
  //   component: HomeIndexComponent
  // },
  {
    path: 'home',
    loadChildren: () =>
      import('@modules/home/home-index/home-index.component').then(m => m.HomeIndexComponent)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
