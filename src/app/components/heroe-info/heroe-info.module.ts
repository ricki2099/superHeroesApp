import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeInfoComponent } from './heroe-info.component'
import { HeroeInfoRouterModule } from './heroe-info.routing.module'
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [HeroeInfoComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatCardModule,
    //HeroeInfoRouterModule,
    MatButtonModule
  ],
  exports:[HeroeInfoComponent],
})
export class HeroeInfoModule { }
