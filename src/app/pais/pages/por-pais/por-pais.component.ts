import { Component } from '@angular/core';
import { Countries, ErrorPais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent  {
termino: string = '';
hayError: boolean = false;
paises: Countries[] = [];


constructor( private paisService : PaisService) { }

buscar(){
  this.hayError = false;
  if(this.termino.length === 0){return}

this.paisService.buscarPais(this.termino)
.subscribe((resp) => {let error = resp as ErrorPais;
console.log(resp)

if(error.status == '404'){
  this.hayError = true;
  this.paises = [];
  return;
}

this.paises = <Countries[]>resp;
});

}

}
