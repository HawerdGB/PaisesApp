import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Countries } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "https://restcountries.com";

  constructor(private http : HttpClient) { }



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
    const url = `${this.apiUrl}/v3.1/region/${termino}`;

    return this.http.get<Countries[] >(url);
  }


  buscarPorCodigo( id:string): Observable<Countries>
  {
    const url = `${this.apiUrl}/v3.1/alpha/${ id }`;

    return this.http.get<Countries>(url);
  }


}
