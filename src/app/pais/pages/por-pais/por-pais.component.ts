import { Component } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent  {
termino: string = ''

buscar(){
  if(this.termino.length === 0){return}

  console.log(this.termino)
}

  constructor() { }



}