import { Component, OnInit } from '@angular/core';
import {petitionservice,HeroesService,AuthFbService} from '../../services'
import {HeroesHome} from '../../interfaces'
import {MatDialog} from '@angular/material/dialog';
import {HeroeInfoComponent} from '../../components'

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.sass']
})
export class FavoriteComponent implements OnInit {

  list
  constructor(public fb:AuthFbService,public api:petitionservice,public heroe:HeroesService,public dialog: MatDialog) { }
  
  ngOnInit() {
    this.list=this.api.getHeroeFavorite(this.fb.user["email"])
  }

 

  selectHeroe(heroe:HeroesHome){
      this.dialog.open(HeroeInfoComponent, {
        width: '700px',
        data: heroe
      });
  }
}
