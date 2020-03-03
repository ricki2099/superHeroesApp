import { NgModule } from '@angular/core';
import { HeroeInfoComponent } from './heroe-info.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    component: HeroeInfoComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class HeroeInfoRouterModule { }
