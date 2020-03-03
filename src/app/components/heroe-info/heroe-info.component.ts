import { Component, OnInit,Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthFbService, HeroesService, petitionservice } from '../../services'
import { Heroes } from '../../interfaces'
@Component({
  selector: 'app-heroe-info',
  templateUrl: './heroe-info.component.html',
  styleUrls: ['./heroe-info.component.sass']
})
export class HeroeInfoComponent implements OnInit {

  HeroeData:Heroes
    
    constructor(public dialogRef: MatDialogRef<HeroeInfoComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public heroeHome,public fb:AuthFbService,private heroe:HeroesService,private api:petitionservice) { }

  ngOnInit() {
    
 console.log("heroeHome ", this.heroeHome);
    this.heroe.getHeroesData(this.heroeHome["url"]).toPromise().then(
      (heroe:Heroes)=>{console.log(heroe);this.HeroeData = heroe }
    )

  }

  agregarFavoritos(heroe:Heroes){
    this.api.agregarHeroe(this.fb.user["email"],heroe).then(
      res=>{alert("heroe agregado con exito");this.dialogRef.close()}
    )
  }
}
