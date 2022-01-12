import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Countries } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
private _historialB : string[] = [];
public resultadosB: Countries[] = [];

 get historialB(){
   return [...this._historialB];
 }

  private apiUrl: string = "https://restcountries.com";

  constructor(private http : HttpClient) {
    if(localStorage.getItem('historial')){
      this._historialB = JSON.parse(localStorage.getItem('historialB')!);
       }
   localStorage.getItem('historialB');
   }



  buscarPais(termino : string): Observable<Countries[] >
  {
    const url = `${this.apiUrl}/v3.1/name/${termino}`;

    return this.http.get<Countries[]>(url);
  }

  buscarCapital(termino : string): Observable<Countries[] >
  {
    const url = `${this.apiUrl}/v3.1/capital/${termino}`;

    return this.http.get<Countries[] >(url);
  }

  buscarRegion(termino : string): Observable<Countries[] >
  {
    termino = termino.trim().toLowerCase();

      if(!this._historialB.includes( termino)){
        this._historialB.unshift( termino );
        this._historialB = this._historialB.splice(0,10);

        localStorage.setItem('historialB',JSON.stringify(this._historialB) );
      }


    const url = `${this.apiUrl}/v3.1/region/${termino}`;

    return this.http.get<Countries[] >(url);
  }


  buscarPorCodigo( id:string): Observable<Countries>
  {
    const url = `${this.apiUrl}/v3.1/alpha/${ id }`;

    return this.http.get<Countries>(url);
  }


}
