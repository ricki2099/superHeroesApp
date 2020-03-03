import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule} from './home-routing.module'
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { HeroeInfoComponent, HeroeInfoModule} from './../../components'
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HeroeInfoModule,MatDialogModule,
    HomeRoutingModule,MatButtonModule,
    MatCardModule],
  exports:[HomeComponent],
  entryComponents:[HeroeInfoComponent]
})
export class HomeModule { }
