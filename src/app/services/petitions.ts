import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class petitionservice {
	private token = '';
	public path = '';
	public dominio = '';

	constructor(private http: HttpClient) {
		this.path = 'http://35.162.46.100/superheroes/';
	}

	public get(url: string): Observable<any> {
		return this.http.get(`${this.path}/${url}`);
	}

	public agregarHeroe(correo, heroe: any) {
		return this.http.post(`https://mydata-31163.firebaseio.com/${correo.replace(/[.]+/g,"")}.json`, heroe).toPromise().then(
			(res)=>{return res}
		)
	}

	public getHeroeFavorite(correo ): Observable<any> {
		return this.http.get(`https://mydata-31163.firebaseio.com/${correo.replace(/[.]+/g,"")}.json`).pipe(
			map(data=>
				{let array=[]
					for(let key of Object.keys(data))
						array=[...array,data[key]]
					return array
				}
				)
		);
	}

}
