import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { petitionservice, HeroesService } from './../../services'
import { createStore, Store } from 'redux'
import { reducerHeroes, vibilityFilter } from '../../reducers/heroes.reducer'
import { HeroesHome, storageHeroes } from './../../interfaces'
import { addItem } from './../../reducers/actions'
import { filter, map } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { HeroeInfoComponent } from './../../components'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(public api: petitionservice, public heroe: HeroesService, public dialog: MatDialog) { }
  heroelist: Observable<any>;
  store: Store<storageHeroes>
  heroes: HeroesHome[];

  ngOnInit() {
    this.store = createStore(reducerHeroes);
    this.store.subscribe(
      () => {
        this.heroes = this.store.getState().allHeroes
        console.log(this.heroes)
      }
    )
    this.getList()
  }

  addHeroe(heroe: HeroesHome) {
    this.store.dispatch(addItem(heroe))
  }

  getList() {
    this.heroe.getHeroesHome().toPromise().then(
      (heroes) => {
        for (let hero of heroes){

          console.log(hero)
          this.addHeroe(hero)
        }
      }
    )
  }
  selectHeroe(heroe: HeroesHome) {
    this.dialog.open(HeroeInfoComponent, {
      width: '700px',
      data: heroe
    });
  }
}
