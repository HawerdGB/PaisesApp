import { Component} from '@angular/core';
import { Countries} from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {
  termino: string = '';
hayError: boolean = false;
paises: Countries[] = [];


constructor( private paisService : PaisService) { }

buscar(termino:string){
  this.hayError = false;
  this.termino = termino;
  if(this.termino.length === 0){return}

  this.paisService.buscarCapital(termino)
  .subscribe((paises) => {
    this.paises = paises;
  }, (err) => {
    this.hayError = true;
    this.paises = [];
  });



}

}
