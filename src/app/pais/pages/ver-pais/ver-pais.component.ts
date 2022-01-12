import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { Countries } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';


@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Countries;

  constructor(
    private activatedRoute : ActivatedRoute,
    private paisService : PaisService
    ){}

  ngOnInit(): void {
       this.activatedRoute.params
       .pipe(
          switchMap(( { id } ) => this.paisService.buscarPorCodigo( id )),
          tap(console.log))
       .subscribe( (pais) => this.pais = pais[0])

     // codigo sin utiliza switchmap
    // this.activatedRoute.params
    // .subscribe( ({ id }) =>{
    //   console.log( id );

    //   this.paisService.buscarPorCodigo( id )
    //   .subscribe( pais =>
    //    console.log(pais));
    // });

  }}

