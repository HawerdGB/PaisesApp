import { Component } from '@angular/core';
import { Countries } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent  {
termino: string = '';
hayError: boolean = false;
paises: Countries[] = [];


constructor( private paisService : PaisService) { }

buscar(termino:string){
  this.hayError = false;
  this.termino = termino;
  if(this.termino.length === 0){return}

  this.paisService.buscarRegion(termino)
  .subscribe((paises) => {
    this.paises = paises;
  }, (err) => {
    this.hayError = true;
    this.paises = [];
  });


}
sugerencias (termino : string){
  this.hayError = false;
  //TODO : crear sugerencias
}



}

