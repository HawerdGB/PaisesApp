import { Component, OnInit } from '@angular/core';
import { Countries } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {
  regiones : string[] = ['africa', 'americas','asia', 'europe', 'oceania'];
  regionActiva : string = '';
termino: string = '';
paises: Countries[] = [];


constructor( private paisService : PaisService) { }

activarRegion(region : string){
  this.regionActiva = region;
  this.buscar(region);
}

buscar(termino:string){

this.paisService.buscarRegion(termino)
.subscribe((paises) => {
  this.paises = paises;
});
}

 ngOnInit(): void {

 }


}

