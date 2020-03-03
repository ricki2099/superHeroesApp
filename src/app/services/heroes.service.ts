import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  path = 'http://35.162.46.100/superheroes/';
  nextHome = ""
  constructor(private http:HttpClient) { }

  getHeroesHome():Observable<any>{
    //return this.http.get(`${this.path}/heroe${this.nextHome}`).pipe(
    return this.http.get<any>(`${this.path}`)
  }
  getHeroesData(url) {
    return this.http.get(url)
  }



}
