import { Component, OnInit } from '@angular/core';
import { petitionservice,AuthFbService } from './services'
import { map } from 'rxjs/operators';
import {createStore,Store} from 'redux'
import {allHeroes,reducerHeroes,vibilityFilter} from './reducers/heroes.reducer'
import {Heroes,storageHeroes} from './interfaces'
import {addItem} from './reducers/actions'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  pokedex
  store:Store<storageHeroes>
  heroes:Heroes[];

  constructor(public api: petitionservice,public fb:AuthFbService,public router:Router) {
    this.pokedex = this.api.get("pokedex").pipe(
      map((gens) => gens.results)
      );
      console.log("gens", this.pokedex);
  }

  ngOnInit(){
    this.store = createStore(reducerHeroes);
    const unsubscribe = this.store.subscribe( ()=> {
      const filter = this.store.getState().allHeroes
      console.log("filter ", filter);
    })
  }

  gotoHome(){
    this.router.navigateByUrl("/")
  }
}
